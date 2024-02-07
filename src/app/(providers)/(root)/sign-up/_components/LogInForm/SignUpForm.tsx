"use client";

import { useAuth } from "@/app/(providers)/_contexts/auth.context";
import { FormEventHandler, useState } from "react";

function SignUpForm() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwRe, setPwRe] = useState("");
  const [nick, setNick] = useState("");

  const auth = useAuth();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      await auth.signUp(id, pw, pwRe, nick);
    } catch (error) {
      console.error("회원가입 오류:", error);
      alert("회원가입 실패");
    }
    const url = `${window.location.origin}/api/auth/log-in`;
    const options = { method: "POST", body: JSON.stringify({ id, pw }) };
    const response = await fetch(url, options);
    const data = await response.json();

    if (data === "OK" && response.status === 200) {
      auth.setIsLoggedIn(true);
    } else {
      alert("로그인 실패~");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-10 bg-teal-200 p-10 rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label
          htmlFor="userId"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          사용자 ID
        </label>
        <input
          type="text"
          id="userId"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="userPw"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          비밀번호
        </label>
        <input
          type="password"
          id="userPw"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="userPwRe"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          비밀번호 확인
        </label>
        <input
          type="password"
          id="userPwRe"
          value={pwRe}
          onChange={(e) => setPwRe(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="userNick"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          닉네임
        </label>
        <input
          type="text"
          id="userNick"
          value={nick}
          onChange={(e) => setNick(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          회원가입하기
        </button>
      </div>
    </form>
  );
}

export default SignUpForm;
