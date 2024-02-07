"use client";
import { TIL, fetchTilData } from "@/app/(util)/fetchTilData";
import React, { useEffect, useState } from "react";

function TotalPage() {
  const [tilData, setTilData] = useState<TIL[] | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 20;

  useEffect(() => {
    const getTil = async () => {
      const data = await fetchTilData();
      setTilData(data);
    };

    getTil();
  }, []);

  // 페이지네이션 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tilData?.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <main className="h-full flex justify-center items-center bg-gradient-to-t from-blue-500 to-sky-100">
      <div className="max-w-3xl w-full mx-4">
        <h1 className="text-3xl font-bold mt-8 mb-8">전체 글 목록</h1>
        <ul className="space-y-8">
          {currentItems &&
            currentItems.map((til) => (
              <li
                key={til.id}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              >
                <h2 className="text-2xl font-bold mb-4">Title : {til.title}</h2>
                <p className="text-lg mb-2">Content : {til.content}</p>
                <div className="flex items-center">
                  <p className="text-gray-600">ID: {til.id}</p>
                  <span className="mx-2">|</span>
                  <p className="text-gray-600">Author: {til.author.name}</p>
                </div>
              </li>
            ))}
        </ul>
        {/* 페이지네이션 버튼 */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2 hover:bg-white hover:text-black"
          >
            이전
          </button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentItems?.length !== itemsPerPage}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-white hover:text-black"
          >
            다음
          </button>
        </div>
      </div>
    </main>
  );
}

export default TotalPage;
