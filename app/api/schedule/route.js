import { NextResponse } from "next/server";
// TODO : fix auth and user id
export async function POST(req, res) {
  let userId = "user_2ljcw265oRt7Gs6y1qBUgnY3wlb";
  console.log("userid", userId);
  try {
    // create a schedule
    const { data: schedule, error: scheduleError } = await supabase
      .from("schedules")
      .insert([
        {
          user_id: userId,
          schedule_type: "daily",
          start_date: null,
          end_date: null,
        },
      ])
      .single();
    if (scheduleError) {
      return res.status(500).json({ error: "Error creating schedule" });
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json(
      { error: "Internal Server Error 2 22 2 2 " },
      { status: 500 }
    );
  }
}

// export async function GET(req, res) {
//   // TODO: Replace this with actual user authentication logic
//   let userId = "user_2ljcw265oRt7Gs6y1qBUgnY3wlb";
//   console.log("userid", userId);

//   try {
//     // Fetch data from external API
//     let response = await fetch("https://api.vercel.app/blog");

//     // Check if the fetch was successful
//     if (!response.ok) {
//       return NextResponse.json({ error: "Failed to fetch data" }, { status: response.status });
//     }

//     // Convert the response to JSON
//     let data = await response.json();

//     // Return the fetched data
//     return NextResponse.json({ data });
//   } catch (error) {
//     console.error("Fetch error:", error);
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }
