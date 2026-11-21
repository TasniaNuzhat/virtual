"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface ProgramProps { className?: string }
export default function Program({className}: ProgramProps) {
return (<section aria-labelledby={"program-title"} className={cn("program", className)} id={"program"}><div className={"program-layout"}><div className={"program-intro"}><h2 id={"program-title"}>{"Your fundraising journey,"}<br />{"step by step."}</h2><p>{"A practical learning roadmap, from finding your fundraising focus to building a campaign you can put into action."}</p></div><div className={"program-steps"}><article className={"program-step"} style={{"--step": "0"} as React.CSSProperties}><small>{"Module 01"}</small><h3>{"Fundraising foundations"}</h3><p>{"Define your goals, understand your funding needs and build a clear strategy."}</p></article><article className={"program-step"} style={{"--step": "1"} as React.CSSProperties}><small>{"Module 02"}</small><h3>{"Donor research and outreach"}</h3><p>{"Identify potential donors and develop a thoughtful approach to outreach."}</p></article><article className={"program-step"} style={{"--step": "2"} as React.CSSProperties}><small>{"Module 03"}</small><h3>{"Craft your pitch"}</h3><p>{"Build a compelling case for support and practice communicating your impact."}</p></article><article className={"program-step"} style={{"--step": "3"} as React.CSSProperties}><small>{"Module 04"}</small><h3>{"Campaign action plan"}</h3><p>{"Bring your learning together into a practical fundraising roadmap."}</p></article></div></div></section>);
}
