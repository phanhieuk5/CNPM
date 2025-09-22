"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: gọi API login ở đây
    console.log("Login với:", { email, password });
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex object-cover h-screen">
        <img
          src="/img/img_login_admin.png"
          alt="Login Admin"
          className="w-full object-cover"
        />
      </div>
      <div className="flex w-screen h-full min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
          <h1 className="mb-6 text-center text-2xl font-bold text-yellow-600">
            Admin Bus - Đăng nhập
          </h1>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            {/* Email */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nhập email..."
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Mật khẩu
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Nhập mật khẩu..."
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:outline-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-yellow-500 py-2 font-semibold text-white hover:bg-yellow-600 transition"
            >
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
