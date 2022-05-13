//
//Player
//

// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Definitions of the Video
const oneThirdArray = ["-FCYE87P5L0", "pYbUP6qkU7M", "mybsDDymrsc", "pKybkK2gj1U", "6a4BWpBJppI", "WX-lpEnIQQk", "thpTOAS1Vgg", "TtaDrUbsO30", "wUBrO83fTbY", "4K4b9Z9lSwc", "2_r4kDUzslg", "ZNcBZM5SvbY", "yphYFDJ4J4w", "a6JmCdDs_GM", "GhcY79E7am0"];

const oecArray = ["_qJEoSa3Ie0", "RWeyOyY_puQ", "VBbeuXW8Nko", "tyInv6RWL0Q", "cG7FkoNKBzI", "XznW8Ti6WWk"];

const yyxyArray = ["LIDe-yTxda0", "ziQaRGZVS1o", "BVVfMFS3mgc", "m5qwcYL8a0o", "UkY8HvgvBJ8", "tIWpr3tHzII"];

const otTwelveArray = ["AFJPFfnzZ7w", "846cjX0ZTrk", "XEOCbFJjRw0", "GEo5bmUKFvI", "b6li05zh3Kg", "zW-AIXAnLcE", "_EEo-iE5u_A", "tnpUv1Vj5MA"];

const projectsArray = [];

const videoArray = oneThirdArray.concat(oecArray, yyxyArray, otTwelveArray);

const useVideo = videoArray[Math.floor(Math.random() * videoArray.length)];

// This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "360",
    width: "640",
    videoId: useVideo,
    events: {
      onReady: onPlayerReady,
      onStateChange: randomizeVideo,
    },
  });
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// The API will call this function when the video ends.
function randomizeVideo(event) {
    if (event.data == YT.PlayerState.ENDED) {
        location.reload();
    }
}

//
// Button
//

const button = document.querySelector('button');
button.addEventListener("click", () => {location.reload()})