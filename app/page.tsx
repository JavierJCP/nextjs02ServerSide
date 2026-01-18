import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Main page",
  description: "Main page",
};

export default function Home() {
  redirect("/dashboard/main");
}
