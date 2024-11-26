import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  useEffect(() => {
    // Fetch some posts
  }, []);

  return (
    <div className="p-2">
      <h3>Welcome About!</h3>
    </div>
  );
}
