import useLocalStorage from "../hooks/useLocalStorage";
import { DonatedCard } from "../components/DonatedCard";
import { useState } from "react";
import EmptyState from "../components/EmptyState";
import { useData } from "../contexts/DataContext";

const Donation = () => {
  const allData = useData();
  const [donatedIds] = useLocalStorage([], "donatedIds");
  const [isShowAll, setIsShowALl] = useState(false);

  const donatedData = allData.filter((data) => donatedIds.includes(data.id));
  const shownData = isShowAll ? donatedData : donatedData.slice(0, 4);

  if (shownData.length === 0) {
    return (
      <EmptyState
        message="No donations have been made yet."
        className="h-[80vh]"
      />
    );
  }

  return (
    <div className="container px-4 lg:px-0 mx-auto pt-[200px] sm:pt-[160px] grid grid-cols-1 lg:grid-cols-2 gap-6 pb-20 lg:pb-32 ">
      {shownData.map((data) => (
        <DonatedCard key={data.id} data={data} />
      ))}
      {donatedData.length > 4 && !isShowAll && (
        <div className="lg:col-span-2 flex justify-center mt-10">
          <button
            onClick={() => setIsShowALl((show) => !show)}
            className="font-semibold text-white rounded-lg px-7 py-[14px] bg-[#009444] hover:opacity-90 transition"
          >
            See All
          </button>
        </div>
      )}
    </div>
  );
};

export default Donation;
