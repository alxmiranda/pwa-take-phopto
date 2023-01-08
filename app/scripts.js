import { ImageCapture } from "image-capture";

var imageCapture;
var mediaStream;

var takePhotoButton = document.querySelector("button#takePhoto");
var img = document.querySelector("img");
var video = document.querySelector("video");

navigator.mediaDevices
  .getUserMedia({
    video: {
      facingMode: { exact: "environment" }
    }
  })
  .then(gotStream)
  .catch((error) => {
    console.log("getUserMedia error: ", error);
  });

function gotStream(stream) {
  mediaStream = stream;
  video.srcObject = stream;
  video.classList.remove("hidden");
  imageCapture = new ImageCapture(stream.getVideoTracks()[0]);
}

function takePhoto() {
  imageCapture
    .takePhoto()
    .then(function (blob) {
      video.classList.add("hidden");
      img.classList.remove("hidden");
      img.src = URL.createObjectURL(blob);
    })
    .catch(function (error) {
      alert("takePhoto() error: ", error);
    });
}

takePhotoButton.onclick = takePhoto;
