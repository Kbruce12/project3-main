function Displaylyrics ({lyrics, songInput, artistInput}) {
    return (
        lyrics ? (
        <section className="wrapper lyrics">
            <div className="lyric-sheet">
                <h3 className="artist">{songInput}</h3>
                <p>{lyrics}</p>
                <h3 className="song">{artistInput}</h3>
            </div>
        </section>
        ) : null
    )
}

export default Displaylyrics;

