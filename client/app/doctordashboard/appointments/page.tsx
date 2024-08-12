"use client";

import React, { useState } from "react";
import DashboardLayout from "../DashboardLayout";
import { AppointmentCard } from "@/components/dashboard/AppointmentCard";

const data = [
  {
    id: 1,
    name: "Ali Akbar",
    disc: "BSC ,de",
    image: "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2000,
    status: "Join",
    time: "4:40 pm",
    date: "2/5/2024"
},
  {
    id: 2,
    name: "Ali Akbar",
    disc: "BSC ,de",
    image: "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 6000,
    status: "upcomming",
    time: "4:40 pm",
    date: "2/5/2024"
  },
  {
    id: 3,
    name: "Ali Akbar",
    disc: "BSC ,de",
    image: "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 6000,
    status: "upcomming",
    time: "4:40 pm",
    date: "2/5/2024"
  },
  {
    id: 4,
    name: "Ali Akbar",
    disc: "BSC ,de",
    image: "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 6000,
    status: "upcomming",
    time: "4:40 pm",
    date: "2/5/2024"
  },
  {
    id: 5,
    name: "Ali Akbar",
    disc: "BSC ,de",
    image: "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 6000,
    status: "upcomming",
    time: "4:40 pm",
    date: "2/5/2024"
  },
  {
    id: 6,
    name: "Ali Akbar",
    disc: "BSC ,de",
    image: "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 6000,
    status: "completed",
    time: "4:40 pm",
    date: "2/5/2024"
  },
  // Add other doctors here
];

const ITEMS_PER_PAGE = 2;

function Assignments() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentDoctors = data.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-4 w-full">
        {currentDoctors.map((card) => <AppointmentCard key={card.id} cardData={card} />)}
      </div>
      <div className="flex items-center justify-center gap-4 mt-10">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-100 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
            aria-hidden="true" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
          </svg>
          Previous
        </button>
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase transition-all ${currentPage === index + 1 ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-900/10 active:bg-gray-900/20'}`}
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                {index + 1}
              </span>
            </button>
          ))}
        </div>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-100 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Next
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
            aria-hidden="true" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
          </svg>
        </button>
      </div>
    </DashboardLayout>
  );
}

export default Assignments;
