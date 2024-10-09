import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/meal" />,
  },
  {
    path: "meal",
    element: <div>Meal</div>,
  },
]);

export default router;
