/* 
  You are given a sentence contains a story.

  Current it says 

  "I like dogs. One day I went to the park and I saw 10 dogs. It was a great day."

  Change the story using .replace() so that it says 

  "I like cats. One night I went to the park and I saw 100000 cats. It was a brilliant night."
*/

let story =
  "I like dogs. One day I went to the park and I saw 10 dogs. It was a great day.";

let result = story.replace(/dogs/g, 'cats'); //globally replaces word
result = result.replace('10', "100000"); // 10 string changes to 100000
result = result.replace(/day/g, 'night'); // global change
result = result.replace('great', "brilliant"); //single word replaced



// let chars = { "dogs": "cats", 10: 100000, "day": "night" };
//  result = story.replace(/[dogs][10][day]/g, (m) => chars[m]);
// //s = s.replace(/[abc]/g, (m) => chars[m]);
// console.log(result);

/* EXPECTED OUTPUT */

const util = require("util");

function test(test_name, actual, expected) {
  console.log("");
  let status;
  if (actual === expected) {
    status = "PASSED";
  } else {
    status = `FAILED: \nexpected: ${util.inspect(
      expected
    )} \nbut your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "1. Original story has not been changed",
  story,
  "I like dogs. One day I went to the park and I saw 10 dogs. It was a great day."
);

test(
  "2. The result of the replace is correct",
  result,
  "I like cats. One night I went to the park and I saw 100000 cats. It was a brilliant night."
);
