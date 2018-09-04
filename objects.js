var playlist = { RB: 'Chris Brown'};
function updatePlaylist(playlist, artistName, songTitle){
  
  playlist['Slowdive'] = 'Alison'
  playlist['My Bloody Valentine'] = 'Sometimes'
  playlist['Phil Ochs'] = "Here's to the State of Mississippi"

}
function removeFromPlaylist(playlist, songTitle){
  delete playlist['Slowdive'];
}