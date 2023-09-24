import useLocalStorage from "../hooks/useLocalStorage";
import useData from "../hooks/useData";
import { DonatedCard } from "../components/DonatedCard";

const Donation = () => {
  const [donatedIds] = useLocalStorage([], "donatedIds");
  const allData = useData();

  const donatedData = allData.filter((data) => donatedIds.includes(data.id));

  return (
    <div className="container mx-auto pt-[160px] grid grid-cols-1 lg:grid-cols-2 gap-6 pb-32">
      {donatedData.map((data) => (
        <DonatedCard key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Donation;
