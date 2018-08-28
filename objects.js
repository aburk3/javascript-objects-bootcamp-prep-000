var playlist = { Howard: 'promises' }

function updatePlaylist(obj, key, value) {
  obj[key] = value
  return playlist
}
//updatePlaylist(playlist, 'qty', 'Rodeo')


function removeFromPlaylist(obj, key) {
  delete obj.key
  return playlist
}

