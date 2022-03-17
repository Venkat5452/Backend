//create express app
const exp = require("express");
const app = exp();

//to extract body of request object
app.use(exp.json());

//Fake users data
let users = [
  {
    id: 1,
    name: "ravi",
    age: 21,
  },
  {
    id: 2,
    name: "madhu",
    age: 23,
  },
];

//Create REST API

//create route to handle '/getusers' path
app.get("/getusers", (request, response) => {
  response.send({ message: "all users", payload: users });
});

//create route to handle '/getuser/id'
app.get("/getuser/:id", (request, response) => {
  //get url param
  let userId = +request.params.id;

  //search user obj by id
  let userObj = users.find((userObj) => userObj.id == userId);
  console.log(userObj);
  //if user not found
  if (userObj == undefined) {
    response.send({ message: "User not existed" });
  }
  //if user found
  else {
    response.send({ message: "User found", payload: userObj });
  }
});

//create a route to 'create-user'
app.post("/create-user", (request, response) => {
  //get user obj sent by client
  let newUser = request.body;

  //push new user to users list
  users.push(newUser);
  //send response
  response.send({ message: "New user created" });
});

//create a route to modify user data
app.put("/update-user", (request, response) => {
  //get modified user obj
  let modifiedObj = req.body;

  //logic to modify existing user
  //send response
});


//create a route to delete user by id
app.delete("/remove-user/:id", (request, response) => {
  //get id of user to remove
  let userId = (+request.params.id);

  //logic to identify and remove user
  //send response
});

//assign port number
app.listen(4000, () => console.log("server listening on port 4000.."));
