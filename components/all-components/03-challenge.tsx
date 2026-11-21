"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface ChallengeProps { className?: string }
export default function Challenge({className}: ChallengeProps) {
return (<section aria-labelledby={"challenge-title"} className={cn("challenge-wrap", className)} id={"challenge"}><div className={"challenge"}><h2 id={"challenge-title"}>{"GREAT IDEAS "}<span className={"spark"}>{"✱"}</span>{" NEED"}<br />{"GREAT "}<span className={"chevrons"}>{"»"}</span>{" FUNDRAISING"}</h2><p className={"challenge-copy"}>{"Having a meaningful mission is only the beginning. Without a clear fundraising strategy, the right donor connections and a confident pitch, turning your vision into reality can feel overwhelming."}</p><div className={"challenge-cards"}><article className={"challenge-card"}><strong>{"No clear plan"}</strong><p>{"Uncertain fundraising strategy"}</p></article><article className={"challenge-card"}><strong>{"Limited reach"}</strong><p>{"Difficulty connecting with donors"}</p></article><article className={"challenge-card"}><strong>{"Low confidence"}</strong><p>{"Struggling to communicate your impact"}</p></article></div></div></section>);
}
