'use client';

import Link from 'next/link';
import React, { useState } from 'react';

type User = {
    email: string;
    password: string;
};

const ACCOUNT_USERS: User[] = [
    { email: 'admin@gmail.com', password: '123' },
    { email: 'jane.smith@example.com', password: 'qwerty456' },
    { email: 'alice.wonderland@example.com', password: 'alice2024' },
    { email: 'bob.builder@example.com', password: 'bobstrong!23' },
    { email: 'charlie.brown@example.com', password: 'charlie@789' },
];

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    function handleSignIn() {
        const isValidUser = ACCOUNT_USERS.some(
            (user) => user.email === email && user.password === password
        );        

        if (isValidUser) {
            if (typeof window !== 'undefined') {
                sessionStorage.setItem('token', '1');
            }
            else {
                console.log('Khong the luu session')
            }
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white">Welcome Back!</h2>
                    <p className="text-gray-400 mt-2">Sign in to your account</p>
                </div>

                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            autoComplete="off"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-gray-300">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <span className="ml-2 text-sm">Remember me</span>
                        </label>
                        <a href="#" className="text-sm text-blue-500 hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    <div>
                        <Link
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300"
                            onClick={handleSignIn}
                            href="/"
                        >
                            Sign In
                        </Link>
                    </div>
                </form>

                <div className="flex items-center justify-center my-4">
                    <span className="w-full border-t border-gray-600"></span>
                    <span className="mx-2 text-gray-400">OR</span>
                    <span className="w-full border-t border-gray-600"></span>
                </div>

                <p className="text-center text-sm text-gray-400 mt-4">
                    Do not have an account?{' '}
                    <a href="/signup" className="text-blue-500 hover:underline">
                        Sign up here
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
