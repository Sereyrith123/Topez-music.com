let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
   {
     name: " ava max salt",
     path: "0.Ava Max - Salt (Lyrics).mp3",
     img: "img1.jpg",
     singer: "Ava Max"
   },
   {
     name: "dhruv - double take",
     path: "0.dhruv - double take (Official Video).mp3",
     img: "img2.jpg",
     singer: "2"
   },
   {
     name: "Lil Nas X - Industry Baby",
     path: "0.Lil Nas X - Industry Baby (Lyrics) ft. Jack Harlow.mp3",
     img: "img3.jpg",
     singer: "Lil Nas x"
   },
   {
     name: "0.Nathan Evans - Wellerman",
     path: "0.Nathan Evans - Wellerman (Sea Shanty).mp3",
     img: "img4.jpg",
     singer: "Nathan Evan"
   },
   {
     name: "Pink Sweat$ - At My Worst",
     path: "0.Pink Sweat$ - At My Worst (Lyrics).mp3",
     img: "img5.jpg",
     singer: "Pink Sweat$"
   },
   {
	name: "Lil Nas X - MONTERO (Call Me By Your Name)",
	path: "1.Lil Nas X - MONTERO (Call Me By Your Name) (Lyrics).mp3",
	img: "img1.jpg",
	singer: "Lil Nas X"
  },
  {
	name: "Post Malone, Swae Lee - Sunflower (Spider-Man- Into the Spider-Verse)",
	path: "2.Post Malone, Swae Lee - Sunflower (Spider-Man- Into the Spider-Verse).mp3",
	img: "img4.jpg",
	singer: "Post Malone Swae Lee"
  },
  {
	name: "Ali Gatie - It's You",
	path: "3.Ali Gatie - It's You (Official Lyrics Video).mp3",
	img: "img5.jpg",
	singer: "Ali Gatie"
  },
  {
	name: "Lewis Capaldi - Before You Go",
	path: "3Lewis Capaldi - Before You Go (Lyrics).mp3",
	img: "img2.jpg",
	singer: "Lewis Capaldi"
  },
  {
	name: "ruth b. - dandelions",
	path: "4.ruth b. - dandelions __ lyrics.mp3",
	img: "img5.jpg",
	singer: "ruth b."
  },
  {
	name: "Naughty Boy, Sam Smith - La la la",
	path: "4Naughty Boy, Sam Smith - La la la (Lyrics).mp3",
	img: "img3.jpg",
	singer: "Naughty Boy, Sam Smith "
  },
  {
	name: "Alec Benjamin - Let Me Down Slowly",
	path: "5. Alec Benjamin - Let Me Down Slowly (Lyrics).mp3",
	img: "img5.jpg",
	singer: "Alec Benjamin "
  },
  {
	name: "Sam Smith - Fire on Fire",
	path: "6. Fire on fire (lyrics) - SAM SMITH.mp3",
	img: "img5.jpg",
	singer: "Sam Smith"
  },
  {
	name: "Anne-Marie & Niall Horan - Our Song ",
	path: "6Anne-Marie & Niall Horan - Our Song [Official Video].mp3",
	img: "img1.jpg",
	singer: "Anne-Marie & Niall Horan"
  },
  {
	name: "Passenger - Let Her Go",
	path: "6.Passenger - Let Her Go (Lyrics) 🎵.mp3",
	img: "img2.jpg",
	singer: "Passenger"
  },
  {
	name: "Gryffin - Tie Me Down",
	path: "7.Gryffin - Tie Me Down (Lyrics) ft. Elley Duhé.mp3",
	img: "img5.jpg",
	singer: "Gryffin"
  },
  {
	name: "Calum Scott - Biblical",
	path: "8.Calum Scott - Biblical (Lyrics).mp3",
	img: "img5.jpg",
	singer: "Calum Scott"
  },
  {
	name: "Jordan Clarke - freaks",
	path: "8.Jordan Clarke - freaks (lyric).mp3",
	img: "img5.jpg",
	singer: "Jordan Clarke"
  },
  {
	name: "Niall Horan - Slow Hands",
	path: "9.Niall Horan - Slow Hands (Lyric Video).mp3",
	img: "img3.jpg",
	singer: "Niall Horan"
  },
  {
	name: "Ali Gatie - Moonlight",
	path: "Ali Gatie - Moonlight (Lyrics _ Lyric Video).mp3",
	img: "img2.jpg",
	singer: "Ali Gatie - Moonlight"
  },
  {
	name: "Demons - Imagine Dragons",
	path: "Demons - Imagine Dragons (Lyrics).mp3",
	img: "img1.jpg",
	singer: "Imagine Dragons"
  },
  {
	name: "Griff - Black Hole",
	path: "Griff - Black Hole (Official Lyric Video).mp3",
	img: "img5.jpg",
	singer: "Griff"
  },
  {
	name: "DJ Snake ft. Justin Bieber - Let Me Love You",
	path: "DJ Snake ft. Justin Bieber - Let Me Love You [Lyric Video].mp3",
	img: "img5.jpg",
	singer: "DJ Snake ft. Justin Bieber"
  },
  {
	name: "Ellie Goulding - Love Me Like You Do",
	path: "Ellie Goulding - Love Me Like You Do (Lyrics).mp3",
	img: "img3.jpg",
	singer: "Ellie Gloulding"
  },
  {
	name: "Imagine Dragons - Bad Liar",
	path: "Imagine Dragons - Bad Liar (Lyrics).mp3",
	img: "img3.jpg",
	singer: "Imagine Dragons"
  },
  {
	name: "Imagine Dragons - Wrecked",
	path: "Imagine Dragons - Wrecked (Lyric Video).mp3",
	img: "img5.jpg",
	singer: "Imagine Dragons"
  },
  {
	name: "JORDY - Till It Hurts",
	path: "JORDY - Till It Hurts [Official Video].mp3",
	img: "img5.jpg",
	singer: "JORDY"
  },
  {
	name: "Josh Turner - Your Man",
	path: "Josh Turner - Your Man (Official Music Video).mp3",
	img: "img5.jpg",
	singer: "Josh Turner"
  },
  {
	name: "Lewis Capaldi - Someone You Loved",
	path: "Lewis Capaldi - Someone You Loved (Lyrics).mp3",
	img: "imm.jpg",
	singer: "Lewis Capaldi"
  },
  {
	name: "Lil Tecca - Ransom ",
	path: "Lil Tecca - Ransom (Lyrics).mp3",
	img: "img5.jpg",
	singer: "5"
  },
  {
	name: "Logic - 1-800-273-8255 ft. Alessia Cara & Khalid",
	path: "Logic - 1-800-273-8255 ft. Alessia Cara & Khalid (Official Audio).mp3",
	img: "img7.jpg",
	singer: "Logic  ft. Alessia Cara & Khalid"
  },
  {
	name: "Luh Kel - Wrong ",
	path: "Luh Kel - Wrong (Official Music Video).mp3",
	img: "img6.jpg",
	singer: "Luh Kel"
  },
  {
	name: "NEFFEX - Scars",
	path: "NEFFEX - Scars (Official Lyric Video).mp3",
	img: "img5.jpg",
	singer: "NEFFEX"
  },
  {
	name: "Olivia Rodrigo - traitor",
	path: "Olivia Rodrigo - traitor (Lyrics).mp3",
	img: "img5.jpg",
	singer: "Olivia Rodrigo"
  },
  {
	name: "One Direction - Night Changes ",
	path: "One Direction - Night Changes (Lyrics).mp3",
	img: "img3.jpg",
	singer: "One Direction"
  },
  {
	name: "Someone You Like - Plance Animatic",
	path: "Someone You Like - Plance Animatic.mp3",
	img: "Someone You Like - Plance Animatic.mp3",
	singer: "Someone You Like - Plance Animatic"
  },
  {
	name: "The Kid LAROI, Justin Bieber - Stay ",
	path: "The Kid LAROI, Justin Bieber - Stay (Lyrics).mp3",
	img: "img5.jpg",
	singer: "The Kid LAROI, Justin Bieber"
  },
  {
	name: "The Untamed (無羈) - Official Audio (OST) - 2020 Special Ver by XiaoZhan 肖戰 _ WangYibo 王一博",
	path: "The Untamed (無羈) - Official Audio (OST) - 2020 Special Ver by XiaoZhan 肖戰 _ WangYibo 王一博.mp3",
	img: "img4.jpg",
	singer: "XiaoZhan 肖戰 _ WangYibo 王一博"
  },

];


// All functions


// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#148F77";
	}
}


function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }