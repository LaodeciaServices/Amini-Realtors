import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
// import { createClient } from "@supabase/supabase-js";

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );

export default function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        setUser(session.user);
      }
    };

    getUser();
  }, []);

  return (
    <div>
      {user ? (
        <p>Welcome, {user.user_metadata.full_name || user.email}!</p>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
}
