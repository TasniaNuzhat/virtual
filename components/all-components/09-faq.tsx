"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface FaqProps { className?: string }
export default function Faq({className}: FaqProps) {
return (<section className={cn("faq", className)} id={"faq"}><h2>{"Frequently asked"}<br />{"questions"}</h2><div className={"faq-list"}><details><summary>{"Who is this bootcamp for?"}<span></span></summary><p>{"It is designed for nonprofit teams, social entrepreneurs, community leaders and fundraising professionals."}</p></details><details><summary>{"Do I need fundraising experience?"}<span></span></summary><p>{"The learning roadmap starts with fundraising fundamentals and builds toward a practical campaign plan."}</p></details><details><summary>{"Is the bootcamp online?"}<span></span></summary><p>{"Yes, the bootcamp is designed as a virtual learning experience."}</p></details><details><summary>{"What will I learn?"}<span></span></summary><p>{"Explore fundraising strategy, donor research, pitching and campaign action planning."}</p></details><details><summary>{"When does the bootcamp start?"}<span></span></summary><p>{"Dates, fees and participation details have not yet been announced."}</p></details></div></section>);
}
