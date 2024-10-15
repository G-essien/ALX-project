

// Card component to display an icon, title, and description in a styled container
const Card = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
      {/* Icon displayed with a large size and custom color */}
      <div className="text-5xl text-[#F7CE68]">{icon}</div>
      
      {/* Title of the card, styled with custom color and font properties */}
      <h3 className="text-base text-center text-[#B5651D] font-semibold mb-2">{title}</h3>
      
      {/* Description text styled with a muted color and center alignment */}
      <p className="text-[#3E3E3E] text-sm text-center">{description}</p>
    </div>
  );
};

export default Card;
