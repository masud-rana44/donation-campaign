import toast from "react-hot-toast";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

import useLocalStorage from "../hooks/useLocalStorage";

export const DonationDetails = () => {
  const donationsData = useLoaderData();
  const params = useParams();
  const navigate = useNavigate();
  const [donatedIds, setDonatedIds] = useLocalStorage([], "donatedIds");

  if (!Array.isArray(donationsData)) {
    return navigate("/");
  }

  const donation = donationsData?.find((data) => data.id === params.id);

  if (!donation) {
    return navigate("/");
  }

  const handleClick = () => {
    const isExists = donatedIds.find((id) => id === donation.id);
    if (isExists) {
      return toast.error("You already have a donation");
    }

    setDonatedIds((ids) => [...ids, donation.id]);
    toast.success(`Successfully donated ${donation.price}$`);
  };

  return (
    <div className="container mx-auto w-full pt-[160px]">
      <div className="h-[700px] relative">
        <img className="w-full h-full" src={donation.imageUrl} />
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
        <h2 className="text-[40px] font-bold mb-6">{donation.title}</h2>
        <p className="text-[#0b0b0bb3] leading-[30px] pb-[120px]">
          {donation.description}
        </p>
      </div>
    </div>
  );
};

export async function loader() {
  const donations = await fetch("./data.json");
  return donations;
}
