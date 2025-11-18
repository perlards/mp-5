import getLinkByAlias from "@/lib/getLinkByAlias";
import {redirect} from "next/navigation";

export default async function RedirectPage({
    params,
}:{
    params: Promise<{ alias: string }>
}){
    const{alias} = await params;


    const link = await getLinkByAlias(alias);
    if(!link) {
        redirect("/");
    }
    redirect(link.url);

    }