const birdImage = document.getElementById("imgOfTheBird");
const birdVideo = document.getElementById("videoOfTheBird");
const birdAudio = document.getElementById("audioOfTheBird");

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