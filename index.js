//variables//
let numberOfSongs = 0;
let audioElement = new Audio('songs/allwe.mp3');
let masterPlay = document.getElementById('play');
let gif = document.getElementById('gif');
let nameChange = document.getElementById('namesChange');
let progressBar = document.getElementById('progress');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName : "Am I Dreaming", file : "songs/1.mp3", cover : "cover/10.png"},
    {songName : "All We Know", file : "songs/2.mp3", cover : "cover/2.jpg"},
    {songName : "Never Know", file : "songs/3.mp3", cover : "cover/3.jpg"},
    {songName : "Ritual", file : "songs/4.mp3", cover : "cover/4.jpg"},
    {songName : "To U", file : "songs/5.mp3", cover : "cover/5.jpg"},
    {songName : "Beautiful Now", file : "songs/6.mp3", cover : "cover/6.jpg"},
    {songName : "Burning Out", file : "songs/7.mp3", cover : "cover/7.jpg"},
    {songName : "Where Are You Now", file : "songs/8.mp3", cover : "cover/8.jpg"},
    {songName : "Heat Waves", file : "songs/9.mp3", cover : "cover/9.jpg"},
    {songName : "Self Love", file : "songs/10.mp3", cover : "cover/10.png"}
];

songItem.forEach((elements,i) => {
   elements.getElementsByTagName("img")[0].src = songs[i].cover;
   elements.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click', ()=>{
     if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play(); 
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
     }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
     }
})

//events//
audioElement.addEventListener('timeupdate', () =>{
    let progress = parseInt((audioElement.currentTime/ audioElement.duration)*100);
    progressBar.value = progress;
})

progressBar.addEventListener('change', ()=>{
    audioElement.currentTime= progressBar.value * audioElement.duration/100;
})

const allplay = () =>{
Array.from(document.getElementsByClassName('items')).forEach((elements) =>{
    elements.classList.remove('fa-pause-circle');
    elements.classList.add('fa-circle-play');
})
}


Array.from(document.getElementsByClassName('items')).forEach((elements) => {
     elements.addEventListener('click', (e) =>{
        allplay();
        numberOfSongs = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${numberOfSongs+1}.mp3`;
        nameChange.innerText = songs[numberOfSongs].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
     })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(numberOfSongs>=9){
        numberOfSongs = 0;
    }else{
        numberOfSongs += 1;
    }
    audioElement.src = `songs/${numberOfSongs+1}.mp3`
    nameChange.innerText = songs[numberOfSongs].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(numberOfSongs<=0){
        numberOfSongs = 0;
    }else{
        numberOfSongs -= 1;
    }
    audioElement.src = `songs/${numberOfSongs+1}.mp3`;
    nameChange.innerText = songs[numberOfSongs].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');
})