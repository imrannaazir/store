import { BaggageClaim } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    // <Image
    //   className="
    //   hidden
    //   md:block
    //   w-[93px]
    //   h-[23px]"
    //   src="/shared/bacola-logo-mobile.png"
    //   alt="logo"
    //   width={93}
    //   height={23}
    // />
    <Link href="/" className="flex flex-col justify-center items-center mr-3">
      <BaggageClaim className="text-primary " size={30} />
      <span className="text-xs">GlossaryFy</span>
    </Link>
  );
}
