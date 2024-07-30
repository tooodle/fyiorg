"use client";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Emosphere() {
  const maxCharacters = 500;
  const [text, setText] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("idle"); // Initial submission status

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const charactersLeft = maxCharacters - text.length;

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (!isConfirmed) {
      alert("Please confirm your confession by checking the box.");
      return; // Early exit if confirmation is not checked
    }

    setSubmissionStatus("submitting"); // Update submission status

    try {
      const response = await fetch("https://fyiorg.earthie.in/confessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setSubmissionStatus("success"); // Update submission status on success
      console.log("Confession saved successfully");
    } catch (error) {
      console.error("Error saving confession:", error);
      setSubmissionStatus("error"); // Update submission status on error
    } finally {
      setText(""); // Clear the text input after submission
      setIsConfirmed(false); // Reset checkbox state
    }
  };

  useEffect(() => {
    // Handle different submission statuses (optional)
    if (submissionStatus === "success") {
      toast.success('Confession sent successfully!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      setTimeout(() => setSubmissionStatus("idle"), 3000); // Reset after 3 seconds
    } else if (submissionStatus === "error") {
      // Show error message (e.g., using a modal)
      setTimeout(() => setSubmissionStatus("idle"), 5000); // Reset after 5 seconds
      toast.error('Something went wrong!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }, [submissionStatus]);

  return (
    <div className="md:px-96 pt-32 px-5 overflow-x-clip">
      <p className="text-pink-700 text-6xl font-bold">Confess Now!</p>
      <p className="text-pink-600 my-4 font-medium text-lg">
        We at FYI respect your privacy and any confessions made are kept
        anonymous. So without even a second thought just pour it all out.
      </p>
      <div>
        <textarea
          id="comment"
          maxLength={maxCharacters}
          value={text}
          onChange={handleInputChange}
          placeholder="Enter your confession here"
          className="w-full border-2 border-pink-600 rounded-md min-h-64 p-4 focus:outline-none"
        />
        <p id="characterLeft">{charactersLeft} characters left</p>
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="confirmCheckbox"
            checked={isConfirmed}
            onChange={() => setIsConfirmed(!isConfirmed)}
          />
          <label htmlFor="confirmCheckbox" className="ml-2">
            I confirm that my confession is true and anonymous.
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="disabled:opacity-50 bg-pink-600 text-white py-2 px-4 rounded-md focus:outline-none hover:bg-pink-700 mt-5"
        disabled={!text || !isConfirmed} // Disable submit button if text is empty or confirmation is not checked
        onClick={handleSubmit}
      >
        Submit Confession
      </button>

      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
    </div>
  );
}

export default Emosphere;
