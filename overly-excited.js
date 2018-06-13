// *********** OPTION 1 *****************

var sentence = [
  "I",
  "am",
  "very",
  "excited",
  "to",
  "be",
  "in",
  "this",
  "class"
];

var addExcitement = function(theWordArray) {
  var output = "";
  var exclamationNum = 1;
  for (var i = 0; i < theWordArray.length; i++) {
    output += " " + theWordArray[i];
    if ((i + 1) % 3 === 0) {
      for (var j = 0; j < exclamationNum; j++) {
        output += "!";
      }
      exclamationNum++;
    }
    console.log(output);
  }
};

addExcitement(sentence);

// *********** OPTION 2 *****************

// var sentence = [
//   "I",
//   "am",
//   "very",
//   "excited",
//   "to",
//   "be",
//   "in",
//   "this",
//   "class"
// ];
// var exc = "!";
// function addExcitement(theWordArray) {
//   var output = "";
//   for (var i = 0; i < theWordArray.length; i++) {
//     if (i === 0) {
//       output = theWordArray[i] + " ";
//       console.log(output);
//     } else if ((i + 1) % 3 === 0) {
//       output += theWordArray[i] + exc.repeat((i + 1) / 3) + " ";
//       console.log(output);
//     } else {
//       output += theWordArray[i] + " ";
//       console.log(output);
//     }
//   }
// }

// addExcitement(sentence);
