import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const Login = () => {
  const { setUser, setError, setIsLoading, error, signinGogle } = UseAuth();
  let history = useHistory();
  let location = useLocation();
  const redirectUrl = location.state?.from || "/home";

  // handle google sign in
  const handleGogleSignin = () => {
    signinGogle()
      .then((result) => {
        history.push(redirectUrl);
        setError("");
        setIsLoading(false);
        setUser(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(error.message);
        setUser({});
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <section className="text-center py-5">
      <button className="btn btn-danger" onClick={handleGogleSignin}>
        <span>
          <i className="fab fa-google mx-4"></i>
        </span>
        <span className="mx-4">Gogle Sign in</span>
      </button>
      <p className="mt-3 text-danger fw-bold">{error}</p>
    </section>
  );
};

export default Login;
