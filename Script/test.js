const users = { user1: 18273, user2: 92833, user3: 90315 };
//Solution
const usersArray = Object.entries(users);
console.log(usersArray) // (3) [Array(2), Array(2), Array(2)]

// // //#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
//Solution
updatedUsersArray = usersArray.map((user) => [user[0], user[1] * 2]);
console.log(updatedUsersArray) // [Array(2), Array(2), Array(2)] где ['user1', 36546] (каждое значение умноженно на 2)

const updatedUsers = Object.fromEntries(updatedUsersArray);
console.log(updatedUsers);  // {user1: 36546, user2: 185666, user3: 180630}
