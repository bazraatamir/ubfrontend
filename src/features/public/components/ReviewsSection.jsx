import React, { useState, useEffect } from "react";
import axiosInstance from "../../../shared/axios"; // Import axiosInstance
import ReviewCard from "./ReviewCard";

// Remove placeholder, no longer needed
// const RESTAURANT_ID_PLACEHOLDER = 1;

// Expect restaurantId to be passed as a prop
export default function ReviewsSection({ restaurantId }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Only fetch if restaurantId is provided
    if (!restaurantId) {
      setLoading(false);
      setError("Сэтгэгдэл харуулах рестораны ID олдсонгүй.");
      setReviews([]);
      return; // Stop execution if no ID
    }

    const fetchApprovedReviews = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch approved reviews for the specific restaurant ID from props
        const response = await axiosInstance.get(`/feedback/restaurant/${restaurantId}`);
        // Backend should filter for approved status for public view
        // Frontend filtering is an extra safety measure
        setReviews(response.data.filter(review => review.status === 'APPROVED') || []);
      } catch (err) {
        console.error("Error fetching reviews:", err.response ? err.response.data : err);
        setError("Сэтгэгдлүүдийг ачааллахад алдаа гарлаа.");
        setReviews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchApprovedReviews();
    // Fetch reviews whenever the restaurantId prop changes
  }, [restaurantId]);

  return (
    <section className='container m-auto mt-28 flex items-center justify-center bg-[#0e1b21] '>
      <div className='w-full max-w-[1980px] flex flex-col items-center justify-center  '>
        <div className='w-full text-4xl text-center text-lime-500 max-md:text-3xl max-md:mt-8'>
          <h2 className='mx-auto w-fit max-md:mt-8' data-aos='fade-up'>
            Үйлчлүүлэгчдийн сэтгэгдэл
          </h2>
        </div>

        <div
          className='mt-14 w-full max-w-[1620px] h-px border border-lime-50 border-solid max-md:mt-10'
          data-aos='fade-up'
        />

        <div className='mt-10 w-full'>
           {loading && <div className="text-center text-gray-400 py-4">Сэтгэгдлүүдийг ачааллаж байна...</div>}
           {error && <div className="text-center text-red-500 py-4">{error}</div>}
           {!loading && !error && (
             <>
               {reviews.length === 0 ? (
                 <div className="text-center text-gray-400 py-4">Энэ ресторанд батлагдсан сэтгэгдэл одоогоор алга байна.</div>
               ) : (
                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10'>
                   {reviews.map(review => (
                     <div key={review.id} className='w-full'>
                       <ReviewCard>
                         {review.message} {/* Display the actual feedback message */}
                       </ReviewCard>
                     </div>
                   ))}
                 </div>
               )}
             </>
           )}
        </div>

        {/* Divider */}
        <div
          className='mt-10 w-full max-w-[1620px] h-px border border-lime-50 border-solid'
          data-aos='fade-up'
        />
      </div>
    </section>
  );
}
