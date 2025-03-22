import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function UserListings() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  // Fetch listings posted by the current user
  useEffect(() => {
    const fetchListings = async () => {
      try {
        setLoading(true);
        setError("");

        // Fetch listings where user_id matches the current user's ID
        const { data, error: fetchError } = await supabase
          .from("listings")
          .select("*")
          .eq("user_id", currentUser.id);

        if (fetchError) {
          throw fetchError;
        }

        setListings(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch listings.");
        setLoading(false);
        console.error("Error fetching listings:", error);
      }
    };

    if (currentUser) {
      fetchListings();
    }
  }, [currentUser]);

  // Delete a listing
  const handleDeleteListing = async (listingId) => {
    console.log("Deleting listing:", listingId);
    try {
      setError("");

      // Step 1: Delete all images associated with the listing
      const { error: deleteImagesError } = await supabase
        .from("images")
        .delete()
        .eq("listing_id", listingId);

      if (deleteImagesError) {
        console.log("Error deleting images:", deleteImagesError);
        throw deleteImagesError;
      }

      // Delete the listing from the database
      const { error: deleteError } = await supabase
        .from("listings")
        .delete()
        .eq("listing_id", listingId);

      if (deleteError) {
        console.log("Error deleting listing:", deleteError);
        throw deleteError;
      }

      // Remove the deleted listing from the state
      setListings((prevListings) =>
        prevListings.filter((listing) => listing.listing_id !== listingId)
      );
    } catch (error) {
      setError("Failed to delete listing.");
      console.error("Error deleting listing:", error);
    }
  };

  // Navigate to the update form
  const handleUpdateListing = (listingId) => {
    console.log(listingId);
    navigate(`/update-listing/${listingId}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Your Listings</h1>
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {listings.length === 0 && !loading && (
        <p className="text-center">You have no listings yet.</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {listings.map((listing) => (
          <div
            key={listing.id}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold">{listing.name}</h2>
            <p className="text-gray-600">{listing.address}</p>
            <p className="text-green-700 font-semibold">
              ${listing.regular_price} {listing.type === "rent" && "/ month"}
            </p>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => handleUpdateListing(listing.listing_id)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Update
              </button>
              <button
                onClick={() => handleDeleteListing(listing.listing_id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
