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
- req cors in app.js -> and use cors in app.js


*Now we create frontend for fetch product*

- Create frontend folder ->  npm create vite@latest
- npm i -> install npm i axios
- import axios, useState, useEffect and use it in app.jsx 
- ab axios add krenge useEffect m or getProduct api bhii
- uske bd ek card create krenge app.css m or uski details app.jsx m

*Now let's see flow of razopay for buy our product*

- Frontend m product buy now pr click krke options aate h payment methods ke like through card , netbanking , upi , emi then order confirmation show

*Flow of razorpay*

User clicked on buy now button of any product
                                |
Frontend se ek req send hoti h backend server pr for buy selective product
                                |
Backend details collect krega {amount , currency} of product and send create order request to razorpay
                                |
Now razorpay returns Order Details { order_id, amount , currency } to the backend
                                |
Backend server saves payment with details {order_id, amount , currency , status: pending} into the mongoDB server + (idr just payment initiate huyi h means itna amount user pay krega with status pending in DB) 
                                |
Now order details {order_id, amount , currency} return back on frontend
                                |
Now frontend direct communicates to razorpay (user jo amount pay krega woh direct user account m nhi jata first it goes to razorpay acc then after 2-3 days amount returns back on user's account)                
                                |

Frontend open with razorpay acc , razorpay server ko ek order_id dete h jisse order ka amount or currency link hoti h  
                                |
In sbke baad checkout Ui frontend pr show hota h for user like payment through card , upi , netbanking , razorpay                                                
                                |
now user payment is completed , payment money recieved in razorpay acc
                                |
Now when razorpay recieved payment it verify and send a payment Response on frontend with {order_id, payment_id, signature}
                                 |
Now frontend send all details {order_id, payment_id, signature} to the backend                                  
                                 |
Now backend send these all details {order_id, payment_id, signature} to the razorpay for validation through signature and all other details                                
                                 |
Ab razorpay check krega order details se payment is valid or not valid                                  
                                 |
if signature is valid, all details are valid backend update payment with details {paymentId , signature status: completed} and save with status in mongo DB
                                 |
Response status go on frontend which is Payment Success
                                 |
But if signature is not valid , status in still on pending Status, on frontend is Payment Failed                                 
                                 

*Now implement razorpay in backend*

- npm install razorpay
- npm install cors

* go to razorpay and sign up now go to dashboard -> go to account & settings -> click on API Keys -> click on generate key -> copy test api key & test key secret and paste in .env file

* Now we create webhooks -> webhook url ke liye ngrok use krenge 
* login on ngrok run 2 commands jo starting m dii h and then run ngrok http 3000 in bash
* then url copy krna h uske end m /api/webhook likh kr webhook url m paste kr dena h
* secret copy krke .env m dalna h




                                 