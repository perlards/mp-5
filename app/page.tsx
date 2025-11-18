import LinksDisplay from "@/app/components/LinkDisplay";
import getAllLinks from "@/lib/getAllLinks";

export default async function Home() {
    const links = await getAllLinks();

    return (

        <div className="flex flex-col items-center bg-pink-50 p-4">
            <h1 className="text-4xl font-bold mb-2">URL Shortener</h1>

            <LinksDisplay inputLinks={links}/>

        </div>
    );
}
