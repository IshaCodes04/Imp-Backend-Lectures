*Razorpay*

- what is razorpay and how to use it?
- How we accept a payment from client?
- How to verify a user which is already pay
- How to decide this order is placed or not or a user buy the product or not ?

* For these all things we use razorpay

- Now what is razorpay? - razorpay is a payment agreegiater also known as a payment gateway which gives a way for accept payyments and verifed them

*Here we create a product and a user buy our product through razorpay (dummy payment)*

- i create whole frontend or backend for check how all these things going on behind the code

*First we create our product in backend*

- create backend folder -> npm init -y
- Start install all packages that we need -> npm i express , mongoose , dotenv
- create src folder in backend -> create app.js file in it and create express server
- create server.js file and start express server in it
- create db folder and db.js file in it for connection of the mongo db from our express server
- create .env file to add credentials
- create models folder -> for start creating our product model or schema
- create controllers folder -> start creating controller for our product model
- create routes folder -> start creating product routes -> create Router -> add createProduct api in router.post
- create preffix for our product api
- create getproduct controller and export it
- create get api for fetch product in routes
- install npm i cors
- req cors in app.js -> and use cors 


*Now we create frontend for fetch product*

- Create frontend folder ->  npm create vite@latest
- npm i -> install npm i axios
