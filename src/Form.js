function Form (props) {

    return (
            <section className='wrapper'>
                <form>
                    <label htmlFor="artist">Artist Name:</label>
                    <input type='text' id='artist' onChange={props.handleArtistChange} value={props.artistInput}/>
                    <label htmlFor="song">Song Name:</label>
                    <input type='text' id="song" onChange={props.handleSongChange} value={props.songInput}/>
                    <button onClick={props.handleSubmit}>Are those Vocals Ready!</button>
                    {props.formError ? <div className="error">
                                            <p>Opps we couldn't find those lyrics!!</p>
                                            <p>Check your spelling or Try someone less obscure hipster</p>
                                        </div> : null}
                </form>
            </section>
    ) 
}

export default Form;