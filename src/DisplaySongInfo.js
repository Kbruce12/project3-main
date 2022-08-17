
function DisplaySongInfo ({artistInput, songInput}) {
    return (    
        <div className="display-artist">
            <h3 className="artist">{songInput}</h3>
            <h3 className="song">{artistInput}</h3>
        </div>
    )
}

export default DisplaySongInfo;