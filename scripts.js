//create favMovie function
let favMovie = (name = "Tommy Wiseau", movie = "The Room") =>
  console.log(`My name is ${name}, and my favorite movie is ${movie}`);
//call favMovie
favMovie();
//call favMovie with custom params
favMovie("L3p", "The Boondock Saints");
//create getFirstName function
let getFirstName = (name = "Tommy Wiseau") => {
  const firstName = name.split(" ");
  return console.log(firstName[0]);
};
