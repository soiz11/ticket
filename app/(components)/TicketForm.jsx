"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { POST } from "../api/Tickets/route";

const TicketForm = () => {
  const router = useRouter();
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/Tickets", {
      method: "POST",
      body: JSON.stringify({ formData }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("failed to create ticket");
    }

    router.refresh();
    router.push("/");
  };

  const startingTicketData = {
    title: "",
    category: "hardware",
    description: "",
    date: "",
    priority: 1,
  };

  const [formData, setFormData] = useState(startingTicketData);

  return (
    <div>
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <div>create your ticket</div>
        <label>title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
          className="bg-red-300 outline-none"
        />

        <label>description</label>
        <textarea
          id="descrtiption"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="5"
          className="bg-red-300 outline-none"
        />

        <label>category</label>
        <select
          id="category"
          name="category"
          onChange={handleChange}
          value={formData.category}
          className="bg-red-300 outline-none"
        >
          <option value="hardware">hardware</option>
          <option value="software">software</option>
          <option value="project">project</option>
          <option value="other">other</option>
        </select>

        <label>Priority</label>
        <div>
          <input
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={1}
            className="bg-red-300 outline-none"
            checked={formData.priority == 1}
          />
          <label>Low</label>

          <input
            id="priority-2"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={2}
            className="bg-red-300 outline-none"
            checked={formData.priority == 2}
          />
          <label>Medium</label>

          <input
            id="priority-3"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={3}
            className="bg-red-300 outline-none"
            checked={formData.priority == 3}
          />
          <label>High</label>
        </div>

        <input type="submit" className="btn" value="Create Ticket" />
      </form>
    </div>
  );
};

export default TicketForm;
