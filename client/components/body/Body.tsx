import images from '../../public/pngwing.com.png'
import Image from 'next/image'

export default function Body() {
  return (
    <div className="bg-white1 h-screen w-screen grid grid-cols-2 justify-center items-center">
        <div className=" h-96 w-96 rounded-2xl grid grid-col-2 ml-20">
            <h1 className='font-black text-4xl'>Hey! Proje deneyimi kazanmak ve özgeçmişine yeni yetenekler eklemek istermisin?</h1>
            <p>Deneyim kazanabileceğin, istediğin alanda kendine bir çevre oluşturabildiğin tamamen ücretsiz bir platform.</p>
            <button className='bg-softurk hover:bg-blue-700 text-color1 transition-all  hover:transform hover:scale-110 py-2 px-4 rounded-full mt-1'>Hemen Başla!</button>
        </div>
        <div className=" h-96 w-96 rounded-2xl grid grid-col-2 ml-20">
            <Image src={images} alt="logo" />
        </div>
    </div>
  )

}