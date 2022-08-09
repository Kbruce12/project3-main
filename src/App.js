import axios from 'axios';
import './App.css';


function App() {
  const newUrl = 'https://api.lyrics.ovh/v1/biffy clyro/folding stars';
  axios({
    url: newUrl,
    method: 'GET',
    dataType: 'JSON'
  }).then((response) => {
    console.log(response.data.lyrics);
  })









  // const lyricsGenerator =  () => {
  //   const url = new URL (`https://api.lyrics.ovh/v1/foo fighters/walk`);

  //   fetch(url)
  //   .then((response) => {
  //     return (response.json);
  //   })
  // }
  // lyricsGenerator();
  
  
  
  return (
    <div className="App">
    </div>
  );
}

export default App;
