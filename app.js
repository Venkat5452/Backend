//create express app
const exp = require("express");
const app = exp();

//import userApp and productApp
const userApp = require("./APIS/userApi");
const productApp = require("./APIS/productApi");

//excute specific middleware based on path
app.use("/user-api", userApp);
app.use("/product-api", productApp);

//handling invalid paths
app.use((request, response, next) => {
  response.send({ message: `path ${request.url} is invalid` });
});

//error handling middleware
app.use((error, request, response, next) => {
  response.send({ message: "Error occurred", reason: `${error.message}` });
});

//assign port number
app.listen(4000, () => console.log("server listening on port 4000.."));
