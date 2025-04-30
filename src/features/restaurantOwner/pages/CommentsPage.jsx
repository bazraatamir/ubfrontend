import React, { useState, useEffect, useCallback } from "react";
import axiosInstance from "../../../shared/axios"; // Import axiosInstance
// import { useAuth } from "../../../context/AuthContext"; // Example: Import auth context if available

// Placeholder user for now - REMOVE THIS and use real auth context/state
// Define the placeholder user *outside* the component to ensure stable identity
const placeholderUser = { id: "1", role: "RESTAURANT_OWNER" };

const CommentsPage = () => {
  // const { user } = useAuth(); // Example: Get user from context
  // Use the stable placeholder user defined outside
  const user = placeholderUser;

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch comments specific to the logged-in owner
  const fetchComments = useCallback(async () => {
    if (!user) return; // Don't fetch if user is not loaded

    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('authToken');
      const response = await axiosInstance.get("/feedback/owner", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setComments(response.data || []);
    } catch (err) {
      console.error("Error fetching comments:", err.response ? err.response.data : err);
      setError("Сэтгэгдлүүдийг ачааллахад алдаа гарлаа. Та дахин оролдоно уу.");
      setComments([]); // Ensure it's an array on error
    } finally {
      setLoading(false);
    }
  }, [user]); // Refetch if user changes

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);


  const handleDelete = async (commentId) => {
     if (!window.confirm("Энэ сэтгэгдлийг устгахдаа итгэлтэй байна уу?")) {
      return;
    }
    // Optimistic UI update (optional, remove if causing issues)
    // const previousComments = comments;
    // setComments(prev => prev.filter(c => c.id !== commentId));
    // setError(null);

    try {
      const token = localStorage.getItem('authToken');
      await axiosInstance.delete(`/feedback/${commentId}`, {
         headers: {
          'Authorization': `Bearer ${token}`
        }
      });
       // Re-fetch comments to ensure consistency OR filter locally if successful
       fetchComments(); // Simplest way to update list
      // setComments(prev => prev.filter(c => c.id !== commentId)); // Local update on success
    } catch (err) {
      console.error("Error deleting comment:", err.response ? err.response.data : err);
      setError("Сэтгэгдэл устгахад алдаа гарлаа.");
      // Rollback optimistic update if it failed (optional)
      // setComments(previousComments);
    }
  };

  const handleApprove = async (commentId) => {
    // Optimistic UI update (optional)
    // const previousComments = comments;
    // setComments(prev =>
    //   prev.map(c => (c.id === commentId ? { ...c, status: "APPROVED" } : c))
    // );
    // setError(null);

    try {
      const token = localStorage.getItem('authToken');
      const response = await axiosInstance.put(`/feedback/${commentId}/status`,
       { status: 'APPROVED' },
       {
         headers: {
          'Authorization': `Bearer ${token}`
        }
       });
       // Re-fetch comments or update locally
       fetchComments(); // Simplest update
       // setComments(prev => prev.map(c => c.id === commentId ? response.data : c)); // Local update
    } catch (err) {
      console.error("Error approving comment:", err.response ? err.response.data : err);
      setError("Сэтгэгдэл батлахад алдаа гарлаа.");
      // Rollback optimistic update (optional)
      // setComments(previousComments);
    }
  };

  // Determine if the current user is an admin based on the actual user object
  // Replace 'RESTAURANT_OWNER' with your actual admin role identifier if different
  const isAdminOrOwner = user && (user.role === "ADMIN" || user.role === "RESTAURANT_OWNER");

  // Sort and filter comments based on fetched data
  const sortedComments = [...comments].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const latestComments = sortedComments.slice(0, 5); // Show more latest comments
  const pendingComments = comments.filter((c) => c.status === "PENDING");
  const approvedComments = comments.filter((c) => c.status === "APPROVED"); // Corrected status check

  const renderCommentCard = (comment, showApprove = false) => (
    <div key={comment.id} className="bg-[#323a45] rounded-xl shadow-md p-4 flex items-start justify-between mb-4"> {/* Use items-start */}
      <div className="flex items-start gap-4 flex-grow"> {/* Use items-start */}
        <img
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(comment.name)}&background=random&color=fff`} // Use comment.name for avatar
          alt="avatar"
          className="w-12 h-12 rounded-full flex-shrink-0" // Add flex-shrink-0
        />
        <div className="flex-grow"> {/* Allow text content to wrap */}
          <div className="font-bold text-lg">{comment.name}</div> {/* Use comment.name */}
          <div className="text-gray-400 text-sm mb-1">
             {new Date(comment.createdAt).toLocaleDateString()} - {comment.restaurant?.name || 'Unknown Restaurant'} {/* Show restaurant name */}
          </div>
          <div className="text-white mb-2 break-words">{comment.message}</div> {/* Use comment.message and allow word breaking */}
          {/* Remove image and reply sections as they are not in the backend model */}
        </div>
      </div>
      {/* Show controls only if the logged-in user is owner/admin */}
      {isAdminOrOwner && (
        <div className="flex flex-col sm:flex-row items-center gap-2 ml-4 flex-shrink-0"> {/* Adjust layout for buttons */}
          {showApprove && comment.status === 'PENDING' && ( // Only show approve for PENDING comments
            <button
              onClick={() => handleApprove(comment.id)} // Use comment.id
              className="bg-lime-500 hover:bg-lime-600 w-10 h-10 flex items-center justify-center rounded text-white transition-colors"
              title="Батлах"
              style={{borderRadius: '8px'}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </button>
          )}
          <button
            onClick={() => handleDelete(comment.id)} // Use comment.id
            className="bg-red-500 hover:bg-red-600 w-10 h-10 flex items-center justify-center rounded text-white transition-colors" // Changed to red for delete
            title="Устгах"
            style={{borderRadius: '8px'}}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"> {/* Slightly smaller icon */}
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );


  return (
    <div className="min-h-screen bg-[#0A171F] text-white p-6 ml-[80px] sm:ml-0"> {/* Added margin offset */}
      {loading && (
         <div className="flex justify-center items-center h-64">
           <div className="text-gray-400">Ачааллаж байна...</div>
           {/* Add a spinner here if desired */}
         </div>
       )}
       {error && (
         <div className="bg-red-800 text-white p-4 rounded-lg mb-6">
           <p><strong>Алдаа:</strong> {error}</p>
         </div>
       )}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8"> {/* Changed breakpoint to lg */}
        {/* Latest comments */}
        {!loading && !error && (
         <>
            <div>
              <h2 className="text-2xl font-semibold mb-3">Сүүлд нэмэгдсэн сэтгэгдэл</h2>
              <div className="bg-[#232b32] rounded-xl p-4 min-h-[300px]">
                {latestComments.length === 0 && !loading && (
                  <div className="text-gray-400 text-center py-10">Сүүлд нэмэгдсэн сэтгэгдэл алга.</div>
                )}
                {latestComments.map((comment) => renderCommentCard(comment))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3">Хүлээгдэж буй сэтгэгдэл</h2>
              <div className="bg-[#232b32] rounded-xl p-4 min-h-[300px]">
                {pendingComments.length === 0 && !loading && (
                  <div className="text-gray-400 text-center py-10">Хүлээгдэж буй сэтгэгдэл алга.</div>
                )}
                {pendingComments.map((comment) => renderCommentCard(comment, true))}
              </div>
              <h2 className="text-2xl font-semibold mb-3 mt-8">Батлагдсан сэтгэгдэл</h2>
              <div className="bg-[#232b32] rounded-xl p-4 min-h-[300px]">
                {approvedComments.length === 0 && !loading && (
                  <div className="text-gray-400 text-center py-10">Батлагдсан сэтгэгдэл алга.</div>
                )}
                {approvedComments.map((comment) => renderCommentCard(comment))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CommentsPage; 