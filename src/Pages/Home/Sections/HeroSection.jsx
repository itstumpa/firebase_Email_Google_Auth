import { useState } from "react";

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
githubProvider.addScope("user:email");

const HeroSection = () => {
  const [user, setUser] = useState(null);

  // Google Login
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //google Logout
  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // github login
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
        const loggedInUser = result.user;

        if (!loggedInUser.email) {
          if (loggedInUser.providerData) {
            const gitProvider = loggedInUser.providerData.find(
              (p) => p.providerId === "github.com"
            );
            if (gitProvider && gitProvider.email) {
              loggedInUser.email = gitProvider.email;
            }
          }
        }
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(user?.photoURL);
  return (
    <section className="py-20 text-center flex justify-center flex-col space-y-4 items-center">
      <h1 className="text-4xl font-bold">Please Login</h1>

      {/* ✅ Conditional Button Rendering */}
      {user ? (
        <button
          onClick={handleGoogleSignOut}
          className="hover:scale-105 hover:transition hover:ease-in-out mt-5 px-4 py-2 bg-purple-600 text-white rounded"
        >
          Sign Out
        </button>
      ) : (
        <>
          <button
            onClick={handleGoogleSignIn}
            className="hover:scale-105 hover:transition hover:ease-in-out mt-5 px-4 py-2 bg-purple-600 text-white rounded"
          >
            Sign In with Google
          </button>
          <button
            onClick={handleGithubSignIn}
            className="hover:scale-105 hover:transition hover:ease-in-out mt-5 px-4 py-2 bg-purple-600 text-white rounded"
          >
            Sign In with Github
          </button>
        </>
      )}

      {/* ✅ Show User Details Only If Logged In */}
      {user && (
        <div>
          <h3 className="font-bold text-xl">Name: {user.displayName}</h3>
          <h3 className="font-bold text-xl">Email: {user.email}</h3>
          <img
            src={user.photoURL}
            className="w-20 h-20 rounded-full border"
            alt="Profile"
          />
        </div>
      )}
    </section>
  );
};

export default HeroSection;
