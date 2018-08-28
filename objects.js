var playlist = { Howard: 'Promises' }

function updatePlaylist(obj, key, value) {
  obj[key] = value
  return playlist
}

updatePlaylist(playlist, 'qty', 'Rodeo')


function removeFromPlaylist(obj, 'qty') {
  delete obj.qty
  return playlist
}

