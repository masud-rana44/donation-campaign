import { Header } from "../components/Header";
import { DonationCard } from "../components/DonationCard";
import useData from "../hooks/useData.js";

const Home = () => {
  const donationsData = useData();

  return (
    <div>
      <Header />
      <main className="container mx-auto py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {donationsData.map((donation) => (
          <DonationCard key={donation.id} donation={donation} />
        ))}
      </main>
    </div>
  );
};

export default Home;
