import { useEffect, useState } from "react";
import { hackathons } from "../../../data/hackathons";

export default function Select({ handleHackathon }: any) {
  const [mem, setMem] = useState(0);

  useEffect(() => {
    handleHackathon(mem);
  }, [mem]);

  return (
    <div className="select-hackathon">
      <select
        id="hackathon"
        name="hackathon"
        className="mt-1 block w-full rounded-md border-gray-300 py-4 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        defaultValue="ETH Porto Hackathon 2023"
        onChange={(e) => {
          setMem(Number(e.target.value));
        }}
      >
        {hackathons.map((hackathon, index) => (
          <option key={index} value={index}>
            {hackathon.name}
          </option>
        ))}
        <option value={hackathons.length}>Custom</option>
      </select>
    </div>
  );
}
