function trafficLight(color) {
    let message = "";
switch (color) {
    case "red":
      message = "stop";
      break;
    case "orange":
      message = "carefull";
      break;
    case "green":
      message = "go";
      break;
    case "blue":
    case "purple":
    case "axew":
      message = "color invalid";
      break;
    default:
      message = "please insert color";
      break;
  }
  return message;
}
// TEST CASE
console.log(trafficLight("red")) // stop
console.log(trafficLight("orange")) // careful
console.log(trafficLight("green")) // go
console.log(trafficLight("blue")) // color invalid
console.log(trafficLight("purple")) // color invalid
console.log(trafficLight("axew")) // color invalid
console.log(trafficLight("")) // please insert color