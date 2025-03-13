import { useState } from "react";
import { handleResetPassword } from "../supabaseClient";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // handleResetPassword(email);
    const result = await handleResetPassword(email);

    if (result.error) {
      toast.error(result.error.message);
    } else {
      toast.success("Password reset link sent! Check your email.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-40 h-1/2">
      <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
