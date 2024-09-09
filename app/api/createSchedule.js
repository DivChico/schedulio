import { NextResponse } from "next/server";
import { supabase } from "../../lib/supabase"; // Ensure you have Supabase client initialized
import { withAuth, getAuth } from "@clerk/nextjs";

export default async function GET(req, res) {
  // Check if the method is POST
  console.log("chico server");

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  // Extract data from the request body
  const { scheduleName, startDate, endDate, tasks } = req.body;

  // Ensure required data is present
  if (
    !scheduleName ||
    !startDate ||
    !endDate ||
    !tasks ||
    !Array.isArray(tasks)
  ) {
    return res.status(400).json({ error: "Invalid input" });
  }

  // Get the authenticated user
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Step 1: Create the schedule
  const { data: schedule, error: scheduleError } = await supabase
    .from("schedules")
    .insert([
      {
        user_id: userId,
        schedule_type: scheduleName,
        start_date: startDate,
        end_date: endDate,
      },
    ])
    .single();

  if (scheduleError) {
    return res.status(500).json({ error: "Error creating schedule" });
  }

  // Step 2: Insert tasks and create Schedule_Tasks mappings
  const taskPromises = tasks.map(async (task, index) => {
    const { data: taskData, error: taskError } = await supabase
      .from("tasks")
      .insert([
        {
          schedule_id: schedule.id,
          title: task.title,
          start_time: task.startTime,
          end_time: task.endTime,
          description: task.description,
        },
      ])
      .single();

    if (taskError) {
      throw new Error("Error inserting task");
    }

    // Insert into Schedule_Tasks table
    const { error: mappingError } = await supabase
      .from("Schedule_Tasks")
      .insert([
        {
          schedule_id: schedule.id,
          task_id: taskData.id,
          position: index + 1,
        },
      ]);

    if (mappingError) {
      throw new Error("Error mapping task to schedule");
    }
  });

  try {
    await Promise.all(taskPromises);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({
    message: "Schedule and tasks created successfully",
    scheduleId: schedule.id,
  });
});
