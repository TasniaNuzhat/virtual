"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface NavbarProps { className?: string }
export default function Navbar({className}: NavbarProps) {
const [open,setOpen]=useState(false);
return (<nav className={cn("nav", className)}><div className={"bar"}><a className={"logo"} href={"#home"}>{"FUNDRAISE."}</a><button aria-expanded={open} onClick={()=>setOpen(!open)} aria-label={"Open menu"} className={"fb-toggle"}><span></span><span></span></button></div><div className={cn("fb-menu",open && "fb-open")} onClick={()=>setOpen(false)}><a href={"#home"}>{"INDEX"}</a><a href={"#challenge"}>{"CHALLENGE"}</a><a href={"#solution"}>{"SOLUTION"}</a><a href={"#program"}>{"PROGRAM"}</a><a href={"#how-it-works"}>{"HOW IT WORKS"}</a><a href={"#audience"}>{"WHO IT'S FOR"}</a><a href={"#faq"}>{"FAQ"}</a><a href={"#program"} style={{"background": "#d6ff91", "padding": "12px", "borderRadius": "4px"} as React.CSSProperties}>{"Explore the program ↗"}</a></div></nav>);
}
