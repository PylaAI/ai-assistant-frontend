import React, { useEffect, useState } from "react";

interface MapInputProps {
  onSelectMap: (mapName: string) => void;
}

const MapInput: React.FC<MapInputProps> = ({ onSelectMap }) => {
  const [maps, setMaps] = useState<{ id: string; name: string; imgUrl: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMaps = async () => {
      try {
        const response = await fetch("https://example.com/api/maps"); 
        if (!response.ok) {
          throw new Error("Failed to fetch maps");
        }
        const data = await response.json();
        setMaps(data);
      } catch (err) {
        setError("Error loading maps");
      } finally {
        setLoading(false);
      }
    };

    fetchMaps();
  }, []);

  if (loading) {
    return <p>Loading maps...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="map-input">
      <h3>Select a Map</h3>
      <div className="map-list">
        {maps.map((map) => (
          <div
            key={map.id}
            className="map-item"
            onClick={() => onSelectMap(map.name)}
          >
            <img src={map.imgUrl} alt={map.name} className="map-image" />
            <p>{map.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapInput;
