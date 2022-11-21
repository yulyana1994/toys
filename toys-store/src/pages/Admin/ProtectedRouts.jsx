import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { roles } from "../../utils/constants";

const checkAvailable = (page, currentUser) => {
  const isAdminPage = page.includes("admin");

  if (!currentUser) {
    return false;
  }

  if (isAdminPage) {
    return currentUser.role === roles.admin;
  }

  return true;
};

const ProtectedRouts = ({ component: Component, children, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!checkAvailable(props.location.pathname, currentUser)) {
          return <Redirect to="/toys" />;
        }
        return Component ? <Component {...props} /> : children;
      }}
    />
  );
};

export default ProtectedRouts;
