import { NextResponse } from "next/server";
import { currentUser, auth } from "@clerk/nextjs/server";
// TODO : fix auth and user id
export async function GET(req, res) {
  let userId = "user_2ljcw265oRt7Gs6y1qBUgnY3wlb";
  console.log("userid", userId);
  let data = await fetch("https://api.vercel.app/blog");
  let posts = await data.json();

  

  return Response.json(data);
}
