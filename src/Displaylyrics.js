function Displaylyrics (props) {
    return (
        props.lyrics ? (
        <section className="wrapper lyrics">
            <div className="lyric-sheet">
                <h3>{props.artistInput}</h3>
                <p>{props.lyrics}</p>
            </div>
        </section>
        ) : null
    )
}

export default Displaylyrics;

