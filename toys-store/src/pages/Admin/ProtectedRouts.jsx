import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const ProtectedRouts = ({ component: Component, children, ...rest }) => {
  const { currentUser } = useAuth();

  console.log(currentUser);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!currentUser) {
          return <Redirect to="/login" />;
        }
        return Component ? <Component {...props} /> : children;
      }}
    />
  );
};

export default ProtectedRouts;
