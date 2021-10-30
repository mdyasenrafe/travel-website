import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import intilializeAuthFirebase from "../Firebase/Firebase.init";
import swal from "sweetalert";

intilializeAuthFirebase();

const UseFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signinGogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    swal({
      title: "Are you sure want to Logout",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const auth = getAuth();
        signOut(auth)
          .then(() => {
            setUser({});
            setIsLoading(false);
          })
          .catch((error) => {
            setError(error.message);
          })
          .finally(() => setIsLoading(false));
        swal("Your Aceount Log Out!!", {
          icon: "success",
        });
      }
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setIsLoading(false);
    });
  }, [user]);

  return {
    user,
    setUser,
    error,
    setError,
    isLoading,
    setIsLoading,
    signinGogle,
    logOut,
  };
};

export default UseFirebase;
