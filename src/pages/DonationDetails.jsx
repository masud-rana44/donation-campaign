import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

import useLocalStorage from "../hooks/useLocalStorage";
import { useData } from "../contexts/DataContext";

export const DonationDetails = () => {
  const donationsData = useData();
  const params = useParams();
  const navigate = useNavigate();
  const [donatedIds, setDonatedIds] = useLocalStorage([], "donatedIds");

  const donation = donationsData.find((data) => data.id === params.id);

  if (!donation) {
    return navigate("/");
  }

  const handleClick = () => {
    const isExists = donatedIds.find((id) => id === donation.id);
    if (isExists) {
      return toast.error("You've already made a donation with this ID");
    }

    setDonatedIds((ids) => [...ids, donation.id]);
    toast.success(`Successfully donated ${donation.price}$`);
  };

  return (
    <div className="container px-4 lg:px-0 mx-auto w-full pt-48 sm:pt-[160px]">
      <div className="h-[400px] lg:h-[700px] relative rounded-lg overflow-hidden">
        <img className="w-full h-full object-cover" src={donation.imageUrl} />
        <div className="absolute left-0 bottom-0 h-32 w-full bg-[#0b0b0b80] flex items-center">
          <button
            onClick={handleClick}
            style={{ backgroundColor: donation.primaryColor }}
            className="text-white text-xl font-semibold rounded-lg px-[26px] py-4 ml-3 lg:ml-9"
          >
            Donate ${donation.price}
          </button>
        </div>
      </div>
      <div className="mt-14 ">
        <h2 className="text-3xl md:text-[40px]  font-bold mb-6">
          {donation.title}
        </h2>
        <p className="text-[#0b0b0bb3] leading-[30px] pb-[120px]">
          {donation.description}
        </p>
      </div>
    </div>
  );
};
