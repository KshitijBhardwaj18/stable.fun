import { House } from "lucide-react";
import { UserRoundPen } from 'lucide-react';
import { BookCopy } from 'lucide-react';


export const SideNav = () => {
  return (
    <div className="fixed w-[20vw] h-screen  top-[5.2rem] left-0 p-1">
      <div className="flex flex-col gap-2 m-4 mt-3 mx-8 ">
        <button className="font-[500] text-[#7d847d] flex items-center justify-left gap-3  mx-auto hover:bg-stable-yellow hover:font-[400] hover:text-black w-full py-2 pl-2 rounded-xl">
          <House className=" text-sm " size={16} />
          <p className="text-sm">Home</p>
        </button>
        <button className="font-[500] text-[#7d847d] flex items-center justify-left gap-3  mx-auto hover:bg-stable-yellow hover:font-[400] hover:text-black w-full py-2 pl-2 rounded-xl">
          <UserRoundPen className=" text-sm " size={16} />
          <p className="text-sm">Account</p>
        </button>
        <button className="font-[500] text-[#7d847d] flex items-center justify-left gap-3  mx-auto hover:bg-stable-yellow hover:font-[400] hover:text-black w-full py-2 pl-2 rounded-xl">
          <BookCopy  className=" text-sm " size={16} />
          <p className="text-sm">Information</p>
        </button>
      </div>
    </div>
  );
};
