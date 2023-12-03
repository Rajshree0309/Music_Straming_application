document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const playlist = document.getElementById('playlistList');
  
    playlist.addEventListener('click', function (e) {
      e.preventDefault();
      const target = e.target;
      if (target.tagName === 'A') {
        const songUrl = target.getAttribute('href');
        audioPlayer.src = songUrl;
        audioPlayer.play();
      }
    });
  });
  