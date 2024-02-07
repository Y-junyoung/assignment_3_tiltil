"use client";

import { useAuth } from "@/app/(providers)/_contexts/auth.context";
import { headerBorder } from "@/app/(styles)/styles";
import Link from "next/link";

function HeaderAuthButtons() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  return (
    <div className="flex gap-x-4 items-center mr-10">
      {isLoggedIn ? (
        <>
          <Link href="/my-page" className={`${headerBorder} w-30`}>
            마이페이지
          </Link>
          <Link
            href="/log-in"
            className={`${headerBorder} w-30`}
            onClick={() => setIsLoggedIn(false)}
          >
            로그아웃
          </Link>
        </>
      ) : (
        <>
          <Link href="/sign-up" className={`${headerBorder} w-30 `} prefetch>
            회원가입하기
          </Link>
          <Link href="/log-in" className={`${headerBorder} w-30`}>
            로그인
          </Link>
        </>
      )}
    </div>
  );
}

export default HeaderAuthButtons;
