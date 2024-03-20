import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { Children } from "react";

const ProtectedRoute = ({ Children }) => {
  const { user } = UserAuth();

  if (!user) return <Navigate to="/" />;
  else return { Children };
};

export default ProtectedRoute;
