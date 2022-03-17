/* This file contains all the backend code to generate a matrix of RGBA
*  values and trun it into a block of text. */

/* Returns a 2-dimensional array of RGBA pixel values */
function getMatrix(charX, charY, img) {

    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var width = canvas.width = img.naturalWidth;
    var height = canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0);

    /* calculate the height and width of the ASCII art */
    var cols = Math.floor(width/charX);
    var rows = Math.floor(height/charY);

    /* create an empyty matrix to store averge pixel values */
    var matrix = new Array(rows);
    for (var i = 0; i < rows; i++) {
        matrix[i] = new Array(cols);
    }

    /* this gets a 1-dimensional array of pixel values for the whole image */
    var imageData = ctx.getImageData(0, 0 , img.naturalWidth, img.naturalHeight);

    /* for every slot in the matrix, put the average pixel value from the
    *  relevent section of the original image. */
    for (var col = 0; col < cols; col++) {
        for (var row = 0; row < rows; row++) {
            var rgba = getAverageColor(col * charX, row * charY, charX, charY, imageData);
            matrix[row][col] = rgba;
        }
    }

    return matrix;
}

/* takes the cooridinates of a rectangle and an imgData object and returns
*  an object containing the average color values of that rectangle. */
function getAverageColor(x, y, w, h, imgData) {
    var r = 0;
    var g = 0;
    var b = 0;
    var a = 0;

    /* truncate the width or height of the search area so we don't
    *  go out of bounds. */
    if (x + w > imgData.width) {
        w = imgData.width - x;
    }
    if (y + h > imgData.height) {
        h = imgData.height - y;
    }

    /* iterate over the given block */
    for (var i = x; i < x + w; i++) {
        for (var j = y; j < y + h; j++) {
            var pixel = ((j*imgData.width) + i) * 4;
            r += imgData.data[pixel];
            g += imgData.data[pixel+1];
            b += imgData.data[pixel+2];
            a += imgData.data[pixel+3];
        }
    }

    var length = w * h;

    r = Math.floor(r / length);
    g = Math.floor(g / length);
    b = Math.floor(b / length);
    a = Math.floor(a / length);


    return { r: r, g: g, b: b, a: a};
}

/* debug function that just prints a simple ascii version of the matrix
*  to the console. */
function logMatrix(matrix) {
    var logstring = "";
    for (var row = 0; row < matrix.length; row++) {
        for (var col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col].a > 127) {
                logstring += "1";
            } else {
                logstring += "0";
            }
        }
        logstring += "\n";
    }

    console.log(logstring);
}

/* takes the matrix and text and outputs a string that's the formatted text. */
function formatText(matrix, text, spacesKept) {
    var output = "";
    var textIndex = 0;

    for (var row = 0; row < matrix.length; row++) {
        for (var col = 0; col < matrix[row].length; col++) {
            /* if the average alpha is less than half transparent */
            if (matrix[row][col].a < 127) {
                output += " ";
            } else {
                /* spin on unwanted characters */
                while (text[textIndex] === "\n" || (!spacesKept && text[textIndex] === " ")) {
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





