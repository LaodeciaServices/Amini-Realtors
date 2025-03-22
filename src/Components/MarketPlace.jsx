import { useEffect, useState } from "react";
import ListingItem from "./listing/ListingItem";
import { useSelector } from "react-redux";
import { supabase } from "../supabaseClient";

function MarketPlace() {
  const [listing, setListing] = useState([]); // Initialize as an array
  const { currentUser } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);

        const { data: listingData, error: listingError } = await supabase
          .from("listings")
          .select(
            `
            *,
            images!inner (image_url)
          `
          )
          .limit(1, { foreignTable: "images" }); // Fetch only one image per listing

        if (listingError) {
          throw listingError;
        }

        // Transform data to attach the first image to each listing
        const listingsWithImages = listingData.map((listing) => ({
          ...listing,
          imageUrl: listing.images?.[0]?.image_url || "", // Use first image or empty string
        }));

        setListing(listingsWithImages);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.error("Error fetching listing:", error);
      }
    };

    fetchListing();
  }, []);

  return (
    <div className="mt-10 md:pt-20">
      {loading ? (
        "Loading..."
      ) : error ? (
        <p className="text-red-500">Error fetching listings</p>
      ) : listing.length === 0 ? (
        <p>No listings available</p>
      ) : (
        listing.map((list, index) => <ListingItem key={index} listing={list} />)
      )}
    </div>
  );
}

export default MarketPlace;
