import React from "react";
import TicketCard from "./(components)/TicketCard";

const page = () => {
  return (
    <div className="p-3 w-screen">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  );
};

export default page;
