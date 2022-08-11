import axios from 'axios';
import { useState } from 'react';
import Header from './Header';
import Form from './Form';
import Displaylyrics from './Displaylyrics';



function App() {
  const [lyrics, setLyrics] = useState('');
  const [artistInput, setArtistInput] = useState('');
  const [songInput, setSongInput] = useState('');
  
  
  const newUrl = `https://api.lyrics.ovh/v1/${artistInput}/${songInput}`;
  
   const getLyrics = async () => {
    axios({
        url: newUrl,
        method: 'GET',
        dataType: 'JSON'
    }); 
    try {
      const response = await axios(newUrl);
      const apiData =  response;

      setLyrics(apiData.data.lyrics)
    } catch (error) {
      // setFormError(true);
    }
   }
   
   const handleSubmit = (e) => {
    e.preventDefault();
    getLyrics();
   }
   
  const handleArtistChange = (e) => {
    setArtistInput(e.target.value);
  }
  const handleSongChange = (e) => {
    setSongInput(e.target.value);
  }
   



  
  
  return (
    <div>
      <Header />
      <Form 
        handleSubmit={handleSubmit}
        handleArtistChange={handleArtistChange}
        handleSongChange={handleSongChange}
        artistInput={artistInput}
        songInput={songInput}
      />
      <Displaylyrics  
        artist={setArtistInput}
        lyrics={lyrics}
      />
    </div>
  );
}

export default App;
