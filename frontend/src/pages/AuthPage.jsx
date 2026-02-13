import { useState } from "react";
import Register from "./Register";
import Login from "./Login";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="w-full max-w-md">
        
        {/* toggle buttons */}
        <div className="flex mb-6 bg-slate-800 rounded-lg p-1">
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 rounded-lg ${
              !isLogin ? "bg-indigo-600 text-white" : "text-gray-300"
            }`}
          >
            Sign Up
          </button>

          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 rounded-lg ${
              isLogin ? "bg-indigo-600 text-white" : "text-gray-300"
            }`}
          >
            Sign In
          </button>
        </div>

        {/* form switch */}
        {isLogin ? <Login /> : <Register />}
      </div>
    </div>
  );
};

export default AuthPage;
