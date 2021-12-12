
let data = {
  "name": "Dima",
  "age": "20",
  "profession": "chess player"
};
console.log("data = ", data);

fetch("hw72.php", {
  method: "post",
  body: JSON.stringify(data)
  })
.then((result) => {
  return result.json();
})
.then((data) => {
  console.log(data);
})
.catch((error) => {
  console.log(error.message);
});
  
