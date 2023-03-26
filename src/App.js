import { useState,useEffect} from 'react';

function App() {
  const [prev,newstate]=useState();
  const [oldauth,newauth]=useState("");
  const [oldcolor,newcolor]=useState("");
  function changecolor(){
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    newcolor(randomColor);
    document.body.style.background =randomColor;
    }

    async function fetchquote(){
      const response=await fetch('https://api.quotable.io/random');
      const data=await response.json();
      console.log(data);
      newstate(data.content)
      newauth(data.author)
    }
    function goto(){
      window.location.href="https://twitter.com/intent/tweet";
    }
    function handle() {
      fetchquote();
      changecolor();
    }
    useEffect(() => {
      fetchquote();
      changecolor();
      console.log('this')
     },[newauth,newstate,newcolor]);

  return (
<div className='App'>
    <div id="text">
    <i class="bi bi-quote first"></i>
    <p class="talk">{prev}</p>
  </div>
  <div id="author">
    <i class="bi bi-activity byme"></i>
    <p class="auth">{oldauth}</p>
  </div>
    <div id="tweet-quote">
      <button type="button" class="btn btn-primary" onClick={goto} style={{background:oldcolor}} ><i class="bi bi-twitter"></i></button>
    </div>
    <div id="new-quote">
    <button type="button" class="btn btn-primary" id="newquo" onClick={handle} style={{background:oldcolor}}>new quote</button>
  </div>
  </div>
  );
  }

export default App;
