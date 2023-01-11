import Image from 'next/image'
import logos from '../../public/1.png'
import Link from 'next/link'


export default function Logo() {
  return (
    <Link href="/">
      <Image src={logos} alt="logo" width={100} height={100} className="ml-20 mt-4" />
    </Link>
  )
}

