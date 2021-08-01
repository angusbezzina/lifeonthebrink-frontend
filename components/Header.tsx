import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import HeaderStyles from "styles/HeaderStyles";
import ContainerStyles from "styles/ContainerStyles";
import NavStyles from "styles/NavStyles";

const Header = () => {
  const [active, setActive] = useState(false);
  const logo = active ? "/logo-alt.png" : "/logo.png";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 100) return setActive(true);

      return setActive(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  return (
    <HeaderStyles active={active}>
      <ContainerStyles
        flexDirection="row"
        justify="space-between"
        align="center"
      >
        <Link href="/">
          <a className="logoLink">
            <Image
              src={logo}
              alt="Life: on the brink logo"
              className="logo logo-primary"
              width="80px"
              height="80px"
              objectFit="contain"
            />
          </a>
        </Link>
        <NavStyles active={active}>
          <Link href="/about-us">
            <a>About Us</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </NavStyles>
      </ContainerStyles>
    </HeaderStyles>
  );
};

export default Header;
