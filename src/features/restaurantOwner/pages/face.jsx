import React, {useEffect, useState} from "react";
import Layout from "../layouts/Layout";
import RestaurantPage from "../../public/pages/RestaurantPage";
import axiosInstance from "../../../shared/axios";

const Face = () => {
  const [restaurantData, setRestaurantData] = useState("");
  const [hero, setHero] = useState();
  useEffect(() => {
    const savedId = localStorage.getItem("restaurantId");

    const fetchdistrict = async () => {
      const response = await axiosInstance.get(`/restaurants/${savedId}`);
      // const Heroresponse = await axiosInstance.get(`/heros/${savedId}`);

      setRestaurantData(response.data);
    };
    fetchdistrict();
  }, []);
  return restaurantData && <RestaurantPage text={restaurantData.description} />;
};

export default Face;
