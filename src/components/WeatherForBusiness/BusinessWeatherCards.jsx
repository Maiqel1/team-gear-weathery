import cardImg1 from '../../assets/weatherBusinessImgs/cardimg1.png';
import cardImg2 from '../../assets/weatherBusinessImgs/cardimg2.png';
import cardImg3 from '../../assets/weatherBusinessImgs/cardimg3.png';

export default function BusinessWeatherCards() {
  return (
    <center className="">
      <div className=" mb-24 px-8">
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-6  ">
          <div className="customCard flex flex-col justify-center align-center items-center w-full h-full space-y-8 pt-10 pb-10 md:pb-16 lg:pb-16 xl:pb-24">
            <img src={cardImg1} alt="" className="pt-8" />
            <p className="font-bold text-2xl md:text-3xl text-center px-4">
              Accurate forecasts assist your planning
            </p>
            <p className="text-center text-lg px-4">
              One of our primary goals at weathery for your farm business is to
              provide you with accurate long-term forecasts allow financial
              planning around broad- scale weather risks andcrop plantation.
            </p>
          </div>
          <div className="customCard flex flex-col justify-center align-center items-center  w-full  space-y-8 pt-8 pb-12 md:pb-32 lg:pb-32  mt-4 md:mt-0 mb-4 md:mb-0">
            <img src={cardImg2} alt="" className="pt-8 mt-1" />
            <p className="font-bold text-2xl md:text-3xl text-center px-4">
              Critical decisions can be planned precisely
            </p>
            <p className="text-center text-lg px-4">
              Short term forecasts focusing on major weather events can allow a
              farmer to more precisely plan critical decisions
            </p>
          </div>
          <div className="customCard flex flex-col justify-center align-center items-center w-full space-y-8 pt-8 pb-12 md:pb-8 lg:pb-16">
            <img src={cardImg3} alt="" />
            <p className="font-bold text-2xl md:text-3xl text-center px-3">
              Better crop or herd management
            </p>
            <p className="text-center text-lg">
              At Weathery, we provide dedicated tools and diagnostics which can
              assist the farmer in better crop or herd management.We are
              committed to giving you the best for your agribusiness.
            </p>
          </div>
        </div>
      </div>
    </center>
  );
}
