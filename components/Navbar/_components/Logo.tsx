import Link from "next/link";
import Image from "next/image";
Link

const Logo = () => {
    return ( 
        <>
            <Link href="/">
                <Image src="/logos/marshielo-logo.png" alt="logo" width={150} height={150} className="w-52 ml-5" />
            </Link>
        </>
     );
}
 
export default Logo;