const ItensDiscount = ({ text }: { text: string }) => {
  return (
    <div className="p-4 bg-opacity-50 flex bg-[#0B184382] rounded-xl gap-6 max-w-[29rem] justify-center items-center m-4 md:m-0 md:w-full md:h-[116px]">
      <div className="w-[40px] h-[40px]">
        <div className="w-[40px] h-[40px] bg-[#2C59F9] rounded-full"></div>
      </div>
      <p className="w-full">{text}</p>
    </div>
  );
};

export default ItensDiscount;
