'use client'
import React, { useState, useEffect } from "react";

function Emosphere() {
  const maxCharacters = 500;
  const [text, setText] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const charactersLeft = maxCharacters - text.length;

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (!isConfirmed) {
      alert("Please confirm your confession by checking the box.");
      return; // Early exit if confirmation is not checked
    }

    
    console.log("Confession submitted:", text);
    setText(""); // Clear the text after successful submission
    setIsConfirmed(false); // Reset checkbox state
  };

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
    </div>
  );
}

export default Emosphere;
