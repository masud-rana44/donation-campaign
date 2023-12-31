import { Header } from "../components/Header";
import { DonationCard } from "../components/DonationCard";
import { useEffect, useState } from "react";
import EmptyState from "../components/EmptyState";
import { useData } from "../contexts/DataContext";

const Home = () => {
  const donationsData = useData();
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(donationsData);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchText) {
      return setFilteredData(donationsData);
    }

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
        <main className="container  px-4 lg:px-0 mx-auto py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6">
          {filteredData.map((donation) => (
            <DonationCard key={donation.id} donation={donation} />
          ))}
        </main>
      )}
      {filteredData.length === 0 && (
        <EmptyState
          message="There are no donations matching this category."
          className="px-6 text-center"
        />
      )}
    </div>
  );
};

export default Home;
