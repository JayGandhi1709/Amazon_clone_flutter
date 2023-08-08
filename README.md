# Flutter Amazon Clone
<p align="center">
 <img width="100px" src="https://github.com/JayGandhi1709/Amazon_clone_flutter/blob/0ddf95d7507bfdcecdc0fb36cc05d96c14c57f23/README/clone_logo.png" align="center" alt="" />
 <h2 align="center">Fullstack Flutter Amazon Clone  </h2>
 <p align="center">A Full Stack Amazon Clone app with Flutter!</p>
</p>

# About
Full Stack Working Amazon Clone app with Admin Dashboard using Flutter and Backend with NodeJs and MongoDB + Atlas.

# Installation
### Requirements

* Get a free API Key at https://cloudinary.com/ for store products image
* Update Cloud name and Upload preset at ``` lib -> features -> admin -> services -> admin_services.dart ```
* ![image](https://user-images.githubusercontent.com/3157579/178201535-ca05d27a-4b32-4586-b2eb-fdbee71447f0.png)
* Create MongoDB at https://cloud.mongodb.com/  and Add your connection string into your application code
* project -> server -> config.env -> 
 ```
  DATABASE = "mongodb+srv://***" // Please Enter your MongoDB URL 
  PORT = 5000 // Please Enter Port 
  SECRET_KEY = *********** // Please Any SECRET_KEY
  ```
* ![image](https://github.com/JayGandhi1709/Amazon_clone_flutter/blob/0ddf95d7507bfdcecdc0fb36cc05d96c14c57f23/README/config.png)
* Head to ```lib -> constants -> global_variables.dart file```, replace with your IP Address.
* ![image](https://github.com/JayGandhi1709/Amazon_clone_flutter/blob/0ddf95d7507bfdcecdc0fb36cc05d96c14c57f23/README/ip.png)

### Run the App
Before starting 🏁, you need to have Flutter installed.
```
# Clone this project
$ git clone https://github.com/JayGandhi1709/Amazon_clone_flutter.git

# Access
$ cd amazon_clone

# Pull dependencies
$ flutter pub get

# Run the project (emulator or physical device needs to be connected first)
$ flutter run

# Build an apk
$ flutter build apk --split-per-abi
```
### Installing Server
To run the server, run the following commands: 
 ``` cd server
  npm install
  npm run dev (for continuous development)
  OR
  npm start (to run script 1 time)
  ```

# Features
- User Registration and Login with email and password
- Persisting Auth State with Provider
- Search Products
- Rate Products
- Add to Cart Product
- Buy product with ApplePay and Gpay
- Search Category wise products
- Add Multiple Address
- Save default Address
- Update and Delete Address
- My Account 
- Your Orders to view recent Orders
- Product Details
- Getting Deal of the Day
- Viewing Order Details & Status
- Settings Screen
- Amazon Pay, miniTV, Funzone
- Sign Out
... and many more
- Admin Panel
    - View All Products
    - Add new Products
    - Delete Products
    - View Orders and Change current status
    - Viewing Total Earnings
    - Viewing Category Based Earnings (on Graph)
   