const cameras = ["assets/cam1.png", "assets/cam2.png"];
let currentCam = 0;

function switchCamera(direction) {
  currentCam = (currentCam + direction + cameras.length) % cameras.length;
  document.getElementById("cam-image").src = cameras[currentCam];
}
