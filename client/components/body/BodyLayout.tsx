import * as Bodys from "./index";

export default function BodyLayout() {
  return (
    <div className="flex flex-col justify-center items-center bg-white1 w-screen">
      {Object.keys(Bodys).map((key, index) => {
        const bodykey = key as keyof typeof Bodys; // Type assertion, objelerin keylerini alıyoruz. TypeScript'in keyleri string olarak algılaması için yapıyoruz.
        const Body = Bodys[bodykey];
        return (
          <div
            key={index}
            className="flex flex-col justify-center items-center bg-white1 w-screen p-10"
          >
            <Body />
          </div>
        );
      })}
    </div>
  );
}
