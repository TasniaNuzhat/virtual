import React from "react";
import {cn} from "@/lib/utils";
interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {className?:string}
export default function Button({className,...props}:ButtonProps){return <button className={cn("rounded-md",className)} {...props} />;}
