import React from "react";
import {cn} from "@/lib/utils";
interface CardProps extends React.ComponentPropsWithoutRef<"div"> {className?:string}
export default function Card({className,...props}:CardProps){return <div className={cn("rounded-md",className)} {...props} />;}
