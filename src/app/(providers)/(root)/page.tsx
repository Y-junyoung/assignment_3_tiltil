"use client";
import React, { useEffect, useState } from "react";
import { fetchTilData, TIL } from "@/app/(util)/fetchTilData";

function HomePage() {
  const [tilData, setTilData] = useState<TIL[] | null>(null);

  useEffect(() => {
    const getTil = async () => {
      const data = await fetchTilData();
      setTilData(data);
    };

    getTil();
  }, []);

  // 내가 쓴 글만 필터링
  const filteredTils = tilData?.filter((til) => til.author.name === "윤준영");

  return (
    <main className="h-full flex justify-center items-center bg-gradient-to-t from-blue-500 to-sky-100">
      <div className="max-w-3xl w-full mx-4">
        <h1 className="text-3xl font-bold mt-8 mb-8 text-center">MZ 포스팅</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredTils &&
            filteredTils.map((til) => (
              <li
                key={til.id}
                className="bg-white rounded-lg h-[500px] shadow-md border border-gray-200 p-4 flex flex-col gap-y-4"
              >
                <div>
                  <h2 className="text-xl font-bold mb-2">
                    Title : {til.title}
                    <hr />
                  </h2>
                  <p className="text-base mb-4 h-[300px] ">
                    Content : <hr /> {til.content}
                  </p>
                </div>
                <div className="flex flex-col justify-between">
                  <p className="text-gray-600">
                    ID: {til.id} <hr />
                  </p>
                  <p className="text-gray-600">Author: {til.author.name}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
}

export default HomePage;
