import useLocalStorage from "../hooks/useLocalStorage";
import useData from "../hooks/useData";
import { DonatedCard } from "../components/DonatedCard";
import { useState } from "react";

const Donation = () => {
  const allData = useData();
  const [donatedIds] = useLocalStorage([], "donatedIds");
  const [isShowAll, setIsShowALl] = useState(false);

  const donatedData = allData.filter((data) => donatedIds.includes(data.id));
  const shownData = isShowAll ? donatedData : donatedData.slice(0, 4);

  return (
    <div className="container mx-auto pt-[160px] grid grid-cols-1 lg:grid-cols-2 gap-6 pb-32">
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
