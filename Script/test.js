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
const answer = array.map((user) => {
  user.items = user.items.map((item) => {
    return item + "!";
  });
  return user;
});
console.log(answer); // (4) [{…}, {…}, {…}, {…}] - answer будет новым массивом объектов user, в значении каждого элемента ключа items: добавится "!" (например ['ball!', 'book!', 'pen!'])

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

//Create an array using map that has all the usernames with a "? to each of the usernames

//Filter the array to only include users who are on team: red

//Find out the total score of all users using reduce
