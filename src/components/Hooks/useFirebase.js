import { useEffect, useState } from "react";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import initializeFirebase from "../Login/Firebase/Firebase.init";
import swal from "sweetalert";

initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);

  // SingIn with google
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // log in with google provider
  const signInWithGoogle = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, "put");
        setAuthError(" ");

        const destination = location?.state?.from || "/";
        navigate(destination);
        if (user?.email) {
          swal({
            title: "Good job!",
            text: "User Successfully Logged In",
            icon: "success",
            button: "Aww yiss!",
          });
        }
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const registerUser = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setAuthError("");

        const newUser = { email, displayName: name };
        setUser(newUser);
        // save user to the database

        saveUser(email, name, "post");
        // send name to firebase after creation

        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        navigate("/");

        if (user?.email) {
          swal({
            title: "Good job!",
            text: "User Successfully Created",
            icon: "success",
            button: "Aww yiss!",
          });
        }
      })
      .catch((error) => {
        setAuthError(error.message);
        swal({
          title: "Opps !!!",
          text: error.message,
          icon: "error",
          button: "Try Again",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        const adminDestination = location?.state?.from || "/";
        navigate(adminDestination);
        if (user?.email) {
          swal({
            title: "Good job!",
            text: "User Successfully Logged In",
            icon: "success",
            button: "Aww yiss!",
          });
        }
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
        swal({
          title: "Opps !!!",
          text: error.message,
          icon: "error",
          button: "Try Again",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  useEffect(() => {
    fetch(`https://protected-waters-51496.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user?.email]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://protected-waters-51496.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    setUser,
    isLoading,
    setIsLoading,
    authError,
    setAuthError,
    signInWithGoogle,
    registerUser,
    loginUser,
    admin,
    logOut,
  };
};
export default useFirebase;
