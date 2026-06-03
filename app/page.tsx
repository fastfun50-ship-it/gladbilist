import { Hero } from "@/components/sections/Hero";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { About } from "@/components/sections/About";
import { SchoolCar } from "@/components/sections/SchoolCar";
import { Prices } from "@/components/sections/Prices";
import { CourseProcess } from "@/components/sections/CourseProcess";
import { ImportantLinks } from "@/components/sections/ImportantLinks";
import { Booking } from "@/components/sections/Booking";
import { Contact } from "@/components/sections/Contact";

// Optional smaller sections (Trailer / Reacquire / MC) are included inline inside Prices + Booking for a clean flow.
// You can split them out later if you want more breathing room.

export default function GladbilistHome() {
  return (
    <>
      <Hero />

      <WhyChoose />

      <About />

      <SchoolCar />

      <Prices />

      {/* Nyt: Dit forløb – erstatter før/efter slideren */}
      <CourseProcess />

      {/* Vigtige links – erstattet referencer med praktiske ressourcer */}
      <ImportantLinks />

      <Booking />

      <Contact />
    </>
  );
}
