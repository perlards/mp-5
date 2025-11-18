import { LinkProps } from "@/types/LinkProps"
import Link from "next/link"
import {useState} from "react";


export default function LinkPreview({link}:{link:LinkProps}) {
    const [copied, setCopied] = useState(false);
    const shortUrl = `${typeof window !== "undefined" ? window.location.origin : ""}/${link.alias}`;

    const handleCopy = async () => {
        await navigator.clipboard.writeText(shortUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };


    return (
            <div className ="bg-pink-100 rounded-xl p-4 m-2 w-96">
            <Link
                href={`/${link.alias}`}
                target="_blank"
                rel="noopener noreferrer">
                <h4 className = "font-bold text-xl">{shortUrl}</h4>
            </Link>

                <button
                    onClick={handleCopy}
                    className="bg-white px-3 py-1 rounded-md text-sm font-semibold hover:bg-gray-200"
                >
                    {copied ? "Copied!" : "Copy"}
                </button>
            </div>


    );
}