export default function Avatar() {
    const avatar = "https://i.imgur.com/7vQD0fPs.jpg"

    const description = "Gregprop Y. Zara"
    return (
        <img
            className="avatar"
            src={avatar}
            alt={description}>
        </img>
    )
}