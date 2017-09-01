function initialize() {
  // create an array of 16 matching pairs

  // initializes variables for this function;
  var colors, arr, arrRand, boxHash;
  colors = ["lightred", "darkred", "lightblue", "darkblue", "lightgreen", "darkgreen", "lightpurple", "darkpurple"];
  arr = [];
  arrRand = [];
  hash = {};

  // By hand #1
  // Very slow, pron to user typos, and no flexibility
  // arr = ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6", "7", "7", "8", "8"];

  // By hand #2
  // Much faster, but no flexibility
  // arr = "1122334455667788".split("");

  // Using Compound loops.
  // Has a default length of 8 matching pair, but can be changed using arguments and easily reused.
  // This is the best answer for long term flexibility and reuse.
  function createArray(num = 8) {
    for (i = 0 ; i < num ; i++) {
      for (j = 0 ; j < 2 ; j++) {
        arr.push(i);
      };
    };
    return arr;
  };

  // Creates an array of a designated length and returns a randomized version the entries.
  // This answer provides flixibility and reuse.
  function arrRandom(num = 16) {
    while (arrRand.length < 16) {
      var rand = Math.floor(Math.random() * num);
      arrRand.includes(rand) ? rand : arrRand.push(rand);
    };
    return arrRand;
  };

  function boxHash(num = 16) {
    for (i = 0 ; i < num ; i++) {
      var box = "box" + (i + 1);
      hash[box] = { rand: arrRand[i], arr: arr[i], color: colors[arr[i]] };
    };
  };

  createArray();
  arrRandom();
  boxHash();

  return hash;
}


var response = initialize();
console.log(response);
