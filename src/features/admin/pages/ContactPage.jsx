import React, { useState } from "react";

const initialLogos = [
  { id: 1, src: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Bitmap_Logo_example.png", alt: "Logo 1" },
  { id: 2, src: "https://cdn.builder.io/api/v1/image/assets%2F4f560f3098894f68b3412840c0587797%2Ff2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e2?width=200", alt: "Logo 2" },
  { id: 3, src: "https://1000logos.net/wp-content/uploads/2021/04/Amazon-logo.png", alt: "Amazon" },
  { id: 4, src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg", alt: "Logo 4" },
];

function ContactPage() {
  const [logos, setLogos] = useState(initialLogos);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newLogo, setNewLogo] = useState({ file: null, preview: null, alt: "" });

  const handleDelete = (id) => {
    setLogos(logos.filter(logo => logo.id !== id));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewLogo({
        file,
        preview: URL.createObjectURL(file),
        alt: file.name
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newLogo.preview) {
      setLogos([...logos, {
        id: logos.length + 1,
        src: newLogo.preview,
        alt: newLogo.alt
      }]);
      setNewLogo({ file: null, preview: null, alt: "" });
      setIsModalOpen(false);
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-white">Харилцагч байгууллагуудын лого</h2>
          <p className="text-gray-300">Энэ хуудсанд та нүүр хуудасны доор гүйж буй харилцагч байгууллагуудын лого нэмэх, устгах боломжтой</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Лого нэмэх
        </button>
      </div>

      <div className="grid grid-cols-4 gap-8">
        {logos.map((logo) => (
          <div key={logo.id} className="relative bg-white rounded-lg flex items-center justify-center h-40 shadow-md p-4 hover:shadow-lg transition-shadow">
            <img src={logo.src} alt={logo.alt} className="object-contain max-h-24 max-w-32" />
            <button
              onClick={() => handleDelete(logo.id)}
              className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-red-100 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Modal for adding new logo */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Шинэ лого нэмэх</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Лого сонгох
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  {newLogo.preview ? (
                    <div className="relative">
                      <img src={newLogo.preview} alt="Preview" className="max-h-32 mx-auto" />
                      <button
                        type="button"
                        onClick={() => setNewLogo({ file: null, preview: null, alt: "" })}
                        className="absolute top-0 right-0 bg-white rounded-full p-1 shadow"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                        id="logo-upload"
                      />
                      <label
                        htmlFor="logo-upload"
                        className="cursor-pointer text-blue-500 hover:text-blue-600"
                      >
                        Зураг сонгох
                      </label>
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Тайлбар текст
                </label>
                <input
                  type="text"
                  value={newLogo.alt}
                  onChange={(e) => setNewLogo({ ...newLogo, alt: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Жишээ: Amazon лого"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Болих
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  disabled={!newLogo.preview}
                >
                  Хадгалах
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactPage; 