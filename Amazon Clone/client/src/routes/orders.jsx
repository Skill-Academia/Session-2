import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/orders")({
  component: Orders,
});

function Orders() {
  return "Hello /order!";
}
