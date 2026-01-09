import StatsCard from "../Components/StatsCard";

function Statistics({ links, handleCopy }) {
  return (
    <section className="bg-[#ebe8fb] pt-32 pb-32">
      {/* Generated Links */}
      <div className=" space-y-4 max-w-5xl mx-auto px-6">
        {links.map((link, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg flex flex-col md:flex-row md:justify-between md:items-center gap-2"
          >
            <p className="text-gray-700 break-all">{link.original}</p>

            <div className="flex gap-4 items-center">
              <a
                href={link.short}
                target="_blank"
                rel="noreferrer"
                className="text-[#2BCFCF]"
              >
                {link.short}
              </a>

              <button
                onClick={() => handleCopy(link.short, index)}
                className={`px-4 py-2 rounded-lg text-white font-semibold transition ${
                  link.copied
                    ? "bg-[#3B3054]"
                    : "bg-[#2BCFCF] hover:bg-[#6FE1E1]"
                }`}
              >
                {link.copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className=" mx-auto px-6 sm:px-10 pt-24 py-32">
        <h1 className="font-bold text-5xl pt-20">Advanced Statistics</h1>
        <p className="mt-7 text-lg sm:text-2xl lg:text-xl text-gray-500 leading-relaxed">
          Track how your links are performing across the web with <br />
          our advanced statistics dashboard.
        </p>
        {/*wrapper*/}
        <div className="relative">
          {/*Line*/}
          <div
            className="
         absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-full
        max-w-7xl
        h-3
       bg-[#2BCFCF]
        hidden lg:block
        "
          />

          <div
            className=" mx-auto
          w-full
          max-w-7xl
          px-6 sm:px-10 lg:px-0
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          gap-10
          pt-20 pb-20 relative z-10
          
          "
          >
            <StatsCard
              className="lg:translate-y-0"
              iconSrc={"./images/icon-brand-recognition.svg"}
              title="Brand Recognition"
              description="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
            />
            <StatsCard
              className="lg:translate-y-14"
              iconSrc={"./images/icon-detailed-records.svg"}
              title="Detailed Records"
              description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            />
            <StatsCard
              className="lg:translate-y-24"
              iconSrc={"./images/icon-fully-customizable.svg"}
              title="Fully Customizable"
              description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagemnet."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
