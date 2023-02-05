import React from "react";
import Image from "next/image";
import second from '../../../public/iconLogo.png'
export default function Mainpage() {
  return (
    <div>
      <Image
        src={second}
        alt="Picture of the author"
        width={1000}
        height={500}
      />
    </div>
  );
}
