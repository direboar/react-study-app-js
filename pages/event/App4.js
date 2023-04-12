
function Button({ onSmash, children }) {
    return (
        <button onClick={onSmash}>
            {children}
        </button>
    )
}

function Toolbar({ onPlayMovie, onUplaodImage }) {
    return (
        <div>
            <Button onSmash={onPlayMovie}>
                Play Movie
            </Button>
            <Button onSmash={onPlayMovie}>
                Upload Image
            </Button>
        </div>
    )
}

export default function App() {
    return (
        <Toolbar onPlayMovie={() => { alert('Playing!') }} onUplaodImage={() => alert('Uploading!')} />
    )
}