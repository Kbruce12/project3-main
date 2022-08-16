import axios from 'axios';
import { useState } from 'react';
import Header from './Header';
import Form from './Form';
import Displaylyrics from './Displaylyrics';
import DisplaySongInfo from './DisplaySongInfo';
import Footer from './Footer';
import LoadingScreen from './LoadingScreen';




function App() {
  const [lyrics, setLyrics] = useState('');
  const [artistInput, setArtistInput] = useState('');
  const [songInput, setSongInput] = useState('');
  const [formError, setFormError] = useState('');
  const [loadingScreen, setLoadingScreen] = useState(false);

  
  
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

      setLoadingScreen(true); 
      setLyrics(apiData.data.lyrics)
      setFormError(false);
    } catch (error) {
      setFormError(true);
    }
   }
   
   const handleSubmit = (e) => {
    e.preventDefault();
    getLyrics();
    setSongInput('');
    setArtistInput('');
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
      <main>
        <Form 
          handleSubmit={handleSubmit}
          handleArtistChange={handleArtistChange}
          handleSongChange={handleSongChange}
          artistInput={artistInput}
          songInput={songInput}
          formError={formError}
          />
        {
          loadingScreen ?
          <Displaylyrics  
            lyrics={lyrics}
            song={songInput}
            artisit={artistInput}
          /> : <LoadingScreen />
        }  
      </main>
      <Footer />
    </div>
  );
}

export default App;
