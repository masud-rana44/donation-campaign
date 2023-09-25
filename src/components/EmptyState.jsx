import PropTypes from "prop-types";

const EmptyState = ({ message, className }) => {
  return (
    <div
      className={`text-lg md:text-xl lg:text-2xl font-semibold text-gray-500 h-[40vh] flex items-center justify-center ${className}`}
    >
      {message}
    </div>
  );
};

EmptyState.propTypes = {
  message: PropTypes.string,
  className: PropTypes.string,
};

export default EmptyState;
