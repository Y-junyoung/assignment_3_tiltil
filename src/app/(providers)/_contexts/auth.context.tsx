"use client";

import { useRouter } from "next/navigation";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthContextValue = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  signUp: (id: string, pw: string, pwRe: string, nick: string) => Promise<void>;
};

const initialValue: AuthContextValue = {
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  signUp: async () => {},
};

const AuthContext = createContext<AuthContextValue>(initialValue);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const signUp = async (id: string, pw: string, pwRe: string, nick: string) => {
    if (pw !== pwRe) {
      alert("패스워드가 일치하지 않습니다.");
      return;
    }

    try {
      // 패스워드가 일치하면 회원가입 처리
      setIsLoggedIn(true);
      router.replace("/");
    } catch (err) {
      console.error("Error signing up:", err);
      alert("회원가입 실패~");
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/");
    }
  }, [router, isLoggedIn]);

  const value: AuthContextValue = {
    isLoggedIn,
    setIsLoggedIn,
    signUp,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
