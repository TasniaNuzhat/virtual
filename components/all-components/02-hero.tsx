"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Navbar from "./01-navbar";
import asset1 from "@/assets/images/hero-1.jpg";
import asset2 from "@/assets/images/hero-2.jpg";
import asset3 from "@/assets/videos/hero-3.mp4";
interface HeroProps { className?: string }
export default function Hero({className}: HeroProps) {
return (<main className={cn("hero", className)} id={"home"}><Navbar /><h1 className={"headline"}>{"FUNDRAISING"}</h1><h2 className={"headline right"}>{"BOOTCAMP"}</h2><div className={"info"}><div>{"Build your strategy"}</div><div>{"Master donor outreach"}</div><div>{"Raise with confidence"}</div><a className={"cta"} href={"#program"}>{"Explore the program "}<span className={"arrow"}>{"→"}</span></a></div><a className={"feature"} href={"#program"}><img alt={"Team attending a virtual training session"} src={asset1} /><span><small>{"Learn online"}</small><strong>{"Virtual"}<br />{"Bootcamp"}</strong></span><b>{"↗"}</b></a><div className={"video"}><video aria-label={"Fundraising bootcamp video"} autoPlay loop muted playsInline poster={asset2} src={asset3}></video><button aria-label={"Pause video"} className={"pause"}>{"Ⅱ"}</button></div><div className={"bottom"}><span>{"©2026"}</span></div></main>);
}
