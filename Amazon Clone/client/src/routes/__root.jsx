import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { Toaster } from "sonner";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <>
      <Header />
      <div className="bg-[#E3E6E6]">
        <Outlet />
      </div>
      <Toaster position="top-center" richColors />
      <Footer />
    </>
  );
}
