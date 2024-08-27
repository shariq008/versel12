import React from "react";
import Appbar from "./Components/Appbar";
import Box from "@mui/material/Box";
import "./Home.css";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import Tools from "./Components/Tools";
import Casestudies from "./Components/Casestudies";
import Adress from "./Components/Adress";
import Footer from './Components/Footer';
export default function Home() {
  return (
    <Box className="home">
      <Appbar />
      <HeroSection />
      <Services />
      <Tools />
      <Casestudies />
      <Box
        margin={"80px 80px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Adress
          title="Islamabad, Pakistan"
          address="Floor 2, Building 145, Civic Center Bahria Town Phase 4, Islamabad,Pakistan"
          email="jjit@gmail.com"
        />
        <Adress
          title="USA"
          address="1 squire armor road, windham, NH,03076

"
          email="jjit@gmail.com"
        />
        <Adress
          title="Saudi Arabia"
          address="7654 Prince Nawaf Street, Al Khobar, 34426

"
          email="jjit@gmail.com"
        />
        <Adress
          title="Kingdom of Bahrain"
          address="No 851, Bldg No 2420, Rd No 2831, Seef District, Block 428

    "
          email="jjit@gmail.com"
        />
      </Box>
      <Footer/>
    </Box>
  );
}
