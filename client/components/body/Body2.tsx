import { Button, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Image from "next/image";
import images from "../../public/software-engineer.png";

export default function Body2() {
  return (
    <div className="bg-white1 grid grid-cols-2 justify-center items-center max-w-screen-xl">
      <div className=" h-96 w-96 rounded-2xl grid grid-col-2  bg-white1 mr-16">
        <h1 className="font-black text-4xl">
          En son gelişmelerden haberdar olmak için lütfen e-posta adresinizi
          giriniz.
        </h1>
        <Input
          type="text"
          placeholder="E-posta adresinizi giriniz."
          prefix={<UserOutlined />}
        />
        <Button
          type="primary"
          className="rounded-xl bg-softurk text-white1 mt-3"
        >
          Gönder
        </Button>
      </div>
      <div className=" h-96 w-96 rounded-2xl grid grid-col-2 bg-white1 ml-16">
      <Image src={images} alt="logo" />
      </div>
    </div>
  );
}
