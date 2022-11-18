import React from "react";
import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";

const Logout = () => {
  const { logout } = useAuth();
  useEffect(() => {
    logout();
  }, []);

  return <div>Loading</div>;
};

export default Logout;
