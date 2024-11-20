const DemoSection = () => {
    return (
      <div className="w-full h-auto bg-[#F5F7FA] flex flex-col items-center justify-center py-8 gap-8">
        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] font-semibold leading-[40px] sm:leading-[48px] md:leading-[56px] lg:leading-[76px] text-center text-[#263238] max-w-[95%] sm:max-w-[700px] lg:max-w-[887px]">
          Pellentesque suscipit fringilla libero eu.
        </h1>
        <button className="flex items-center justify-center gap-2 bg-[#4CAF4F] text-white text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-[24px] sm:leading-[26px] md:leading-[28px] px-6 sm:px-8 py-3 sm:py-4 rounded-md shadow-md hover:bg-[#43A045] transition duration-200">
          Get a demo
          <span className="text-white text-[16px] sm:text-[20px]">→</span>
        </button>
      </div>
    );
  };
  
  export default DemoSection;
  