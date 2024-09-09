"use client";
import { UserButton } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import React from "react";
import { useAuth, useUser } from "@clerk/nextjs";
import axios from "axios";

export default function SchedulePage() {
  const { isLoaded, userId: clerkId } = useAuth();
  // const { isSignedIn, user } = useUser();

  const handleCreateSchedule = async () => {
    try {
      const response = await axios.get("/api/schedule");
      console.log(response);
    } catch (error) {
      console.log("chico");
    }
  };
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
  // const tasks = parseSchedule(apiResponse);
  // console.log(tasks);

  // useEffect(() => {
  //   if (isLoaded && clerkId) {
  //     const checkOrCreateUser = async () => {
  //       try {
  //         const response = await fetch("/api/handleUser");
  //         const data = await response.json();

  //         if (response.ok) {
  //           console.log(data);

  //           setUserId(data.userId);
  //         } else {
  //           setError(data.error);
  //         }
  //       } catch (err) {
  //         setError("Failed to fetch");
  //       }
  //     };

  //     checkOrCreateUser();
  //   }
  // }, [isLoaded, clerkId]);
  return (
    <div>
      <div className=" flex items-center justify-between">
        <p>schedule (protected)</p>
        {/* <p>{clerkId}</p> */}
        {/* <p>{user.firstName}</p> */}
        {/* <p>{data.id}</p> */}

        <button onClick={handleCreateSchedule}>generate scedule</button>
      </div>
    </div>
  );
}
