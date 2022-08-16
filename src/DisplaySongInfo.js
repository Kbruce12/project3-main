function DisplaySongInfo (props) {
    return (    
        <div className="display-artist">
            <h3 className="artist">{props.artistInput}</h3>
            <p className="song">{props.songInput}</p>
        </div>
    )
}

export default DisplaySongInfo;