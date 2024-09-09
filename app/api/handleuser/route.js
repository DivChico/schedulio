import { NextResponse } from "next/server";
import supabase from "../../../lib/supabase";
import { getAuth } from "@clerk/nextjs/server";

export default async function handler(req, res) {
  try {
    // Get Clerk user ID from the request
    const { userId: clerkId } = getAuth(req);

    // Check if Clerk ID is provided
    if (!clerkId) {
      return NextResponse("Unauthorized", { status: 401 });
    } else {
      return NextResponse("Authorized", { status: 200 });
    }
    // Step 1: Check if the user already exists in the database
    // const { data: existingUser, error: checkError } = await supabase
    //   .from("users")
    //   .select("id")
    //   .eq("clerk_id", clerkId)
    //   .single();

    // if (checkError && checkError.code !== "PGRST116") {
    //   // Handle error if not 'No rows found'
    //   return res.status(500).json({ error: "Error checking user existence" });
    // }

    // if (existingUser) {
    //   // User exists, return the user ID
    //   return res.status(200).json({ userId: existingUser.id });
    // } else {
    //   // Step 2: Create a new user record
    //   const { data: newUser, error: createError } = await supabase
    //     .from("users")
    //     .insert([
    //       {
    //         clerk_id: clerkId,
    //         full_name: "Default Name", // You may want to adjust or pass this information
    //       },
    //     ])
    //     .single();

    //   if (createError) {
    //     // Handle creation error
    //     return res.status(500).json({ error: "Error creating user" });
    //   }

    //   // Return the newly created user ID
    //   return res.status(200).json({ userId: newUser.id });
    // }
  } catch (error) {
    // Handle unexpected errors
    return NextResponse("Internal Server Error", { status: 500 });
  }
}
