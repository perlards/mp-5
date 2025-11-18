"use client";
import { Textarea } from "@mui/joy";
import { Button, FormHelperText, TextField } from "@mui/material";
import { useState } from "react";
import createNewLink from "@/lib/createNewLink";
import {LinkProps} from "@/types/LinkProps";
import LinkPreview from "./LinkPreview";

export default function NewLinkForm({append}:{append: (post: LinkProps) => void}) {
    const [alias, setAlias] = useState("");
    const [url, setUrl] = useState("");
    const [newLink, setNewLink] = useState<LinkProps | null>(null);
    const [error, setError] = useState<string>("");

    return (
        <form className="w-96 rounded-xl p-4 bg-pink-800-400"
              onSubmit ={
                  async(event) =>
                  {
                      event.preventDefault();
                      setError("");
                      setNewLink(null);

                      createNewLink(url,alias)
                          .then((link) => { append(link);
                          setNewLink(link); })
                          .catch((e)=> {console.log("this error occurred: "+ e);
                              setError("Duplicate alias, pick a new name.");
                          });
                  }

              }>

            <TextField
                variant="filled"
                sx={{ backgroundColor: "white", width: "100%" }}
                label="Alias"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
            />

            <Textarea
                sx={{
                    padding: "0.5rem",
                    height: "100px",
                    width: "100%",
                    borderRadius: 0,
                }}
                variant="soft"
                placeholder="Full URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />

            <FormHelperText>Enter alias and URL</FormHelperText>

            <div className="w-full flex justify-center">
                <Button
                    sx={{ width: "80px" }}
                    variant="contained"
                    type="submit"
                    disabled={alias === "" || url === ""}
                >
                    shorten
                </Button>
            </div>
            {error && <p className="text-red-600 mt-2">{error}</p>}


        </form>
    );
}
