import Link from "next/link";
import HeaderAuthButtons from "./_components/HeaderAuthButtons";
import { headerBorder } from "@/app/(styles)/styles";

function Header() {
  return (
    <header className="border-b h-[200px] bg-[url('/header.png')] bg-cover sticky top-0">
      <nav className="flex items-center justify-between font-bold h-[80%] ">
        <Link href="/" className="ml-10 flex items-center">
          <span className={`${headerBorder} ml-3`}>띨띨::TIL</span>
        </Link>

        <nav>
          <ul className="flex gap-x-7">
            <li className={`${headerBorder}`}>
              <Link href="/til/total" prefetch>
                전체 글 목록
              </Link>
            </li>
            <li className={`${headerBorder}`}>
              <Link href="/til/latest" prefetch>
                최신 글 목록
              </Link>
            </li>
            <li className={`${headerBorder}`}>
              <Link href="/til/write">TIL 쓰러가기</Link>
            </li>
          </ul>
        </nav>

        <HeaderAuthButtons />
      </nav>
    </header>
  );
}

export default Header;
