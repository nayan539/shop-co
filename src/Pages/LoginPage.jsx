import React, { useRef, useState, useEffect } from "react";
import img from "../assets/imgs/login.jpg";

const LoginPage = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [emailWarning, setEmailWarning] = useState("");
  const [passwordWarning, setPasswordWarning] = useState("");
  const [focused, setFocused] = useState({ email: false, password: false });

  // Close warnings when clicking outside both inputs
  useEffect(() => {
    const handleClick = (e) => {
      if (
        emailRef.current &&
        passwordRef.current &&
        !emailRef.current.contains(e.target) &&
        !passwordRef.current.contains(e.target)
      ) {
        setEmailWarning("");
        setPasswordWarning("");
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const submit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!emailRef.current.value.trim()) {
      setEmailWarning("Please enter your email");
      valid = false;
    } else {
      setEmailWarning("");
    }

    if (!passwordRef.current.value.trim()) {
      setPasswordWarning("Please enter your password");
      valid = false;
    } else {
      setPasswordWarning("");
    }

    // continue with login logic...
  };

  // Function for Google sign in button
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    alert("Google sign in clicked");
    // Add your Google sign-in logic here
  };

  return (
    <>
      <div className="min-h-screen flex">
        {/* Left Side */}
        <div className="w-full md:w-1/3 bg-[#F0F0F0] px-8 md:px-16 flex flex-col justify-center rounded-none md:rounded-s-3xl">
          <h1 className="text-center text-4xl tt">Log in to Your Account</h1>
          <p className="text-center">Welcome back! Please enter Your details</p>
          <div>
            <form onSubmit={submit}>
              {/* email */}
              <fieldset className="fieldset my-5">
                <legend className="fieldset-legend font-medium tt text-xl">Email</legend>
                <input
                  type="text"
                  ref={emailRef}
                  className={`border border-1 rounded-md py-2 px-2 w-full ${emailWarning ? "border-red-500" : "border-gray-300"}`}
                  placeholder="Enter Your Email"
                  onChange={() => setEmailWarning("")}
                  onBlur={() => setEmailWarning("")}
                  onFocus={() => setFocused(f => ({ ...f, email: true }))}
                />
                {emailWarning && (
                  <span className="text-red-500 text-xs">{emailWarning}</span>
                )}
              </fieldset>
              {/* password */}
              <fieldset className="fieldset my-5">
                <legend className="fieldset-legend font-medium tt text-xl">
                  Password
                </legend>
                <input
                  type="password"
                  ref={passwordRef}
                  className={`border border-1 rounded-md py-2 px-2 w-full ${passwordWarning ? "border-red-500" : "border-gray-300"}`}
                  placeholder="Enter Your Password"
                  onChange={() => setPasswordWarning("")}
                  onBlur={() => setPasswordWarning("")}
                  onFocus={() => setFocused(f => ({ ...f, password: true }))}
                />
                {passwordWarning && (
                  <span className="text-red-500 text-xs">{passwordWarning}</span>
                )}
              </fieldset>
              <button type="submit" className="bg-black text-white w-full py-2 rounded-md tt">Sign in</button>
              <div className="flex gap-3 items-center my-5">
                <hr className="border border-gray-300 w-full" />
                <p>or</p>
                <hr className="border border-gray-300 w-full" />
              </div>
              <button
                type="button"
                className="border bg-white py-2 w-full flex items-center justify-center gap-2"
                onClick={handleGoogleSignIn}
              >
                <img src="./public/imgs/google.png" alt="" />Sign in With Google
              </button>
              <p className="text-center my-3">
                Don't have an account? <span className="font-semibold">Sign Up</span>
              </p>
            </form>
          </div>
        </div>
        {/* Right Side */}
        <div className="hidden md:flex w-2/3 items-center justify-center">
          <img className="h-screen w-full object-cover" src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default LoginPage;