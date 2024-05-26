const birdImage = document.getElementById("imageOfBird");
const birdVideo = document.getElementById("videoOfBird");
const birdAudio = document.getElementById("audioOfBird");

birdImage.addEventListener("click", () => {
    birdImage.style.display = 'none';
    birdVideo.style.display = 'block';

    birdVideo.play();
    birdAudio.play();

    birdVideo.onended = () => {
      birdVideo.style.display = 'none';
      birdAudio.pause();
      birdAudio.currentTime = 0;
      birdImage.style.display = 'block';
    };
});