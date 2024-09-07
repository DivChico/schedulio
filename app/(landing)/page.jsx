import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>landing (unprotected)</p>
      <UserButton />
      <Link href={"/schedule"}>
        <button>schedule</button>
      </Link>
      <Link href={"/sign-in"}>
        <button>sign in</button>
      </Link>
      <Link href={"/sign-up"}>
        <button>sign up</button>
      </Link>
    </main>
  );
}
