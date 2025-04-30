import {useState, useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import axiosInstance from "../../../shared/axios";

export default function RestaurantSection({title, type, status}) {
  const [showAll, setShowAll] = useState(false);
  const [restaurantData, setRestaurantData] = useState([]);
  const [allVideos, setAllVideos] = useState([]);

  const handleStatusChange = async (videoId, currentStatus) => {
    try {
      await axiosInstance.post(`/home/${videoId}/approve`);
      // Refresh the data after status change
      if (type === 'video') {
        const response = await axiosInstance.get("/home/");
        let videoData = [];
        if (Array.isArray(response.data)) {
          videoData = response.data;
        } else if (response.data && response.data.data) {
          videoData = response.data.data;
        } else if (response.data && typeof response.data === 'object') {
          videoData = [response.data];
        }

        const processedVideos = videoData.map(video => ({
          id: video.id,
          name: video.videoUrl ? video.videoUrl.split('/').pop() : 'Unknown video',
          type: 'video',
          status: video.status || 'pending',
          videoUrl: video.videoUrl || ''
        }));

        setAllVideos(processedVideos);
        setRestaurantData(processedVideos.filter(video => video.status.toLowerCase() === status.toLowerCase()));
      }
    } catch (error) {
      console.error("Error changing video status:", error);
    }
  };

  useEffect(() => {
    if (type === 'featured' || type === 'special') {
      const fetchHighlights = async () => {
        try {
          const response = await axiosInstance.get("/highlights/");
          const filtered = response.data
            .filter(h => h.status.toLowerCase() === status.toLowerCase())
            .map(h => ({
              id: h.restaurant.id,
              name: h.restaurant.name,
              type: type,
              status: h.status,
              image: h.restaurant.imageUrl,
              location: h.restaurant.location,
              description: h.restaurant.description
            }));
          setRestaurantData(filtered);
        } catch (error) {
          console.error("Error fetching highlights:", error);
        }
      };

      fetchHighlights();
    } else if (type === 'video') {
      const fetchVideos = async () => {
        try {
          console.log("Fetching videos...");
          const response = await axiosInstance.get("/home/");
          console.log("Video response:", response.data);
          
          let videoData = [];
          if (Array.isArray(response.data)) {
            videoData = response.data;
          } else if (response.data && response.data.data) {
            videoData = response.data.data;
          } else if (response.data && typeof response.data === 'object') {
            videoData = [response.data];
          }

          const processedVideos = videoData.map(video => ({
            id: video.id,
            name: video.videoUrl ? video.videoUrl.split('/').pop() : 'Unknown video',
            type: 'video',
            status: video.status || 'pending',
            videoUrl: video.videoUrl || ''
          }));

          console.log("Processed video data:", processedVideos);
          setAllVideos(processedVideos);
          setRestaurantData(processedVideos.filter(video => video.status.toLowerCase() === status.toLowerCase()));
        } catch (error) {
          console.error("Error fetching videos:", error);
          console.error("Error details:", error.response?.data || error.message);
        }
      };

      fetchVideos();
    }
  }, [type, status]);

  const visible = showAll ? restaurantData : restaurantData.slice(0, 4);

  return (
    <div className='bg-[#2E3C49] rounded p-4'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='font-semibold text-lg'>{title}</h2>
        <button
          className='text-lime-400 font-semibold'
          onClick={() => setShowAll(!showAll)}>
          Бүгд үзэх
        </button>
      </div>
      <div className='space-y-4'>
        {visible.map((item, i) => {
          console.log("Rendering item:", item);
          return type === 'video' ? (
            <div key={i} className="bg-[#232b32] rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {item.videoUrl ? (
                  <video
                    src={`http://localhost:3000${item.videoUrl}`}
                    className="w-24 h-16 object-cover rounded"
                    controls
                  />
                ) : (
                  <div className="w-24 h-16 bg-gray-700 rounded flex items-center justify-center">
                    <span className="text-gray-400">No video</span>
                  </div>
                )}
                <div>
                  <p className="text-white font-medium">{item.name}</p>
                  <p className="text-gray-400 text-sm">Status: {item.status}</p>
                </div>
              </div>
              <button
                onClick={() => handleStatusChange(item.id, item.status)}
                className={`px-4 py-2 rounded ${
                  item.status === 'approved' 
                    ? 'bg-red-500 hover:bg-red-600' 
                    : 'bg-green-500 hover:bg-green-600'
                } text-white font-medium`}
              >
                {item.status === 'approved' ? 'Pending' : 'Approve'}
              </button>
            </div>
          ) : (
            <RestaurantCard key={i} restaurant={item}/>
          );
        })}
      </div>
    </div>
  );
}
