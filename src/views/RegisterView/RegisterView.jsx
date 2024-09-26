"use client";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

export default function RegisterView() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    toast.success("User Reistered Successfully");
    console.log(formData);
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-center text-xl font-bold text-gray-900 md:text-3xl dark:text-white">
              Register Now!!
            </h1>
           
            <form onSubmit={handleRegister} className="space-y-4 md:space-y-6">
              <Input
                value={formData.name}
                onChange={handleChange}
                label="Name"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
              <Input
                value={formData.email}
                onChange={handleChange}
                label="Your email"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <Input
                value={formData.password}
                onChange={handleChange}
                label="Password"
                type="password"
                name="password"
                placeholder="••••••••"
                required
              />
              <Button text="Register" type="submit" />
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  href="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
