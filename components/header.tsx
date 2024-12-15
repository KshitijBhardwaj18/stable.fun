import Image from "next/image";

export const Header = () => {
  return (
    <div className="w-full flex bg-gradient-to-r from-[#444b1e] to-black fixed top-0 border-stable-yellow border-opacity-100 border-b-[1.5px]">
      <div className="h-20 w-full flex flex-row justify-between">
        <div className="h-14 object-cover mt-8">
          <Image src={"/logo.png"} width={200} height={56} className="object-cover" alt="stable.fun" />
        </div>
        <div>
        <button className="rounded-xl bg-stable-yellow m-4 px-4 my-5 py-1 mt-10 font-semibold  flex items-center justify-center text-[#0c0a0a] border-black border-2 shadow-md">Wallet</button>
        </div>
   
      </div>
    </div>
  );
};