import Image from "next/image";
import { CircleArrowDown } from 'lucide-react';
export const Exchange = () => {
  return (
    <div className="w-[300px]   rounded-lg border-stable-yellow border-[1px] p-3 px-5">
      <div className="text-[1rem] text-white">Buy Trump coin</div>

      <div className="mt-1">
        <p className="font-bold text-[0.57rem] text-white pl-2">BUY</p>
        <div className="flex flex-row ">
          <div className="p-3 bg-black rounded-l-xl text-white font-bold text-[0.7rem] flex justify-center items-center gap-2 border-white border-[1px] ">
            <Image
              src="/trump.webp"
              width={20}
              height={50}
              alt="usdc"
              className="rounded-full ml-1"
            />
            Trump
          </div>
          <input
            className="bg-black rounded-r-xl p-2 text-white text-right text-lg w-[180px] border-white border-[1px]"
            type="number"
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-2">
      <CircleArrowDown className="text-stable-yellow"/>
      </div>
            
      <div className="mt-1">
        <p className="font-bold text-[0.57rem] text-white pl-2">COST</p>
        <div className="flex flex-row ">
          <div className="p-3 bg-black rounded-l-xl text-white font-bold text-[0.7rem] flex justify-center items-center gap-2 border-white border-[1px] w-[160px]">
           $
            USD
          </div>
          <input
            className="bg-black rounded-r-xl p-2 text-white text-right text-lg w-[180px] border-white border-[1px]"
            type="number"
          />
        </div>
      </div>
    </div>
  );
};
