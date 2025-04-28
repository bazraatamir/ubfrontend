import React, { useState } from "react";

const user = { id: "123", role: "admin" }; // Жишээ хэрэглэгч (role: 'admin' эсвэл 'user')

const CommentsPage = () => {
  const [comments, setComments] = useState([
    {
      _id: "1",
      userId: "123",
      userName: "Бат",
      createdAt: new Date().toISOString(),
      content: "Үнэхээр гоё үйлчилгээтэй ресторан байна!",
      reply: "Баярлалаа!",
      image: null,
      status: "pending",
    },
    {
      _id: "2",
      userId: "456",
      userName: "Сараа",
      createdAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
      content: "Хоол нь амттай байсан.",
      reply: "",
      image: null,
      status: "pending",
    },
    {
      _id: "3",
      userId: "789",
      userName: "Дорж",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
      content: "Үйлчилгээ таалагдсан.",
      reply: "",
      image: null,
      status: "approved",
    },
    {
      _id: "4",
      userId: "999",
      userName: "Номин",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
      content: "Орчин цэвэрхэн байсан.",
      reply: "",
      image: null,
      status: "approved",
    },
  ]);

  const handleDelete = (commentId) => {
    setComments((prev) => prev.filter((c) => c._id !== commentId));
  };

  const handleApprove = (commentId) => {
    setComments((prev) =>
      prev.map((c) =>
        c._id === commentId ? { ...c, status: "approved" } : c
      )
    );
  };

  const isAdmin = user.role === "admin";

  // Sort by createdAt desc
  const sortedComments = [...comments].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const latestComments = sortedComments.slice(0, 2);
  const pendingComments = comments.filter((c) => c.status === "pending");
  const approvedComments = comments.filter((c) => c.status === "approved");

  const renderCommentCard = (comment, showApprove = false) => (
    <div key={comment._id} className="bg-[#323a45] rounded-xl shadow-md p-4 flex items-center justify-between mb-4">
      <div className="flex items-center gap-4">
        <img
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(comment.userName)}`}
          alt="avatar"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <div className="font-bold text-lg">{comment.userName}</div>
          <div className="text-gray-400 text-sm mb-1">{new Date(comment.createdAt).toLocaleDateString()}</div>
          <div className="text-white mb-2">{comment.content}</div>
          {comment.image && (
            <img src={comment.image} alt="comment upload" className="w-24 h-24 object-cover rounded mb-2" />
          )}
          {comment.reply && (
            <div className="bg-[#222b34] text-lime-400 rounded-md px-3 py-2 mt-2 text-sm">
              <span className="font-semibold">Хариулт: </span>{comment.reply}
            </div>
          )}
        </div>
      </div>
      {isAdmin && (
        <div className="flex items-center gap-2 ml-4">
          {showApprove && (
            <button
              onClick={() => handleApprove(comment._id)}
              className="bg-lime-500 hover:bg-lime-600 w-10 h-10 flex items-center justify-center rounded text-white"
              title="Батлах"
              style={{borderRadius: '8px'}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </button>
          )}
          <button
            onClick={() => handleDelete(comment._id)}
            className="bg-orange-500 hover:bg-orange-600 w-10 h-10 flex items-center justify-center rounded text-white"
            title="Устгах"
            style={{borderRadius: '8px'}}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0A171F] text-white p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Latest comments */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Сүүлд нэмэгдсэн сэтгэгдэл</h2>
          <div className="bg-[#232b32] rounded-xl p-4 min-h-[300px]">
            {latestComments.length === 0 && (
              <div className="text-gray-400">Сүүлд нэмэгдсэн сэтгэгдэл алга</div>
            )}
            {latestComments.map((comment) => renderCommentCard(comment))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3">Хүлээгдэж буй сэтгэгдэл</h2>
          <div className="bg-[#232b32] rounded-xl p-4 min-h-[300px]">
            {pendingComments.length === 0 && (
              <div className="text-gray-400">Хүлээгдэж буй сэтгэгдэл алга</div>
            )}
            {pendingComments.map((comment) => renderCommentCard(comment, true))}
          </div>
          <h2 className="text-2xl font-semibold mb-3 mt-8">Батлагдсан сэтгэгдэл</h2>
          <div className="bg-[#232b32] rounded-xl p-4 min-h-[300px]">
            {approvedComments.length === 0 && (
              <div className="text-gray-400">Батлагдсан сэтгэгдэл алга</div>
            )}
            {approvedComments.map((comment) => renderCommentCard(comment))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsPage; 