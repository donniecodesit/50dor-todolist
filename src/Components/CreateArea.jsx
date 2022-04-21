import React, { useState } from "react";
import { Add } from "@mui/icons-material";
import { Fab } from "@mui/material";

export default function CreateArea({onAdd}) {
    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event) {
        const { name, value } = event.target;

        setNote((previous) => {
            return {
                ...previous,
                [name]: value
            }
        })
    }

    function submitNote(event) {
        event.preventDefault();
        onAdd(note);
        setNote({
            title: "",
            content: ""
        });
    }

    function expand() {
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && (<input type="text" name="title" placeholder="Title" onChange={handleChange} value={note.title} />)}
                <textarea name="content" rows={isExpanded ? "3" : "1"} placeholder="Type a note..." onClick={expand} onChange={handleChange} value={note.content} />
                <Fab onClick={submitNote}><Add /></Fab>
            </form>
        </div>
    )
}