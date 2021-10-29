import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const Login = () => {
  const {
    firebaseError,
    setFirebaseError,
    setIsLoading,
    signinGogle,
    user,
    setUser,
  } = UseAuth();
  const history = useHistory();
  const location = useLocation();
  const redirectUrl = location?.state?.from || "/home";
  const handleGogleSignIn = () => {
    signinGogle()
      .then((result) => {
        history.push(redirectUrl);
        setUser(result);
        setFirebaseError("");
        setIsLoading(false);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setIsLoading(false);
        setUser({});
        setFirebaseError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <section className="text-center py-5">
      <button className="btn btn-danger" onClick={handleGogleSignIn}>
        <span>
          <i className="fab fa-google mx-4"></i>
        </span>
        <span className="mx-4">Gogle Sign in</span>
      </button>
      <p className="mt-3 text-danger fw-bold">{firebaseError}</p>
    </section>
  );
};

export default Login;
