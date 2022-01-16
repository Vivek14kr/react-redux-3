import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { token } = useSelector((state) => state.AuthState);
  console.log(token);

  if (token.length === 0 || !token) {
    return <Navigate to={"/login"} />;
  }

  return children;
};
