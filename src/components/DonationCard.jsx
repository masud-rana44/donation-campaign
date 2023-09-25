import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const DonationCard = ({ donation }) => {
  const { id, title, category, imageUrl, categoryBg, cardBg, primaryColor } =
    donation;

  return (
    <Link
      to={`/donations/${id}`}
      style={{ backgroundColor: cardBg }}
      className="rounded-lg overflow-hidden w-full"
    >
      <figure>
        <img
          src={imageUrl}
          alt="Image of donation"
          className="w-full h-[194px] object-cover"
        />
      </figure>
      <div style={{ color: primaryColor }} className="p-4 space-y-2">
        <div
          style={{ backgroundColor: categoryBg }}
          className="inline-block text-sm font-medium py-1 px-[10px] rounded"
        >
          {category}
        </div>
        <div className="text-xl font-semibold ">{title}</div>
      </div>
    </Link>
  );
};

DonationCard.propTypes = {
  donation: PropTypes.object,
};
