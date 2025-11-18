import getCollection, {LINKS_COLLECTION} from "@/db";
import {LinkProps} from "@/types/LinkProps";

export default async function getLinkByAlias(alias: string): Promise<LinkProps | null> {

    const linkCollection = await getCollection(LINKS_COLLECTION);

    const data = await linkCollection.findOne({ alias });

    if (!data) return null;

    return {
        id: data._id.toString(),
        alias: data.alias,
        url: data.url,
    };
}
