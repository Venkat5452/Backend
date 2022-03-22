//create router to handle user api reqs
const exp=require('express');
const userApp=exp.Router()


//to extract body of request object
userApp.use(exp.json());


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

//USER API Routes

//create route to handle '/getusers' path
userApp.get("/getusers",(request, response) => {
  response.send({ message: "all users", payload: users});
});




//create route to handle '/getuser/id'
userApp.get("/getuser/:id", (request, response) => {
  //get url param
  let userId = +request.params.id;

  //search user obj by id
  let userObj = users.find((userObj) => userObj.id == userId);
  
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
userApp.post("/create-user", (request, response) => {
  //get user obj sent by client
  let newUser = request.body;

  //push new user to users list
  users.push(newUser);
  //send response
  response.send({ message: "New user created" });
});


//create a route to modify user data
userApp.put("/update-user", (request, response) => {
  //get modified user obj
  let modifiedObj = req.body;

  //logic to modify existing user
  //send response
});




//create a route to delete user by id
userApp.delete("/remove-user/:id", (request, response) => {
  //get id of user to remove
  let userId = (+request.params.id);

  //logic to identify and remove user
  //send response
});



//export userApp
module.exports=userApp;
