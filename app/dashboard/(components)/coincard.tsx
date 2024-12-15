import Image from "next/image"

export const CoinCard = () => {
    return (
        <div className="w-[300px] p-2 bg-[rgb(20,20,20)] bg-opacity-100 rounded-lg hover:border-[#2e3119] hover:border-[1px]">
            <div className="flex justify-between">
                <div >
                    <p className="text-[1rem] text-white">Trump/USDC</p>
                    <p className="text-[0.7rem] text-white">5% APY</p>
                </div>

                <div className="">
                    <Image src="/trump.webp" width={40} height={50} alt="usdc" className="rounded-full" />
                </div>

            </div>
            <div className="p-3">
                
            <div className="flex justify-between p-1 py-0  text-[0.7rem]">
                    <p className="text-white">TVL</p>
                    <p className="text-stable-yellow">$2,22,00,23,000</p>
                </div>
                <div className="flex justify-between p-1 py-0  text-[0.7rem]">
                    <p className="text-white">Tokens Available</p>
                    <p className="text-stable-yellow">$2,22,00</p>
                </div>
                <div className="flex justify-between p-1 py-0  text-[0.7rem]">
                    <p className="text-white">Average Volume</p>
                    <p className="text-stable-yellow">$2,22,00</p>
                </div>
                <div className="flex justify-between p-1 py-0  text-[0.7rem]">
                    <p className="text-white">Start Date</p>
                    <p className="text-stable-yellow">12/6/2024, 12 AM</p>
                </div>
            </div>

            <div className="mx-5 flex justify-between">
                <button className="bg-black text-stable-yellow border-[#2e3119] border-[1px] min-w-20 text-[0.7rem] p-2 rounded-lg hover:bg-stable-yellow hover:text-black hover:border-stable-yellow  ">
                    Bond Details
                </button>

                <button className="bg-[#242517] text-stable-yellow border-[#2e3119] border-[1px] min-w-20 text-[0.7rem] p-2 rounded-lg hover:bg-stable-yellow hover:text-black hover:border-stable-yellow  ">
                    Select
                </button>
            </div>
        </div>
    )
}