import LinksDisplay from "@/app/components/LinkDisplay";

export default async function Home() {

    return (

        <div className="flex flex-col items-center bg-pink-50 p-4 h-[100vh]">
            <h1 className="text-4xl font-bold mb-2">URL Shortener</h1>
            <LinksDisplay />

        </div>
    );
}
