import React from 'react';
import Link from 'next/link';
import './globals.css';
// import Navbar from './navbar/navbar.js';
// import Footer from './footer/footer.js';
// import Body from './body/body.js';
// import { Routes, Route } from 'react-router-dom';
// import Events from './textFolder/events';
// import Competitions from './textFolder/competitions';
// import Kartavya from './textFolder/kartavya';
// import MUN from './textFolder/mun';
// import Merch from './textFolder/merch';
// import Team from './textFolder/team';
// import Sponsers from './textFolder/sponsers';
// import Register from './textFolder/register.js';
// import circle from './footer/footer_images/Round element.png';
// import circle1 from './footer/circle_images/Frame 15232-min.png';
// import windows from './footer/footer_images/Windows.png';
// import windows1 from './footer/windows_images/Frame 15230-min.png';

export default function MainPage() {
  return (
    <>
      <Link href="/kartavya">Kartavya Page</Link>
      <br></br>
      <Link href="/sponsor">Sponsor Page</Link>
      <br />
      <Link href="/teams">Teams Page</Link>
    </>
  )
}
