"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ConfessionCard({ confession }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(confession[1]); // Assuming confession text is at index 1
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };
  return (
    <Card className="shadow-md border-pink-800 w-[300px]">
      <CardContent className="text-pink-700 p-4">{confession[1]}</CardContent>
      <CardFooter className="p-4">
        <Button onClick={handleCopy} disabled={copied}  className="disabled:opacity-50 bg-pink-600 text-white py-2 px-4 rounded-md focus:outline-none hover:bg-pink-700">
          {copied ? "Copied!" : "Copy"}
        </Button>
      </CardFooter>
    </Card>
  );
}

function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (event) => {
    const envUsername = process.env.NEXT_PUBLIC_USERNAME;
    const envPassword = process.env.NEXT_PUBLIC_PASSWORD;

    event.preventDefault();
    if (username === 'sanyafyi' && password === 's@nyafyi') {
      setIsLoggedIn(true);
      // Redirect to admin dashboard or perform other actions
      toast.success("Logged in successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      // Handle incorrect credentials
      toast.error("Invalid Credentials!", {
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
  };

  const [confessions, setConfessions] = useState([]); // State to store confessions

  useEffect(() => {
    const fetchConfessions = async () => {
      if (isLoggedIn) {
        try {
          const response = await fetch("https://fyiorg.earthie.in/confessions");
          console.log(response);
          const data = await response.json();
          console.log(data);
          setConfessions(data);
        } catch (error) {
          console.error("Error fetching confessions:", error);
          toast.error("Failed to fetch confessions.", {
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
      }
    };

    fetchConfessions();
  }, [isLoggedIn]); // Re-fetch confessions on login state change

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log(isLoggedIn);
    toast.success("Logged out successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    // Clear any stored session or authentication data
  };

  return (
    <div className="">
        
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
      {isLoggedIn ? (
        <div>
          {confessions.length > 0 ? (
            <div>
              <p className="text-pink-700 text-4xl font-bold mt-24 ml-5">
                Confessions:
              </p>
              <div className=" flex flex-wrap w-full gap-6 p-5">
                {confessions.map((confession) => (
                  <ConfessionCard key={confession[0]} confession={confession} />
                ))}
              </div>
            </div>
          ) : (
            <p className="text-pink-700 text-6xl font-bold mt-24 ml-5">No confessions found.</p>
          )}
          <Button
            className="disabled:opacity-50 bg-pink-600 text-white py-2 px-4 rounded-md focus:outline-none hover:bg-pink-700 mt-10 ml-5"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      ) : (
        <Card className="w-[375px] m-auto mt-32">
          <CardHeader>
            <CardTitle className="text-pink-700">Admin Login</CardTitle>
            <CardDescription className="text-pink-600">
              Login to view confessions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name" className="text-pink-700">
                    Username
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="pname" className="text-pink-700">
                    Password
                  </Label>
                  <Input
                    type="password"
                    id="pname"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <Button
                className="disabled:opacity-50 bg-pink-600 text-white py-2 px-4 rounded-md focus:outline-none hover:bg-pink-700 mt-3"
                type="submit"
              >
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default Admin;
