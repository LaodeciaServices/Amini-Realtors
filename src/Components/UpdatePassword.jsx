import { useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdatePassword = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUpdatePassword = async () => {
    if (!password) {
      toast.error("Password cannot be empty");
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({ password });

      if (error) {
        throw error;
      }

      toast.success("Password updated successfully!");
      navigate("/login"); // Redirect after success
    } catch (error) {
      toast.error(error.message);
      console.error("Password update error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Set New Password</h2>
      <input
        type="password"
        placeholder="Enter new password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        onClick={handleUpdatePassword}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
      >
        Update Password
      </button>
    </div>
  );
};

export default UpdatePassword;
