document.addEventListener('DOMContentLoaded', function (event) {
  // array with texts to type in typewriter
  const dataText = [
    "Web Developer",
    "Python and Django Developer",
    "JAVA Developer",
    "Cyber Security",
    "Cloud Computing",
    "Open Source Contributor",];

  // type one text in the typewriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // check if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
      document.getElementById("typewriter-text").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback)
      }, 150);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 200);
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});
// document.addEventListener('DOMContentLoaded', function (event) {
//   // array with texts to type in typewriter
//   const dataText = [
//     "Web Developer",
//     "Python and Django Developer",
//     "JAVA Developer",
//     "Cyber Security",
//     "Cloud Computing",
//     "Open Source Contributor",
//   ];
//
//   // Select the HTML element where you want to display the text
//   const textElement = document.querySelector("h2");
//
//   // Initialize variables for tracking text and array index
//   let textIndex = 0;
//   let arrayIndex = 0;
//
//   function typeWriter() {
//     // Check if the array element exists
//     if (arrayIndex < dataText.length) {
//       const text = dataText[arrayIndex];
//
//       // Check if the text isn't finished yet
//       if (textIndex < text.length) {
//         // Add the next character to the textElement
//         textElement.innerHTML =
//           text.substring(0, textIndex + 1) + '<span aria-hidden="true"></span>';
//
//         // Wait for a while and call this function again for the next character
//         setTimeout(typeWriter, 150);
//         textIndex++;
//       } else {
//         // Text finished, move to the next array element
//         arrayIndex++;
//         // Clear the textElement
//         textElement.innerHTML = "";
//
//         // Call this function again after a timeout for the next text
//         setTimeout(StartTextAnimation, 700);
//       }
//     }
//   }
//
//   // Function to start the text animation
//   function StartTextAnimation() {
//     // Reset text and array index if we reach the end of the array
//     if (arrayIndex >= dataText.length) {
//       arrayIndex = 0;
//     }
//
//     // Start typewriter animation
//     typeWriter();
//   }
//
//   // Start the text animation when the DOM content is loaded
//   StartTextAnimation();
// });
