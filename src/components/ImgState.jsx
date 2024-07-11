import React, { useState } from 'react';

function ImgState() {
    const [imageFirst, setImageFirst] = useState([
        "https://yt3.googleusercontent.com/9FLDvEwtAPg2ZIxe_dmKza6QWO7ktpCEiA9gQ4KsAF-q6J906vzOMBpfOKbMAZF5iRBy9PNOyzw=s900-c-k-c0x00ffffff-no-rj",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7U6qPDkREoJa7zM87Ytjff6p-V8w9MLnIfQ&s",
        "https://yt3.googleusercontent.com/9FLDvEwtAPg2ZIxe_dmKza6QWO7ktpCEiA9gQ4KsAF-q6J906vzOMBpfOKbMAZF5iRBy9PNOyzw=s900-c-k-c0x00ffffff-no-rj",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7U6qPDkREoJa7zM87Ytjff6p-V8w9MLnIfQ&s",
        "https://yt3.googleusercontent.com/9FLDvEwtAPg2ZIxe_dmKza6QWO7ktpCEiA9gQ4KsAF-q6J906vzOMBpfOKbMAZF5iRBy9PNOyzw=s900-c-k-c0x00ffffff-no-rj",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7U6qPDkREoJa7zM87Ytjff6p-V8w9MLnIfQ&s",
        "https://yt3.googleusercontent.com/9FLDvEwtAPg2ZIxe_dmKza6QWO7ktpCEiA9gQ4KsAF-q6J906vzOMBpfOKbMAZF5iRBy9PNOyzw=s900-c-k-c0x00ffffff-no-rj",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7U6qPDkREoJa7zM87Ytjff6p-V8w9MLnIfQ&s",
        "https://yt3.googleusercontent.com/9FLDvEwtAPg2ZIxe_dmKza6QWO7ktpCEiA9gQ4KsAF-q6J906vzOMBpfOKbMAZF5iRBy9PNOyzw=s900-c-k-c0x00ffffff-no-rj",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7U6qPDkREoJa7zM87Ytjff6p-V8w9MLnIfQ&s",
        "https://yt3.googleusercontent.com/9FLDvEwtAPg2ZIxe_dmKza6QWO7ktpCEiA9gQ4KsAF-q6J906vzOMBpfOKbMAZF5iRBy9PNOyzw=s900-c-k-c0x00ffffff-no-rj",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7U6qPDkREoJa7zM87Ytjff6p-V8w9MLnIfQ&s"
    ]);

    const [selection, setSelection] = useState(imageFirst[0]);

    const setImageFirsts = () => {
        var randomIndex = Math.floor(Math.random() * imageFirst.length);
        setSelection(imageFirst[randomIndex]);
    }

    return (
        <>
            <div><img src={selection} alt="" style={{ width: "200px", height: "200px" }} /></div>
            <button onClick={setImageFirsts}>Change</button>
        </>
    )
}

export default ImgState;
