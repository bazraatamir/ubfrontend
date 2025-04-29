import React, {useEffect, useState} from "react";
import Layout from "../layouts/Layout";
import FaceRestaurantPage from "../components/faceRestaurant";
import axiosInstance from "../../../shared/axios";
import RestaurantPage from "../components/faceRestaurant";

const Face = () => {
  const [restaurantData, setRestaurantData] = useState("");
  
  useEffect(() => {
    const savedId = localStorage.getItem("restaurantId");
    const fetchdistrict = async () => {
      const response = await axiosInstance.get(`/restaurants/${savedId}`);
      // const Heroresponse = await axiosInstance.get(`/heros/${savedId}`);

      setRestaurantData(response);
    };
    fetchdistrict();
  }, []);
  return restaurantData && <FaceRestaurantPage restaurant={restaurantData} />;
};

export default Face;
