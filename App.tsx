import { useEffect } from "react";
import { mountInteractions } from "./interactions";
import Hero from "@/components/all-components/02-hero";
import Challenge from "@/components/all-components/03-challenge";
import Solution from "@/components/all-components/04-solution";
import Program from "@/components/all-components/05-program";
import HowItWorks from "@/components/all-components/06-how-it-works";
import Audience from "@/components/all-components/07-audience";
import FinalCta from "@/components/all-components/08-final-cta";
import Faq from "@/components/all-components/09-faq";
import Footer from "@/components/all-components/10-footer";
export default function App(){useEffect(()=>mountInteractions(),[]);return <><div className="intro" aria-hidden="true"><span>FUNDRAISE.</span></div><Hero /><Challenge /><Solution /><Program /><HowItWorks /><Audience /><FinalCta /><Faq /><Footer /></>;}
