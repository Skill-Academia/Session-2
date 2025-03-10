import Notificationsbar from "@/_components/notifications-bar";
import Sidebar from "@/_components/side-bar";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

const PrivateLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-12 min-h-screen">
      <Sidebar />
      <div className="col-span-6 w-full border-x">{children}</div>
      <Notificationsbar />
    </div>
  );
};

export default PrivateLayout;
