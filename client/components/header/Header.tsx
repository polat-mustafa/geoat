import Link from 'next/link'
import Logo from '../logo/Logo'

export default function Header() {
  return (
    <div className="bg-white1 text-color1 flex flex-row w-screen">
      <Logo />
      <div className="flex flex-row flex-grow justify-end items-center space-x-16 pr-16">
          <Link href='/' className='p-3 rounded-xl hover:bg-hov transition-all'>Anasayfa</Link>
          <Link href='/projects' className='p-3 rounded-xl hover:bg-hov transition-all'>Projeler</Link>
          <Link href='/about' className='p-3 rounded-xl hover:bg-hov transition-all'>Hakkımızda</Link>
          <Link href='/contact' className='p-3 rounded-xl hover:bg-hov transition-all'>İletişim</Link>
          <Link href='/login' className='p-2 rounded-xl text-color1 transition-all bg-softurk hover:transform hover:scale-110'>Giriş Yap</Link>
      </div>
    </div>
  )
}