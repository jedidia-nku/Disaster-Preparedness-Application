import { useState, useEffect } from 'react';

const SatelliteImageComponent = () => {
  const [satelliteImageUrl, setSatelliteImageUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch satellite image from NASA API
  const fetchSatelliteImage = async () => {
    try {
      const response = await fetch(`https://api.nasa.gov/planetary/earth/imagery/?lon=100.75&lat=1.5&date=2024-09-01&dim=0.10&api_key=kES8tVNXBafZyvMLpfaSTG3I3kjzh9d1XHSezLXq`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Assuming the response is an image, get the URL directly
      const imageBlob = await response.blob(); // Use .blob() to get the binary data
      const imageUrl = URL.createObjectURL(imageBlob); // Create a URL for the image blob
  
      setSatelliteImageUrl(imageUrl);
      setLoading(false);
    } catch (error) {
      setError(`Error fetching satellite image: ${error.message}`);
      setLoading(false);
    }
  };

  // useEffect to fetch the image when component mounts
  useEffect(() => {
    fetchSatelliteImage();
  }, []);

  if (loading) return <p>Loading satellite image...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      {satelliteImageUrl ? (
        <img src={satelliteImageUrl} alt="Satellite Imagery" className="w-full h-auto rounded-md" />
      ) : (
        <p>No image available.</p>
      )}
    </div>
  );
};

export default SatelliteImageComponent;