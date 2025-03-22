import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import ListingForm from "./ListingForm";
import { toast } from "react-toastify";

export default function UpdateListing() {
  const { listingId } = useParams();
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [imageUploadError, setImageUploadError] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    address: "",
    type: "rent",
    bedrooms: 1,
    bathrooms: 1,
    regular_price: 50,
    discount_price: 0,
    offer: false,
    parking: false,
    furnished: false,
    imageUrls: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch the listing data to populate the form
  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        setError("");

        // Fetch the listing
        const { data: listingData, error: fetchListingError } = await supabase
          .from("listings")
          .select("*")
          .eq("listing_id", listingId)
          .single();

        if (fetchListingError) {
          throw fetchListingError;
        }

        // Fetch the images
        const { data: imagesData, error: fetchImagesError } = await supabase
          .from("images")
          .select("image_url")
          .eq("listing_id", listingId);

        if (fetchImagesError) {
          throw fetchImagesError;
        }

        // Set the fetched data in the formData
        setFormData({
          ...listingData,
          imageUrls: imagesData.map((image) => image.image_url), // Store image URLs temporarily
        });

        setLoading(false);
      } catch (error) {
        setError("Failed to fetch listing.");
        setLoading(false);
        console.error("Error fetching listing:", error);
      }
    };

    fetchListing();
  }, [listingId]);

  const handleImageSubmit = async () => {
    if (files?.length > 0 && files?.length + formData.imageUrls.length < 7) {
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

      // Add new image URLs to the formData
      setFormData({
        ...formData,
        imageUrls: formData.imageUrls.concat(urls),
      });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");

      // Step 1: Delete old images from the `images` table
      const { error: deleteImagesError } = await supabase
        .from("images")
        .delete()
        .eq("listing_id", listingId);

      if (deleteImagesError) {
        throw deleteImagesError;
      }

      // Step 2: Insert new images into the `images` table
      const imageInserts = formData.imageUrls.map((url) => ({
        listing_id: listingId,
        image_url: url,
      }));

      const { error: insertImagesError } = await supabase
        .from("images")
        .insert(imageInserts);

      if (insertImagesError) {
        throw insertImagesError;
      }

      // Step 3: Update the listing (without imageUrls)
      const { imageUrls, ...listingData } = formData; // Remove imageUrls from the data
      const { error: updateError } = await supabase
        .from("listings")
        .update(listingData)
        .eq("listing_id", listingId);

      if (updateError) {
        throw updateError;
      }

      setLoading(false);
      toast.success("Listing updated successfully!");
      setTimeout(() => {
        navigate(`/listing/${listingId}`);
      }, 2000);
    } catch (error) {
      setError("Failed to update listing.");
      setLoading(false);
      console.error("Error updating listing:", error);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
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
      formState="update"
    />
  );
}
