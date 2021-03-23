//create favMovie function
let favMovie = (name = "Tommy Wiseau", movie = "The Room") =>
  console.log(`My name is ${name}, and my favorite movie is ${movie}`);
//call favMovie
favMovie();
//call favMovie with custom params
favMovie("L3p", "The Boondock Saints");
//create getFirstName function
let getFirstName = (name = "Tommy Wiseau") => {
  //create firstName that splits name into an array
  const firstName = name.split(" ");
  //log firstName index 0 to console
  return console.log(firstName[0]);
};
//create getFirstNameConcise
let getFirstNameConcise = (name = "Tommy Wiseau") =>
  //log name split into an array index 0
  console.log(name.split(" ")[0]);
//call getFirstName
getFirstName();
//call getFirstNameConcise
getFirstNameConcise();
//create aboutMe function
let aboutMe = (name, location, favFood) =>
  console.log(
    `My name is ${name}, I live in ${location}, and my favorite food is ${favFood}.`
  );
