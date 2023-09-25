import { Header } from "../components/Header";
import { DonationCard } from "../components/DonationCard";
import useData from "../hooks/useData.js";
import { useEffect, useState } from "react";
import { EmptyState } from "../components/EmptyState";

const Home = () => {
  const donationsData = useData();
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(donationsData);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchText) return;

    const data = donationsData.filter(
      (data) => data.category.toLowerCase() === searchText.toLowerCase()
    );
    setFilteredData(data);
    setSearchText("");
  };

  useEffect(() => {
    setFilteredData(donationsData);
  }, [donationsData]);

  return (
    <div>
      <Header
        searchText={searchText}
        setSearchText={setSearchText}
        handleSubmit={handleSubmit}
      />
      {filteredData.length > 0 && (
        <main className="container mx-auto py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredData.map((donation) => (
            <DonationCard key={donation.id} donation={donation} />
          ))}
        </main>
      )}
      {filteredData.length === 0 && (
        <EmptyState title="No data found with this category" />
      )}
    </div>
  );
};

export default Home;
