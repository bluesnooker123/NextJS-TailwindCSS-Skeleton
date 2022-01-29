import Link from 'next/link'
import Image from 'next/image'
import Logo from '../assets/imgs/logo.png';

interface NavbarProps {
  str: string;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <div className="bg-black text-white flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/">
          <>
            <Image className="" alt="Logo Image" src={Logo} width={100} />
          </>
        </Link>
        <span className="text-5xl font-Righteous">{props.str}</span>
      </div>
    </div>
  );
};

export default Navbar;


