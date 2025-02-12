"use client"
import Image from "next/image";
import TitleCard from "./TitleCard";
import { Hourglass } from "lucide-react";

const RankCard = () => {
  
  const players = [
    {
      rank: "#1",
      region: "Asia",
      name: "Saymi",
      rp: "2131 RP",
      rankName: "Platinum",
      image: "/profile1.png",
      bg: "bg-gradient-to-b from-gray-100 to-blue-900",
    },
    {
      rank: "#2",
      region: "Europe",
      name: "Nodror",
      rp: "2331 RP",
      rankName: "Gold",
      image: "/profile2.png",
      bg: "bg-gray-900",
    },
    {
      rank: "#3",
      region: "America",
      name: "Smiley",
      rp: "1131 RP",
      rankName: "Silver",
      image: "/profile3.png",
      bg: "bg-gray-900",
    },
  ];

  return (
    <div className="flex flex-col items-center space-y-10">
     <TitleCard title="Countdown Timers for Ongoing Raffles and Games" IconComponent={Hourglass} />
      <p className="text-2xl font-semibold">
        League will end in <span className="text-yellow-500 font-extrabold">03:12:59</span>
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-10">
        {players.map((player, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center w-60 rounded-2xl shadow-xl p-6 ${player.bg}`}
          >
          
            <div className="absolute -top-4 bg-gray-800 text-white text-lg px-4 py-2 rounded-full font-bold">
              {player.rank}
            </div>

           
            <Image
              src={player.image}
              alt={player.name}
              width={100}
              height={100}
              className="rounded-full mt-6"
            />

         
            <h3 className="mt-4 text-2xl font-bold">{player.region}</h3>
            <p className="mt-4 text-sm sm:text-base md:text-lg">{player.name}</p>
              <p className="mt-4 text-sm sm:text-base md:text-lg">{player.rp}</p>

            <div className="mt-6 py-2 w-full text-center text-white text-xl font-bold bg-gray-700 rounded-xl">
              {player.rankName}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RankCard;
