"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface FinalCtaProps { className?: string }
export default function FinalCta({className}: FinalCtaProps) {
return (<section className={cn("final-cta", className)} id={"registration"}><h2>{"Turn your mission"}<br />{"into momentum."}</h2><p>{"Build your strategy, connect with donors and take the next step toward successful fundraising."}</p><a className={"cta"} href={"#program"}>{"Explore the program "}<span className={"arrow"}>{"→"}</span></a></section>);
}
