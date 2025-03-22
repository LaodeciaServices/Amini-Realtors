import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import ListingForm from "./ListingForm";

export default function CreateListing() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    imageUrls: [],
    name: "",
    description: "",
    address: "",
    type: "rent",
    bedrooms: 1,
    bathrooms: 1,
    regularPrice: 50,
    discountPrice: 0,
    offer: false,
    parking: false,
    furnished: false,
    user_id: currentUser.id,
  });
  const [imageUploadError, setImageUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleImageSubmit = async () => {
    if (files.length > 0 && files.length + formData.imageUrls.length < 7) {
      setUploading(true);
      setImageUploadError(false);
      const urls = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileName = `${new Date().getTime()}_${file.name}`;
        const { data, error } = await supabase.storage
          .from("listings-images")
          .upload(fileName, file);

        if (error) {
          console.log(error);
          setImageUploadError("Image upload failed (2 mb max per image)");
          setUploading(false);
          return;
        }

        const { data: urlData } = supabase.storage
          .from("listings-images")
          .getPublicUrl(data.path);

        urls.push(urlData.publicUrl);
      }

      setFormData({
        ...formData,
        imageUrls: formData.imageUrls.concat(urls),
      });
      setImageUploadError(false);
      setUploading(false);
    } else {
      setImageUploadError("You can only upload 6 images per listing");
      setUploading(false);
    }
  };

  const handleRemoveImage = (index) => {
    setFormData({
      ...formData,
      imageUrls: formData.imageUrls.filter((_, i) => i !== index),
    });
  };

  const handleChange = (e) => {
    if (e.target.id === "sale" || e.target.id === "rent") {
      setFormData({
        ...formData,
        type: e.target.id,
      });
    }

    if (
      e.target.id === "parking" ||
      e.target.id === "furnished" ||
      e.target.id === "offer"
    ) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.checked,
      });
    }

    if (
      e.target.type === "number" ||
      e.target.type === "text" ||
      e.target.type === "textarea"
    ) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.imageUrls.length < 1)
        return setError("You must upload at least one image");
      if (+formData.regularPrice < +formData.discountPrice)
        return setError("Discount price must be lower than regular price");
      setLoading(true);
      setError(false);

      // Insert listing data into the `listings` table
      const { data: listingData, error: listingError } = await supabase
        .from("listings")
        .insert([
          {
            user_id: currentUser.id,
            name: formData.name,
            description: formData.description,
            address: formData.address,
            type: formData.type,
            bedrooms: formData.bedrooms,
            bathrooms: formData.bathrooms,
            regular_price: formData.regularPrice,
            discount_price: formData.discountPrice,
            offer: formData.offer,
            parking: formData.parking,
            furnished: formData.furnished,
          },
        ])
        .select()
        .single();

      if (listingError) throw listingError;

      // Insert image URLs into the `images` table
      const imageInserts = formData.imageUrls.map((url) => ({
        listing_id: listingData.listing_id,
        image_url: url,
      }));

      const { error: imageError } = await supabase
        .from("images")
        .insert(imageInserts);

      if (imageError) throw imageError;

      setLoading(false);
      navigate(`/listing/${listingData.listing_id}`);
    } catch (error) {
      console.log(error);
      setError(error.message);
      setLoading(false);
    }
  };
  return (
    <ListingForm
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      setFiles={setFiles}
      handleImageSubmit={handleImageSubmit}
      uploading={uploading}
      imageUploadError={imageUploadError}
      handleRemoveImage={handleRemoveImage}
      loading={loading}
      error={error}
      formState={"create"}
    />
  );
}

// formData,
//   handleChange,
//   handleSubmit,
//   setFiles,
//   handleImageSubmit,
//   uploading,
//   imageUploadError,
//   handleRemoveImage,
//   loading,
//   error,
