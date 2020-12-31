const txtarea = document.getElementById('txtarea');
const playBtn = document.getElementById('play-btn');
const video = document.getElementById('video');
const wish = document.getElementById('wish');

video.pause();

let names = [];
let i=0;
let txt = '';
let fulltxt = '';
let isdeleting = false;
names = JSON.parse(txtarea.getAttribute('names'));

const init = () => {
  playBtn.classList.add('d-none');
  instructions.classList.add('d-none');
  wish.style.opacity = "100%";
  wish.style.height = "100%";
  setTimeout(wishScale,24000);
  toggleVideo();
  execute();
}

playBtn.addEventListener('click', init);

const toggleVideo = () => {
  if(video.paused)
    video.play();
}

const wishScale = () => {
  wish.classList.add('scaling');
}

const execute = () => {
  fulltxt = names[i];
  if(!fulltxt)
    return;
  if(isdeleting) 
  {
    txt = fulltxt.substring(0,txt.length-1);
  }
  else
  {
    txt = fulltxt.substring(0,txt.length+1);
  }
  txtarea.innerHTML = txt;
  if(txt.length == fulltxt.length)
  {
    isdeleting = true;
  }
  if(txt.length == 0)
  {
    i++;
    isdeleting = false;
  }
  if(isdeleting)
    setTimeout(execute,150);
  else
    setTimeout(execute,300);
}
