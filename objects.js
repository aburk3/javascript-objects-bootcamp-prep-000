var playlist = { Howard: 'Promises' }

function updatePlaylist(obj, key, value) {
  obj[key] = value
  return playlist
}

updatePlaylist(playlist, 'QTY', 'Rodeo')