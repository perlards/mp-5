import Link from "next/link";

export default function Header(){
    const linkStyle = "p-1 m-2 text-xl hover:underline";

    return(
        <nav>
            <ul>
                <li>
                    <Link href={`/`} className={linkStyle}> Home</Link>

                </li>

            </ul>
        </nav>
    )
}