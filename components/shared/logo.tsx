import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  href?: string;
  className?: string;
}

const Logo = ({ href, className }: LogoProps) => {
  return (
    <Link href={href ? href : "/"}>
      <Image
        src="/images/logo.svg"
        width={130}
        height={10}
        alt="logo"
        className={cn("w-20 md:w-28", className)}
      />
    </Link>
  );
};

export default Logo;
