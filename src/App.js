import axios from 'axios';
import { useState } from 'react';
import Header from './Header';
import Form from './Form';
import Displaylyrics from './Displaylyrics';
import Footer from './Footer';
import LoadingScreen from './LoadingScreen';
import DisplaySongInfo from './DisplaySongInfo';




function App() {
  // create state for all items needed in app
  const [lyrics, setLyrics] = useState('');
  const [artistInput, setArtistInput] = useState('');
  const [songInput, setSongInput] = useState('');
  const [formError, setFormError] = useState('');
  const [loadingScreen, setLoadingScreen] = useState(false);
 

  
  // Make an axios call once form has been submitted
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
   // Function to handle submit
   const handleSubmit = (e) => {
    e.preventDefault();
    getLyrics();
    // setSongInput('');
    // setArtistInput('');
   }
  // holds artist input value 
  const handleArtistChange = (e) => {
    setArtistInput(e.target.value);
  }
  // holds song input value
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
            songInput={songInput}
            artistInput={artistInput}
          /> : <LoadingScreen />
        }

      </main>
      <Footer />
    </div>
  );
}

export default App;
