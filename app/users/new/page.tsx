"use client";
import React from "react";
import { useRouter } from "next/navigation";
const NewUserPage = () => {
  const router = useRouter();
  return (
    <button
      className="btn btn-primary text-white"
      onClick={() => router.push("/")}
    >
      Create new user
    </button>
  );
};

export default NewUserPage;
