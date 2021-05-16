/* ========================================== Youtube API ========================================== */

// https://developers.google.com/youtube/iframe_api_reference

// loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player)
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: 'auto',
        width: 'auto',
        videoId: 'fEeCb-2vuzA',
        playerVars: {
            'playsinline': 1,
            'controls': 1,
            'loop': 1,
            'modestbranding': 1,
            'rel': 0,
            'showinfo': 0
        },
        events: {
        'onReady': onPlayerReady,
        'onError': onPlayerError,
        'onStateChange': onPlayerStateChange
        }
    });
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
    document.getElementById('player').style.display = 'none';
    player.setShuffle(true);
    player.unMute(); // if muted
}

// The API will call this function when the video player has an error.
function onPlayerError(event) {
    window.open(player.getVideoUrl(), '_blank');
    // console.log(event);
    player.nextVideo();
    player.pauseVideo();
}

// The API will call this function when the video player changes state.
function onPlayerStateChange(event) {
    switch (event.target.getPlayerState()) {
        // if playing move to player
        case 2:
            location.href = '#player';
            break;
    }
}

/* ========================================== Website Functionality ========================================== */

function togglePlayer() {
    // display  and play video
    player.playVideo();
    document.getElementById('player').style.display = 'block';
    document.getElementsByClassName('container')[0].style.display = 'block';
}