function Displaylyrics (props) {
    return (
        <section className="wrapper lyrics">
            <div className="lyric-sheet">
                <h3>{props.setArtistInput}</h3>
                <p>{props.lyrics}</p>
            </div>
        </section>
    )
}

export default Displaylyrics;