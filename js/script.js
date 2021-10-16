//Task #1
const user = {
    name: "John",
    surname: "Smith"
};
user.name = "Pete";
delete user.name;
console.log(user);

// //Task #2
// const user = {
//     name:"John"
// };
// // Это будет работать?
// user.name = "Pete";
// console.log(user);
// //Обьект обьявленый как костанта, может быть изменен.
// //Обьявление корстанты защещает от изменений саму переменую user, а не ее содержимое.

// // Task #3
// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130  
// };
// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }
// console.log(sum);
