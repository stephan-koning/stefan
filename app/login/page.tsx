import { Login } from "@/components/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup | Aceternity Template",
  description:
    "Startup landing is a simple one page landing page for startups and agencies. Built with Next.js, Tailwind CSS, TypeScript and framer motion.",
};

export default function LoginPage() {
  return (
    <main className="">
      <Login />
    </main>
  );
}
