/**
 * MediaStream ImageCapture polyfill
 *
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let e=window.ImageCapture;var t;void 0===e&&(e=class{constructor(e){if("video"!==e.kind)throw new DOMException("NotSupportedError");this._videoStreamTrack=e,"readyState"in this._videoStreamTrack||(this._videoStreamTrack.readyState="live"),this._previewStream=new MediaStream([e]),this.videoElement=document.createElement("video"),this.videoElementPlaying=new Promise((e=>{this.videoElement.addEventListener("playing",e)})),HTMLMediaElement?this.videoElement.srcObject=this._previewStream:this.videoElement.src=URL.createObjectURL(this._previewStream),this.videoElement.muted=!0,this.videoElement.setAttribute("playsinline",""),this.videoElement.play(),this.canvasElement=document.createElement("canvas"),this.canvas2dContext=this.canvasElement.getContext("2d")}get videoStreamTrack(){return this._videoStreamTrack}getPhotoCapabilities(){return new Promise((function(e,t){const n={current:0,min:0,max:0};e({exposureCompensation:n,exposureMode:"none",fillLightMode:"none",focusMode:"none",imageHeight:n,imageWidth:n,iso:n,redEyeReduction:!1,whiteBalanceMode:"none",zoom:n}),t(new DOMException("OperationError"))}))}setOptions(e={}){return new Promise((function(e,t){}))}takePhoto(){const e=this;return new Promise((function(t,n){if("live"!==e._videoStreamTrack.readyState)return n(new DOMException("InvalidStateError"));e.videoElementPlaying.then((()=>{try{e.canvasElement.width=e.videoElement.videoWidth,e.canvasElement.height=e.videoElement.videoHeight,e.canvas2dContext.drawImage(e.videoElement,0,0),e.canvasElement.toBlob(t)}catch(e){n(new DOMException("UnknownError"))}}))}))}grabFrame(){const e=this;return new Promise((function(t,n){if("live"!==e._videoStreamTrack.readyState)return n(new DOMException("InvalidStateError"));e.videoElementPlaying.then((()=>{try{e.canvasElement.width=e.videoElement.videoWidth,e.canvasElement.height=e.videoElement.videoHeight,e.canvas2dContext.drawImage(e.videoElement,0,0),t(window.createImageBitmap(e.canvasElement))}catch(e){n(new DOMException("UnknownError"))}}))}))}}),window.ImageCapture=e;var n=document.querySelector("button#takePhoto"),i=document.querySelector("img"),o=document.querySelector("video");navigator.mediaDevices.getUserMedia({video:{facingMode:{exact:"environment"}}}).then((function(n){n,o.srcObject=n,o.classList.remove("hidden"),t=new e(n.getVideoTracks()[0])})).catch((e=>{console.log("getUserMedia error: ",e)})),n.onclick=function(){t.takePhoto().then((function(e){o.classList.add("hidden"),i.classList.remove("hidden"),i.src=URL.createObjectURL(e)})).catch((function(e){alert("takePhoto() error: ",e)}))};
//# sourceMappingURL=index.f0ba54f1.js.map
