/* This file contains all the backend code to generate a matrix of RGBA
 *  values and trun it into a block of text. */

/* Returns a 2-dimensional array of RGBA pixel values */
function getMatrix(charX, charY, img) {
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");
  let width = (canvas.width = img.naturalWidth);
  let height = (canvas.height = img.naturalHeight);
  ctx.drawImage(img, 0, 0);

  /* calculate the height and width of the ASCII art */
  let cols = Math.floor(width / charX);
  let rows = Math.floor(height / charY);

  /* create an empyty matrix to store averge pixel values */
  let matrix = new Array(rows);
  for (let i = 0; i < rows; i++) {
    matrix[i] = new Array(cols);
  }

  /* this gets a 1-dimensional array of pixel values for the whole image */
  let imageData = ctx.getImageData(0, 0, img.naturalWidth, img.naturalHeight);

  /* for every slot in the matrix, put the average pixel value from the
   *  relevent section of the original image. */
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      matrix[row][col] = getAverageColor(
        col * charX,
        row * charY,
        charX,
        charY,
        imageData
      );
    }
  }

  return matrix;
}

/* takes the coordinates of a rectangle and an imgData object and returns
 *  an object containing the average color values of that rectangle. */
function getAverageColor(x, y, w, h, imgData) {
  let r = 0;
  let g = 0;
  let b = 0;
  let a = 0;

  /* truncate the width or height of the search area so we don't
   *  go out of bounds. */
  if (x + w > imgData.width) {
    w = imgData.width - x;
  }
  if (y + h > imgData.height) {
    h = imgData.height - y;
  }

  /* iterate over the given block */
  for (let i = x; i < x + w; i++) {
    for (let j = y; j < y + h; j++) {
      let pixel = (j * imgData.width + i) * 4;
      r += imgData.data[pixel];
      g += imgData.data[pixel + 1];
      b += imgData.data[pixel + 2];
      a += imgData.data[pixel + 3];
    }
  }

  let length = w * h;

  r = Math.floor(r / length);
  g = Math.floor(g / length);
  b = Math.floor(b / length);
  a = Math.floor(a / length);

  return { r: r, g: g, b: b, a: a };
}

/* debug function that just prints a simple ascii version of the matrix
 *  to the console. */
function logMatrix(matrix) {
  let logString = "";
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col].a > 127) {
        logString += "1";
      } else {
        logString += "0";
      }
    }
    logString += "\n";
  }

  console.log(logString);
}

/* takes the matrix and text and outputs a string that's the formatted text. */
function formatText(matrix, text, spacesKept) {
  let output = "";
  let textIndex = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      /* if the average alpha is less than half transparent */
      if (matrix[row][col].a < 127) {
        output += " ";
      } else {
        /* spin on unwanted characters */
        while (
          text[textIndex] === "\n" ||
          (!spacesKept && text[textIndex] === " ")
        ) {
          textIndex++;
        }
        /* if we've run out of text, put down a default symbol */
        if (textIndex >= text.length) {
          output += "*";
        } else {
          output += text[textIndex];
          textIndex++;
        }
      }
    }
    output += "\n";
  }

  return output;
}
