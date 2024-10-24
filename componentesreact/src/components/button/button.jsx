import React from "react";

export default function ButtonComponent(props) {
    return(
        <button
        style={{
            backgroundColor: props.color,
            color: props.color === "black" ? "white" : "black",
            fontSize: "2rem",
            padding: "1rem",
            borderRadius: "24px"
        }}
        onClick={(props.onClick)}
        >
            {props.children}
        </button>
    )
}