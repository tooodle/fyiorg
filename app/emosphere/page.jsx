import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function Emosphere() {
  return (
    <div className="md:px-96 pt-32 px-5 overflow-x-clip">
      <p className="text-pink-700 text-6xl font-bold">Releasing Soon</p>
      <p className="text-pink-600 my-12 font-medium text-lg">
        We&apos;re excited to introduce Emoshpere, your upcoming haven for emotional
        well-being and mental health support. Our platform is designed to create
        a safe, nurturing environment where you can share your feelings, find
        support, and connect with others who understand. Stay tuned as we
        prepare to launch a space dedicated to fostering emotional growth and
        well-being. Emoshpere is coming soon to help you navigate your emotions
        with empathy and understanding.
      </p>
      <Link href={'https:www.instagram.com/fyiorg'} className="hidden md:block bg-pink-700 hover:bg-white text-white hover:text-pink-700 border-2 rounded-full p-4 border-pink-700 cursor-pointer ">
        Until then connect with us on instagram 
      </Link>
    </div>
  );
}

export default Emosphere;
