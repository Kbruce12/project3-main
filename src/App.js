import axios from 'axios';



function App() {
  const newUrl = 'https://api.lyrics.ovh/v1/father john misty/only son of the ladies man';
  axios({
    url: newUrl,
    method: 'GET',
    dataType: 'JSON'
  }).then((response) => {
    console.log(response.data.lyrics);
  })


  
  
  return (
    <div>
      <header>
        <div className='wrapper'>
          <h1>Lyric Generator</h1>
          <div className='title'>
            <p>Become the next Rock<span>⭐</span></p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
