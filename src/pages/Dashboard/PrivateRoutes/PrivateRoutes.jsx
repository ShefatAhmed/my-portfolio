import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div class="flex justify-center items-center h-screen">
        <div class="animate-spin rounded-full h-24 w-24 border-t-8 border-b-8 border-gray-200"></div>
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    Swal.fire({
      text: "You have to log in first to visit dashboard",
      icon: "warning",
      confirmButtonText: "Okay",
    });
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
