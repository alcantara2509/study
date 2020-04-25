// const numbers = {one: 1, two: 2, three: 3}

// // const showWhitFor = (obj) => {
// //   for (let i = 0; i < obj.length; i += 1) {
// //     console.log(obj[i]);
// //   }
// // };

// // showWhitFor(numbers);

// const showWithForEach = (obj) => {
//   return obj.forEach((number) => console.log(number))
// };

// showWithForEach(numbers)

const growingPlant = (upSpeed, downSpeed, desiredHeight) => Math.ceil((desiredHeight - downSpeed) / (upSpeed - downSpeed));

console.log(growingPlant(13, 2, 520))