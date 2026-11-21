import React from "react";
import {cn} from "@/lib/utils";
interface BadgeProps extends React.ComponentPropsWithoutRef<"span"> {className?:string}
export default function Badge({className,...props}:BadgeProps){return <span className={cn("rounded-md",className)} {...props} />;}
