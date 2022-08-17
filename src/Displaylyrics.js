function Displaylyrics ({lyrics, songInput, artistInput}) {
    return (
        lyrics ? (
        <section className="wrapper lyrics">
            <div className="lyric-sheet">
                <p>{lyrics}</p>
                <h3 className="song">{songInput} by {artistInput}</h3>
            </div>
        </section>
        ) : null
    )
}

export default Displaylyrics;

