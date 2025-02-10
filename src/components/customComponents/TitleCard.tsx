const TitleCard = ({ title }: { title: string }) => {
  return (
    <div className="relative flex items-center justify-center w-full mt-12 px-4">
      <div className="absolute w-full border-t border-gray-300"></div>
      <div className="relative bg-white flex flex-col items-center">

        <h2 className="text-2xl sm:text-3xl md:text-4xl leading-none text-center">{title}</h2>

      </div>
    </div>
  );
};

export default TitleCard;
