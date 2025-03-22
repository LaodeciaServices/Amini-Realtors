// import { useRouter } from "next/router";

const NotLoggedIn = () => {
  //   const router = useRouter();

  const handleSignIn = () => {
    // router.push("/login");
    window.location.href = "/login";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl font-bold text-red-600">
          You Are Not Logged In
        </h2>
        <p className="mt-4 text-gray-700">
          Please <b>sign in or signup</b> to continue to the next page.
        </p>
        <div className="flex justify-center gap-6">
          <button
            onClick={handleSignIn}
            className="mt-6 bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition"
          >
            Sign In
          </button>
          <button
            onClick={handleSignIn}
            className="mt-6 bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotLoggedIn;
