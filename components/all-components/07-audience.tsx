"use client";
import React from "react";
import { cn } from "@/lib/utils";
import asset1 from "@/assets/images/audience-1.jpg";
import asset2 from "@/assets/images/audience-2.jpg";
import asset3 from "@/assets/images/audience-3.jpg";
import asset4 from "@/assets/images/audience-4.jpg";
interface AudienceProps { className?: string }
export default function Audience({className}: AudienceProps) {
return (<section className={cn("audience", className)} id={"audience"}><header className={"aud-intro"}><h2>{"Who should attend"}</h2><p>{"For people ready to turn meaningful ideas into lasting impact."}</p></header><div className={"aud-track"}><div className={"aud-pin"}><div className={"aud-message"}>{"Driven by purpose"}<br /><em>{"United by ideas"}</em><br />{"Ready to make an impact"}</div><article className={"aud-card ac0"}><img alt={"Nonprofit teams collaborating in a meeting"} src={asset1} /><h3>{"Nonprofit teams"}</h3><p>{"Build a sustainable funding strategy."}</p></article><article className={"aud-card ac1"}><img alt={"Social entrepreneurs collaborating in a meeting"} src={asset2} /><h3>{"Social entrepreneurs"}</h3><p>{"Turn your mission into measurable impact."}</p></article><article className={"aud-card ac2"}><img alt={"Community leaders collaborating in a meeting"} src={asset3} /><h3>{"Community leaders"}</h3><p>{"Mobilize support for your community."}</p></article><article className={"aud-card ac3"}><img alt={"Fundraising professionals collaborating in a meeting"} src={asset4} /><h3>{"Fundraising professionals"}</h3><p>{"Strengthen your donor engagement skills."}</p></article></div></div></section>);
}
