"use client";
import React, { useState, useCallback, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [searchError, setSearchError] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const fetchLocationName = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetail=1`
      );
      const data = await response.json();

      const displayName = data.display_name || "Тодорхойгүй байршил";
      setLocationName(displayName);
      return displayName;
    } catch (error) {
      console.error("Байршлын нэр авахад алдаа гарлаа:", error);
      setLocationName("Байршлын нэрийг тодорхойлох боломжгүй");
      return "Байршлын нэрийг тодорхойлох боломжгүй";
    }
  };

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
    setSearchError("");

    // If user clears the search query, clear search results
    if (!e.target.value.trim()) {
      setSearchResults([]);
      return;
    }

    // Debounce search
    debouncedSearch(e.target.value);
  };

  // Debounce search to avoid too many API calls
  const debouncedSearch = useCallback(
    debounce((query) => {
      searchPlaces(query);
    }, 500),
    []
  );

  // Debounce function
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  const searchPlaces = async (query) => {
    if (!query.trim()) return;

    setIsSearching(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          query
        )}&limit=5`
      );
      const data = await response.json();

      if (data && data.length > 0) {
        setSearchResults(data);
        setSearchError("");
      } else {
        setSearchResults([]);
        setSearchError("Хайлтаар үр дүн олдсонгүй");
      }
    } catch (error) {
      console.error("Хайлт хийх үед алдаа гарлаа:", error);
      setSearchError("Хайлт хийх үед алдаа гарлаа");
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setSearchError("Хайх үгээ оруулна уу");
      return;
    }

    searchPlaces(searchQuery);
  };

  const selectSearchResult = (result) => {
    const { lat, lon, display_name } = result;
    const newPosition = [parseFloat(lat), parseFloat(lon)];

    // Update map center to search result
    setMapCenter(newPosition);

    // Update marker position
    setMarkerPosition(newPosition);

    // Set location string
    const locationString = `${parseFloat(lat).toFixed(6)}, ${parseFloat(
      lon
    ).toFixed(6)}`;
    setMapLocation(locationString);
    setLocation(locationString);

    // Set location name
    setLocationName(display_name);

    // Clear search results
    setSearchResults([]);
  };

  const handleSaveLocation = useCallback(() => {
    if (mapLocation) {
      const newSavedLocation = {
        id: Date.now(),
        coordinates: mapLocation,
        locationName: locationName,
        description: location,
      };

      setSavedLocations((prevLocations) => [
        ...prevLocations,
        newSavedLocation,
      ]);

      setLocation("");
      setLocationName("");
      setMapLocation(null);
      setMarkerPosition(null);
      setShowMapModal(false);
      setSearchQuery("");
      setSearchResults([]);
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

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setSearchResults([]);
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      // Clear any pending debounced searches
      if (debouncedSearch.cancel) {
        debouncedSearch.cancel();
      }
    };
  }, []);

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
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-zinc-900 rounded-xl p-4 w-11/12 max-w-2xl relative">
            {/* Improved X button styling - moved to a better position */}
            <button
              onClick={() => {
                setShowMapModal(false);
                setSearchQuery("");
                setSearchResults([]);
              }}
              className="absolute top-4 right-4 flex items-center justify-center w-6 h-6 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition-colors"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Title */}
            <h3 className="text-white text-lg mb-4 pr-6">Байршил сонгох</h3>

            {/* Search bar - adjusted to prevent overlap */}
            <div className="mb-4 flex gap-2">
              <div
                className="relative flex-grow"
                onClick={(e) => e.stopPropagation()}
              >
                <input
                  type="text"
                  placeholder="Байршил хайх..."
                  value={searchQuery}
                  onChange={handleSearchQueryChange}
                  className="w-full px-4 py-2 bg-gray-800 rounded-md text-sm text-white shadow-md focus:outline-none"
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                />
                {searchResults.length > 0 && (
                  <div className="absolute mt-1 w-full bg-gray-800 rounded-md shadow-lg z-50 max-h-48 overflow-y-auto">
                    {searchResults.map((result, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-white text-sm border-b border-gray-700 last:border-b-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          selectSearchResult(result);
                        }}
                      >
                        {result.display_name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={handleSearch}
                className="bg-[#8CBC01] text-white px-3 py-2 rounded text-sm min-w-16 flex-shrink-0"
              >
                Хайх
              </button>
            </div>
            {searchError && (
              <div className="text-red-500 text-sm mb-2">{searchError}</div>
            )}
            {isSearching && (
              <div className="text-gray-300 text-sm mb-2">Хайж байна...</div>
            )}

            <div className="mt-2 relative z-10">
              <MapContainer
                center={mapCenter}
                zoom={13}
                style={{ width: "100%", height: "350px" }}
                key={mapCenter.toString()} // Force re-render when center changes
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <LocationMarker />
              </MapContainer>

              {mapLocation && (
                <div className="mt-2 text-white">
                  <div>Сонгосон координат: {mapLocation}</div>
                  {locationName && (
                    <div className="text-sm text-gray-300 mt-1">
                      Байршлын нэр: {locationName}
                    </div>
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
                  <div className="text-sm font-medium">
                    Координат: {savedLocation.coordinates}
                  </div>
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
