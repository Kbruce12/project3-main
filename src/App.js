import axios from 'axios';



function App() {
  const newUrl = 'https://api.lyrics.ovh/v1/father john misty/Hollywood Forever Cemetery Sings';
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
      <section className='wrapper'>
        <form>
          <label>Artist Name:</label>
          <input type='text'/>
          <label>Song Name:</label>
          <input type='text'/>
          <button>Are those Vocals Ready!</button>
        </form>
      </section>
    </div>
  );
}

export default App;
