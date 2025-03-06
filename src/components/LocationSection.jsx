"use client";
import React, { useState, useCallback } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import SaveButton from "./icons/SaveButton";
import PlusIcon from "./icons/PlusIcon";
import "leaflet/dist/leaflet.css";

function LocationSection() {
  const [location, setLocation] = useState(""); 
  const [locationName, setLocationName] = useState("");
  const [savedLocations, setSavedLocations] = useState([]);
  const [mapLocation, setMapLocation] = useState(null);
  const [showMapModal, setShowMapModal] = useState(false);
  const [mapCenter, setMapCenter] = useState([47.8864, 106.9057]);
  const [markerPosition, setMarkerPosition] = useState(null);

  const fetchLocationName = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetail=1`
      );
      const data = await response.json();
      
      const displayName = data.display_name || 'Тодорхойгүй байршил';
      setLocationName(displayName);
      return displayName;
    } catch (error) {
      console.error("Байршлын нэр авахад алдаа гарлаа:", error);
      setLocationName('Байршлын нэрийг тодорхойлох боломжгүй');
      return 'Байршлын нэрийг тодорхойлох боломжгүй';
    }
  };

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSaveLocation = useCallback(() => {
    if (mapLocation) {
      const newSavedLocation = {
        id: Date.now(),
        coordinates: mapLocation,
        locationName: locationName,
        description: location
      };

      setSavedLocations(prevLocations => [...prevLocations, newSavedLocation]);
      
      setLocation("");
      setLocationName("");
      setMapLocation(null);
      setMarkerPosition(null);
      setShowMapModal(false);
    }
  }, [mapLocation, locationName, location]);

  function LocationMarker() {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        const locationString = `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
        
        setMarkerPosition([lat, lng]);
        setMapLocation(locationString);
        setLocation(locationString);
        
        fetchLocationName(lat, lng);
      },
    });

    return markerPosition ? (
      <Marker position={markerPosition}>
        <Popup>Сонгосон байршил: {mapLocation}</Popup>
      </Marker>
    ) : null;
  }

  return (
    <section className="mt-4">
      <button
        className="flex items-center justify-start px-5 py-2.5 max-w-full text-sm font-bold text-white bg-gray-800 rounded-md w-full sm:w-[203px]"
        aria-label="Add Location"
        onClick={() => setShowMapModal(true)}
      >
        <span className="mr-3">Байршил нэмэх</span>
        <div className="w-6 h-6 bg-[#8CBC01] rounded-full flex items-center justify-center">
          <div className="w-4 h-4">
            <PlusIcon />
          </div>
        </div>
      </button>

      {/* Map Modal */}
      {showMapModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-zinc-900 rounded-xl p-4 w-11/12 max-w-2xl relative">
            <button 
              onClick={() => setShowMapModal(false)}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              ×
            </button>
            <div className="mt-4">
              <MapContainer
                center={mapCenter}
                zoom={13}
                style={{ width: "100%", height: "400px" }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <LocationMarker />
              </MapContainer>
              
              {mapLocation && (
                <div className="mt-2 text-white">
                  <div>Сонгосон координат: {mapLocation}</div>
                  {locationName && (
                    <div>Байршлын нэр: {locationName}</div>
                  )}
                </div>
              )}
              
              <div className="flex justify-end mt-4">
                <button 
                  onClick={handleSaveLocation}
                  disabled={!mapLocation}
                  className="bg-[#8CBC01] text-white px-4 py-2 rounded disabled:opacity-50"
                >
                  Хадгалах
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center gap-4 mt-3 px-7 py-3.5 bg-zinc-900 rounded-xl shadow-lg w-full sm:w-[529px] max-md:flex-col max-md:gap-3 max-md:px-4">
        <input
          type="text"
          placeholder="Байршил оруулах..."
          value={location}
          onChange={handleInputChange}
          className="flex-grow px-4 py-2 bg-gray-800 rounded-md text-sm text-white shadow-md focus:outline-none"
        />
        <div onClick={handleSaveLocation}>
          <SaveButton
            disabled={!mapLocation}
          />
        </div>
      </div>

      {savedLocations.length > 0 && (
        <div className="mt-4">
          <h3 className="text-white text-lg mb-2">Хадгалсан байршлууд:</h3>
          <div className="flex items-center gap-4 px-7 py-3.5 bg-zinc-900 rounded-xl shadow-lg w-full sm:w-[529px] max-md:flex-col max-md:gap-3 max-md:px-4">
            <ul className="w-full space-y-2">
              {savedLocations.map((savedLocation) => (
                <li 
                  key={savedLocation.id} 
                  className="bg-gray-800 p-2 rounded text-white"
                >
                  <div className="text-sm font-medium">Координат: {savedLocation.coordinates}</div>
                  {savedLocation.locationName && (
                    <div className="text-xs text-gray-300">
                      Байршил: {savedLocation.locationName}
                    </div>
                  )}
                  {savedLocation.description && (
                    <div className="text-xs text-gray-400">
                      Тайлбар: {savedLocation.description}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}

export default LocationSection;