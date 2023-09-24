import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const DonatedCard = ({ data }) => {
  const navigate = useNavigate();
  const {
    id,
    title,
    category,
    imageUrl,
    categoryBg,
    cardBg,
    primaryColor,
    price,
  } = data;

  return (
    <div
      style={{ backgroundColor: cardBg }}
      className="rounded-lg overflow-hidden flex items-center"
    >
      <figure>
        <img
          src={imageUrl}
          alt={`Image of ${title}`}
          className="h-[200px] w-[220px] object-cover"
        />
      </figure>
      <div style={{ color: primaryColor }} className="p-4 space-y-2">
        <div
          style={{ backgroundColor: categoryBg }}
          className="inline-block text-sm font-medium py-1 px-[10px] rounded"
        >
          {category}
        </div>
        <div className="text-2xl font-semibold text-[#0B0B0B]">{title}</div>
        <div className="font-semibold mb-3">${price.toFixed(2)}</div>
        <button
          onClick={() => navigate(`/donation/${id}`)}
          style={{ backgroundColor: primaryColor }}
          className="px-4 py-2 text-lg font-semibold text-white rounded-lg"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

DonatedCard.propTypes = {
  data: PropTypes.object,
};
