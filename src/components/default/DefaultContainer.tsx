const DefaultContainer = ({
  title,
  subtitle,
  imgPath,
  highlighted,
  side,
  description,
}: {
  title: string;
  subtitle: string;
  imgPath: string;
  highlighted: string;
  side: boolean;
  description: string;
}) => {
  return (
    <div
      className={`h-full text-white flex items-center justify-center px-4 mb-28 w-full`}
    >
      <div
        className={`flex-1 flex flex-col justify-center md:justify-around md:gap-10 ${
          side ? "md:flex-row" : "md:flex-row-reverse"
        } items-center w-full`}
      >
        <div
          className={`w-72 h-52 md:w-[40rem] md:h-96 rounded-3xl mb-12 md:mb-0 ${
            imgPath.length > 0 ? "block" : "hidden"
          }`}
        >
          <img src={imgPath} alt="" className="w-full h-full" />
        </div>
        <div
          className={`w-72 h-52 md:w-[40rem] md:h-96 rounded-3xl mb-12 md:mb-0 bg-[#3561FE] ${
            imgPath.length > 0 ? "hidden" : "block"
          }`}
        ></div>
        <div className="max-w-[460px]">
          <h1 className="text-3xl font-bold text-left w-full">{title}</h1>
          <p className="text-xl font-bold text-left w-full">
            {subtitle}
            <span className="text-[#3561FE]">&nbsp;{highlighted}</span>
          </p>
          <p className="text-[#93A7EA] text-lg mt-6">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DefaultContainer;
