import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-softurk text-color1 flex flex-row w-screen">
            <div className="flex flex-row flex-grow justify-start items-center space-x-16 pl-16">
                <p>© 2023 Geoat. Tüm hakları saklıdır.</p>
            </div>
            <div className="flex flex-row flex-grow justify-end items-center space-x-16 pr-16">
                <Link href='/' className='p-2 rounded-xl hover:bg-hov transition-all'>Anasayfa</Link>
                <Link href='/projects' className='p-2 rounded-xl hover:bg-hov transition-all'>Projeler</Link>
                <Link href='/about' className='p-2 rounded-xl hover:bg-hov transition-all'>Hakkımızda</Link>
                <Link href='/contact' className='p-2 rounded-xl hover:bg-hov transition-all'>İletişim</Link>
            </div>

            <div className="flex flex-col justify-center items-center space-y-4 p-10">
              <h1 className='font-black'>Bize ulaşın</h1>
              <p>Antalya, Türkiye</p>
              <p>
                  <a href="mailto:
                  ">
                    pmustafa0@gmail.com
                  </a>
              </p>
              <p>
                  <a href="tel:">
                    +90 000 000 00 00
                  </a>
              </p>
          </div>

        </footer>
    )
}