import { useState } from "react";

export default function Picture() {
    let [status, setStatus] = useState("normal")

    return (
        <div className={status === "emphasis" ? "background" : "background background--active"}>
            <img
                className={status === "emphasis" ? "picture--active" : "picture"}
                alt="Rainbow houses in Kampung Pelangi, Indonesia"
                src="https://i.imgur.com/5qwVYb1.jpeg"
                onClick={() => {
                    setStatus(status === "normal" ? "emphasis" : "normal")
                }}
            />
        </div >
    );
}


