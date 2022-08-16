function Displaylyrics (props) {
    return (
        props.lyrics ? (
        <section className="wrapper lyrics">
            <div className="lyric-sheet">
                <p>{props.lyrics}</p>
            </div>
        </section>
        ) : null
    )
}

export default Displaylyrics;

