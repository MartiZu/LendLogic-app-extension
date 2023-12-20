"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    //simulate storing user data
    console.log("Data submitted", email);
    //display messafe and reset form
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 4000);
  };

  return (
    <main>
      <div className="mt-12 mx-4 bg-off-white  rounded-3xl p-3 shadow-card text-center text-2xl">
        <h2 className="font-normal py-7 text-3xl text-purple-accent">Sign up for our newsletter</h2>
        <p className="py-2 font-normal text-xl">Did you see something interesting?</p>
        <p className="py-2 font-normal text-xl">
          Get the latest news and updates from Lendlogic
        </p>
        <form>
          {submitted ? (
            <p className="py-6 font-semibold text-2xl text-purple-accent">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Thanks for signing up! You'll receive a confirmation email soon.
            </p>
          ) : (
            <div className="flex flex-col items-center py-4">
              <input
                className="border-2 max-w-md border-purple-accent rounded-full w-4/5 h-16 pl-8 text-xl font-semibold shadow-button"
                type="email"
                placeholder="Email address"
                value={email}
                onChange={handleInputChange}
              />
              <button
                className="w-48 h-16 bg-purple-accent  m-5 rounded-full text-xl text-off-white font-semibold shadow-button"
                type="submit"
                onClick={handleSubmit}
              >
                Sign up
              </button>
            </div>
          )}
        </form>
      </div>
    </main>
  );
}
