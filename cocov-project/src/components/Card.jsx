
const Card = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex  flex-col items-center">
      <div className="text-5xl text-[#F7CE68]">{icon}</div>
      <h3 className="text-base text-center text-[#B5651D] font-semibold mb-2">{title}</h3>
      <p className="text-[#3E3E3E] text-sm text-center">{description}</p>
    </div>
  );
};

export default Card;
