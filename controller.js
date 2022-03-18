/* This file contains all the controller logic sitting between the
   backend and the front end.
 */

const IMAGES = {
  circle: "example-images/circle.png",
  eagle: "example-images/eagle.png",
  preview: "example-images/preview.png",
};

let userText = ""; // text user types will be saved here
let userTextSaved = false;
let userImg = null;
let noImageSelected = true;

/* Called via the generate button in the UI. */
function generateText() {
  if (noImageSelected) {
    alert("please upload an image or select an example image.");
  } else {
    /* get all settings */
    let height = parseInt(document.getElementById("height").value);
    let width = parseInt(document.getElementById("width").value);
    let keepSpaces = document.getElementById("keepSpaces").checked;

    /* get the text */
    let text = document.getElementById("textInput").value;

    /* get the selected image */
    let selectedImg = document.getElementById("imgPreview");

    /* create a new image element to put on the canvas*/
    let img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = selectedImg.src;

    /* makes sure the image is loaded before doing anything with it */
    img.onload = function () {
      let matrix = getMatrix(width, height, img);
      document.getElementById("output").innerText = formatText(
        matrix,
        text,
        keepSpaces
      );
    };
  }
}

/* Called by radio buttons over text box. Loads example text
 *  or saved user text. */
function setText(name) {
  let textarea = document.getElementById("textInput");

  /* if user is clicking off of user, save the text */
  if (userTextSaved !== true) {
    userText = textarea.value;
    userTextSaved = true;
  }

  /* load the appropriate text */
  if (name === "user") {
    textarea.value = userText;
    userTextSaved = false;
  } else if (name === "lorem") {
    textarea.value = TEXT.lorem;
  } else if (name === "declaration") {
    textarea.value = TEXT.declaration;
  }
}

/* called from the ondrop event handler, when a user uploads an image. */
function setUserImage(file) {
  let img = document.getElementById("imgPreview");
  let url = URL.createObjectURL(file);
  img.src = url;
  userImg = url;

  document.getElementById("userRadioImg").checked = true;
}

/* Called from the radio buttons above the preview image. */
function setPreviewImg(imgName) {
  noImageSelected = false;

  let imgTag = document.getElementById("imgPreview");
  if (imgName === "circle") {
    imgTag.src = IMAGES.circle;
  } else if (imgName === "eagle") {
    imgTag.src = IMAGES.eagle;
  } else if (imgName === "user") {
    if (userImg === null) {
      imgTag.src = IMAGES.preview;
      noImageSelected = true;
    } else {
      imgTag.src = userImg;
    }
  }
}

document.ondragover = function (event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = "copy";
};

document.ondrop = function (event) {
  event.preventDefault();

  let files = event.dataTransfer.files;
  setUserImage(files[0]);
};
