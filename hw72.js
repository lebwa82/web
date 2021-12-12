
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
.then(result =>  result.json() )
.then(console.log)
.catch(error => { console.log('Error: ' + err.message); });

  
