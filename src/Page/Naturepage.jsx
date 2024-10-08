import React from 'react';
import NavbarComponents from '../components/NavbarComponents'; // Pastikan path ini sesuai dengan lokasi file NavbarComponents
import NatureComponents from '../components/NatureComponents';
import MenuComponents from '../components/MenuComponents';
import FooterComponents from '../components/FooterComponents';

import VillaIcon from "../assets/icon/Villa.png";
import BeachIcon from "../assets/icon/beach.png";
import CultureIcon from "../assets/icon/culture.png";
import NatureIcon from "../assets/icon/nature.png";
import HikingIcon from "../assets/icon/hiking.png";

// Definisikan item navigasi untuk MenuComponents
const navListItems = [
  { label: "Villa", icon: VillaIcon, href: "/Villa" },
  { label: "Beach", icon: BeachIcon, href: "/beach" },
  { label: "Culture", icon: CultureIcon, href: "/culture" },
  { label: "Nature", icon: NatureIcon, href: "/nature" },
  { label: "Hiking", icon: HikingIcon, href: "/hiking" },
];

const Index = () => {
  return (
    <div>
      <NavbarComponents />
      <MenuComponents
        title="Explore Nature With Us"
        subtitle="You want to explore Bali apart from nature. There's more.."
        navItems={navListItems}
      />
      <NatureComponents />
      <FooterComponents />
    </div>
  );
}

export default Index;
