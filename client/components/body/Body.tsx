import images from "../../public/pngwing.com.png";
import Image from "next/image";
import { Button, Radio } from "antd";
import Link from "next/link";

export default function Body() {
  return (
    <div className="flex flex-row justify-center items-center max-w-screen-xl">
      <div className="flex flex-col justify-center items-center space-y-4 p-10 ">
        <h1 className="font-black text-4xl">
          Hey! Proje deneyimi kazanmak ve özgeçmişine yeni yetenekler eklemek
          istermisin?
        </h1>
        <p>
          Deneyim kazanabileceğin, istediğin alanda kendine bir çevre
          oluşturabildiğin tamamen ücretsiz bir platform.
        </p>
        <Link href="/login">
          <Button
            type="primary"
            className="rounded-xl bg-softurk hover:bg-softurk2 mt-4 text-white1 w-120 m-2"
          >
            Hemen Başla!
          </Button>
        </Link>
      </div>
      <div className=" flex flex-col justify-center items-center space-y-4 p-10">
        <Image src={images} alt="logo" />
      </div>
    </div>
  );
}
