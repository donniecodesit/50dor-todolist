import React from "react";
import { Delete } from "@mui/icons-material";

export default function Note({title, content, onDelete, id}) {
    function handleClick() {
        onDelete(id);
    }

    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={handleClick}>
                <Delete />
            </button>
        </div>
    )
}