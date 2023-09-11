import Image from "next/image";

export default function Logo() {
  return (
    <Image
      className="
      hidden
      md:block
      w-[93px]
      h-[23px]"
      src="/shared/bacola-logo-mobile.png"
      alt="logo"
      width={93}
      height={23}
    />
  );
}
