import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { DonationCard } from "../components/DonationCard";

const Home = () => {
  const [donationsData, setDonationsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("./data.json");
      const data = await response.json();
      setDonationsData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <main className="container mx-auto py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {donationsData.map((donation) => (
          <DonationCard key={donation.id} donation={donation} />
        ))}
      </main>
    </div>
  );
};

export default Home;
