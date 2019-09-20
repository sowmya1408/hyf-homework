const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
];
function addSongToDatabase (song) {
     songDatabase.push(song);
     return songDatabase;
}

console.log(addSongToDatabase({songId: 5,title: "Love me like you do",artist: "Ellie Goulding"}));
console.log(addSongToDatabase({songId: 6,title: "Everyday in my dreams I see you",artist: "Celine Dion"}));
console.log(addSongToDatabase({songId: 7,title: "Adiga Adiga",artist: "Sid sriram"}));

function getSongByTitle (title) {
    for (let i = 0; i < songDatabase.length; i++) {   
      if (songDatabase[i].title.includes(title)) { // little fuzzy search
        // if (songDatabase[i].title === title) {  // works only when the whole string is equal
        return (songDatabase[i]);
    } 
 }
}

    // console.log(getSongByTitle('When is enough too'));
    // console.log(getSongByTitle('Adiga Adiga'));
 // console.log(getSongByTitle('Telusa Telusa'));
 const myPlaylist = []; 
 function addSongToMyPlaylist(title) {
        myPlaylist.push(getSongByTitle(title));      
 }
  
addSongToMyPlaylist('3 nails in wood');
addSongToMyPlaylist('My');
addSongToMyPlaylist('Love me');
console.log(myPlaylist);
