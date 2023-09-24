import { useEffect, useState } from "react";

function useData() {
  const [donationsData, setDonationsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("./data.json");
      const data = await response.json();
      setDonationsData(data);
    };

    fetchData();
  }, []);

  return donationsData;
}

export default useData;
