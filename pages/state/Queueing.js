import { useState } from 'react';

export default function Counter() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number + 5); //render時に更新処理が走る。render時に値は5に更新。イベントハンドラ内では未更新。＝０
                setNumber(n => n + 1); //render時にfunctionを実行するよう処理が走る。5->6に更新。イベントハンドラ内では未更新＝０
                setNumber(42);　　　　//render時に更新処理が走る。render時に値は42に更新。イベントハンドラ内では未更新。＝０
            }}>Increase the number</button>
        </>
    )
}