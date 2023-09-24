import PropTypes from "prop-types";

export const DonationCard = ({ donation }) => {
  const { title, category, imageUrl, categoryBg, cardBg, primaryColor } =
    donation;

  return (
    <div
      style={{ backgroundColor: cardBg }}
      className={`bg-[${cardBg}] rounded-lg overflow-hidden`}
    >
      <figure>
        <img src={imageUrl} alt="" />
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
    </div>
  );
};

DonationCard.propTypes = {
  donation: PropTypes.object,
};
