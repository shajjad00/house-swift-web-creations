import img from "../../../assets/images/slide2.jpg";

export default function SecondSlide() {
  return (
    <div>
      <div
          id="slide3"
          className="carousel-item relative w-full max-h-[540px]"
        >
          <img
            src={img}
            className="w-full"
          />
          <div className="absolute flex items-center h-full gap-6 left-0 right-0 bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="max-w-7xl mx-auto px-4 md:px-20 flex justify-start w-full">
              <div className="text-white space-y-5 w-full">
                <h2 className="text-3xl md:text-5xl  font-bold">
                  <span className="text-[#fca129]"> Good </span>Service is{" "}
                  <br /> our passion
                </h2>
                <p>
                  Within an ancient tome, cryptic symbols weave tales of
                  enigmatic realms. Readers brave <br /> its pages, unlocking
                  mysteries that blur the line between reality and imagination,
                  leaving them spellbound
                </p>
                <div className="flex items-center">
                  <button className="uppercase border border-[#09BE51] bg-[#09BE51] hover:bg-transparent text-white py-2 text-lg px-6 hover:border hover:border-[#09BE51] hover:text-[#09BE51] duration-300 cursor-pointer">
                    Special Offer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
