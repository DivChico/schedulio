"use client";
import { UserButton } from "@clerk/nextjs";
import React from "react";
import { useAuth } from "@clerk/nextjs";

export default function SchedulePage() {
  const { isLoaded, userId, sessionId, getToken, firstName } = useAuth();
  const apiResponse = `
  7:00 AM - 7:30 AM: Morning routine (wake up, breakfast)
  7:30 AM - 8:30 AM: Exercise
  8:30 AM - 9:00 AM: Get ready for work
  9:00 AM - 12:00 PM: Work
  12:00 PM - 1:00 PM: Lunch break
  1:00 PM - 5:00 PM: Work
  5:00 PM - 5:30 PM: Wind down from work
  5:30 PM - 7:30 PM: Study session
  7:30 PM - 8:00 PM: Dinner
  8:00 PM - 10:00 PM: Relaxation (reading, hobbies, etc.)
  10:00 PM - 11:00 PM: Prepare for bed and unwind
`;
const handleGenrateClick =()=>{}
  return (
    <div>
      <div className=" flex items-center justify-between">
        <p>schedule (protected)</p>
        <p>{userId}</p>
        <UserButton />
        <button onClick={}>generate scedule</button>
      </div>
    </div>
  );
}
