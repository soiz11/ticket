import React from "react";

const TicketCard = () => {
  return (
    <div className=" p-3 rounded bg-black flex flex-col m-3">
      <div className="flex">name</div>
      <div className="flex">Category</div>
      <div className="flex">description</div>
      <div className="flex flex-row justify-between">
        <div className="flex">time</div>
        <div className="flex rounded bg-blue-300 px-3">priority</div>
      </div>
    </div>
  );
};

export default TicketCard;
