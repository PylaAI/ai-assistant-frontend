import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ChooseMap.css";

interface Map {
  id: string;
  name: string;
  imageUrl: string;
}

interface ChooseMapProps {
  onMapSelect: (map: string) => void;
}

const ChooseMap: React.FC<ChooseMapProps> = ({ onMapSelect }) => {
  const [maps, setMaps] = useState<Map[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMaps = async () => {
      try {
        const response = await fetch("https://pylaaibrawlstars.pythonanywhere.com/maps");
        const data = await response.json();
        setMaps(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch maps. Please try again later.");
        setLoading(false);
      }
    };

    fetchMaps();
  }, []);

  const handleMapClick = (mapName: string) => {
    onMapSelect(mapName); // Изпраща избраната карта към родителския компонент
    navigate("/"); // Връща се към предишната страница
  };

  if (loading) return <p>Loading maps...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="choose-map-container">
      <h2>Choose a Map</h2>
      <div className="map-grid">
        {maps.map((map) => (
          <div
            key={map.id}
            className="map-card"
            onClick={() => handleMapClick(map.name)}
          >
            <img
              src={map.imageUrl}
              alt={map.name}
              className="map-image"
            />
            <p className="map-name">{map.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseMap;
