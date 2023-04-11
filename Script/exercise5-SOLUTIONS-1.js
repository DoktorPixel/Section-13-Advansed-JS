// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let newArray = [];
array.forEach((user) => {
  let { username } = user;
  username = username + "!";
  newArray.push(username);
});
console.log(newArray); // (4) ['john!', 'becky!', 'susy!', 'tyson!']

//Create an array using map that has all the usernames with a "?" at the end of usernames
const mapArray = array.map((user) => {
  let { username } = user;
  return username + "?";
});
console.log(mapArray); // (4) ['john?', 'becky?', 'susy?', 'tyson?']

//Filter the array to only include users who are on team: red
const filterArray = array.filter((user) => {
  return user.team === "red";
});
console.log(filterArray); //  // (2) [{…}, {…}] отфильтрованы 2 объекта у которых team:"red"

//Find out the total score of all users using reduce
const total = array.reduce((acc, user) => {
  return acc + user.score;
}, 0);
console.log(total); // 71

// (1), what is the value of i? INDEX of the array.
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  return num * 2;
});

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const answer = array.map((user) => {
  user.items = user.items.map((item) => {
    return item + "!";
  });
  return user;
});
console.log(answer); // // (4) [{…}, {…}, {…}, {…}] - answer будет новым массивом объектов user, в значении каждого элемента ключа items: добавится "!" (например ['ball!', 'book!', 'pen!'])
