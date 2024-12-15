import { CoinCard } from "./(components)/coincard";
import { Exchange } from "./(components)/exchange";


export default function Dashboard() {
  return (
    <div className=" bg-[#222222] w-full  rounded-xl p-4 ml-[18vw] mr-4 mt-[6rem]">
      <div className="flex justify-between m-1 header">
        <div>
          <p className="text-2xl text-white text-[500]">Explore Stable Coins</p>
          <p className="text-stable-yellow text-[0.8rem]">
            {" "}
            learn more about stable coins.
          </p>
        </div>
        <div className="text-right">
          <div>
            <p className="text-[0.7rem] text-white">
              Cummulative bonds purchased:{" "}
              <span className="text-stable-yellow text-[1rem]">
                $2,34,54,345
              </span>
            </p>
            <p className="text-[0.7rem] text-white">
              Current Holdings:{" "}
              <span className="text-stable-yellow text-[1rem]">
                $2,34,54,345
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-lg m-1 p-2 bg-[#1d1d1d] flex flex-row ">
        <div className="w-[70%] grid grid-cols-2 gap-10 ">
            <CoinCard />
            <CoinCard />
            <CoinCard />
            <CoinCard />
        </div>

        <div className=" m-2 ml-10 mr-0">
           <Exchange/>
        </div>

      </div>
    </div>
  );
}
