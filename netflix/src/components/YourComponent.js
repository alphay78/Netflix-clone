import React, { useEffect, useState } from "react";
import { fetchTrending } from "../api/apiService";

const YourComponent = () => {
  const [trendingData, setTrendingData] = useState(null);

  useEffect(() => {
    const getTrendingData = async () => {
      const data = await fetchTrending();
      setTrendingData(data);
    };

    getTrendingData();
  }, []);

  return (
    <div>
      {trendingData ? (
        trendingData.results.map((item) => (
          <div key={item.id}>{item.title || item.name}</div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default YourComponent;
