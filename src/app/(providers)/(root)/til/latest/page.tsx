"use client";
import { TIL, fetchTilData } from "@/app/(util)/fetchTilData";
import React, { useEffect, useState } from "react";

function LatestPage() {
  const [tilData, setTilData] = useState<TIL[] | null>(null);

  useEffect(() => {
    const getTil = async () => {
      const data = await fetchTilData();
      setTilData(data);
    };

    getTil();
  }, []);

  // 최신 글이 먼저 표시되도록

  return (
    <main className="h-full flex justify-center items-center bg-gradient-to-b from-blue-800 to-blue-500">
      <div className="max-w-screen-xl w-full mx-4">
        <h1 className="text-3xl font-bold mt-8 mb-8 text-white text-center">
          최신 글 목록
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tilData &&
            tilData
              .map((til) => (
                <li
                  key={til.id}
                  className="bg-white rounded-lg shadow-md border border-gray-200 p-6"
                >
                  <h2 className="text-xl font-bold mb-2 text-gray-800">
                    {til.title}
                  </h2>
                  <p className="text-base mb-4 text-gray-600">{til.content}</p>
                  <div className="flex justify-between items-center text-gray-600">
                    <p>ID: {til.id}</p>
                    <p>Author: {til.author.name}</p>
                  </div>
                </li>
              ))
              .reverse()}
        </ul>
      </div>
    </main>
  );
}

export default LatestPage;
