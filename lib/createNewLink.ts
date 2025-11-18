"use server";
import getCollection, {LINKS_COLLECTION} from "@/db"
import { LinkProps } from "@/types/LinkProps"

export default async function createNewLink(
    url: string,
    alias: string,
): Promise<LinkProps> {
    console.log("Creating new link...");
///put errors!!!!
    const newLink={
        alias,
        url,
    };
    const linkCollection = await getCollection(LINKS_COLLECTION);
    const res = await linkCollection.insertOne({...newLink});

    if (!res.acknowledged) {
        throw new Error("DB insert failed")
    }
    return {...newLink, id: res.insertedId.toHexString()};
}
