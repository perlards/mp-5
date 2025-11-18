"use client";
import { LinkProps } from "@/types/LinkProps"
import{ useState } from "react";
import LinkPreview from "./LinkPreview";
import NewLinkForm from "./NewLinkForm";

export default function LinkDisplay(){

    const [links, setLinks] = useState<LinkProps[]>([]);

    return (
        <div className="flex flex-col items-center">
            <NewLinkForm append={(newLink)=> {
                setLinks([newLink])
            }}/>
            {links.map((link) => (
                <LinkPreview key={link.id} link = {link} />
            ))}
        </div>
    );
}