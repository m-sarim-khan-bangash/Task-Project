"use client";

import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Link from "next/link";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function LoginView() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dummyEmail = "test@example.com";
    const dummyPassword = "password123";

    if (formData.email === dummyEmail && formData.password === dummyPassword) {
      Cookies.set("user", JSON.stringify({ email: formData.email }));
      router.replace("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-center text-xl font-bold text-gray-900 md:text-3xl dark:text-white">
              Login!!
            </h1>

            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              {error && <p className="text-red-500 text-sm">{error}</p>}
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
              <Button text="Login" type="submit" />
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account?{" "}
                <Link
                  href="/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Register
                </Link>
              </p>

              <p>Credentials: "test@example.com" & "password123"</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
