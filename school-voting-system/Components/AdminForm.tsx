import React, { useState } from "react";
import { useRouter } from "next/router";


const AdminForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const validateEmail = (email: string) => {
         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>)=> {
               e.preventDefault();

               setError(null);

               if(!email || !password) {
                setError("Please enter your email and password.");
                return;
               }

               if (!validateEmail(email)) {
                 setError("Please enter a valid email address.");
                  return;
               }
               
               if (password.length < 8){
                   setError("Password must be at least 8 characters.");
                    return;
               }
             router.push("../admin")
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md rounded-xl border border-gray-200 shadow-md bg-white p-6 sm:p-8">

            <div className="space-y-6">

            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-gray-700 font-medium">
                    Email</label>
                <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-sm text-gray-700 font-medium">
                    Password</label>
                <input
                type="password"
                id="password"
                name="password"
                  value={password}
                onChange={(e) => setPassword(e.target.value)}
                 placeholder="Enter your password"
                className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
            </div>

            <button type="submit"
             className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              LogIn
            </button>

            {error && (
                <p className="text-sm text-red-600 text-center">{error}</p>
            )}
            </div>

        </form>
    )
}

export default AdminForm;