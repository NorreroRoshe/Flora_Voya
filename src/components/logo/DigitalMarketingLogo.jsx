import Link from "next/link";
import React from "react";
import LogoWhite2 from "../../../public/assets/imgs/logo/site-logo-white-2.png";
import LogoBlack from "../../../public/assets/imgs/logo/logo-black.png";
import Image from "next/image";

const DigitalMarketingLogo = () => {
  return (
    <>
      <div className="header__logo-2">
        <Link href={"/digital-marketing"} className="logo-dark">
          <Image
            priority
            // width={140}
            // height={22}
            width={190}
            height={62}
            src={LogoBlack}
            alt="Site Logo"
          />
        </Link>
        <Link href={"/digital-marketing"} className="logo-light">
          <Image
            priority
            width={160}
            height={62}
            src={LogoWhite2}
            alt="Site Logo"
          />
        </Link>
      </div>
    </>
  );
};

export default DigitalMarketingLogo;
