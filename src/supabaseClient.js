import { createClient } from "@supabase/supabase-js";
import { toast } from "react-toastify";

// import dotenv from "dotenv";
// dotenv.config();

const SUPABASE_URL = import.meta.env.VITE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_KEY;
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const signUp = async (email, password) => {
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error("Signup error:", error.message);
    return null;
  }
  return user;
};

export const signIn = async (email, password) => {
  const { user, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Login error:", error.message);
    return null;
  }
  return user;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Logout error:", error.message);
  }
};

export const getUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
};

export const handleResetPassword = async (email) => {
  if (!email) {
    toast.error("Please enter your email address");
    return;
  }

  try {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "funny-duckanoo-ee514b.netlify.app/update-password", // Update with your frontend URL
    });

    if (error) {
      // throw error;
      return error;
    }
    return data;

    // return toast.success("Password reset link sent! Check your email.");
  } catch (error) {
    console.error("Password reset error:", error);
    // return toast.error(error.message);
    return error;
  }
};
