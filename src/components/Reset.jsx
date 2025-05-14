import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ResetPage() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("readIds");
    navigate("/");
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center text-gray-500">
      Resetting...
    </div>
  );
}