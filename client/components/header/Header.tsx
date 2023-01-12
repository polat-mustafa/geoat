import Link from "next/link";
import Logo from "../logo/Logo";
import { Button, Radio } from "antd";

export default function Header() {
  return (
    <div className="bg-white1 text-color1 flex justify-center items-center w-screen">
      <div className="max-w-7xl flex flex-row flex-grow justify-between items-center space-x-16 pl-16">
        <Logo />
        <div className="flex flex-row flex-grow justify-end items-center space-x-16 pr-16">
          <Link href="/" className="p-2 rounded-xl hover:bg-hov transition-all">
            Anasayfa
          </Link>
          <Link
            href="/projects"
            className="p-2 rounded-xl hover:bg-hov transition-all"
          >
            Projeler
          </Link>
          <Link
            href="/about"
            className="p-2 rounded-xl hover:bg-hov transition-all"
          >
            Hakkımızda
          </Link>
          <Link
            href="/contact"
            className="p-2 rounded-xl hover:bg-hov transition-all"
          >
            İletişim
          </Link>
          <Link href="/login">
            <Button
              type="primary"
              block
              className="rounded-xl bg-softurk hover:bg-softurk2"
            >
              Giriş Yap
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
