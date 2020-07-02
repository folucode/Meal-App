# Meal App

## Description
This application is build with reactjs and an npm package called [json-server](https://www.npmjs.com/package/json-server) was used for the backend.

It is just a simple application which users can signup using Google's 0Auth and create a restaurant and add meals to their restaurant. Users can also view other restaurants created by other users of the application and see their meals.

## Usage
### Using it locally
If you want to use this application in your local machine, the steps to setting it up are listed below:
1. Clone the repo to your local machine
2. if you notice the backend folder is also inside the app, so you have to run `npm install` in both directories. That means you run `npm install` in the root directory which is the reactjs part of the app and also navigate to the backend directory and run the same command
3. after doing step 2 above, run `npm start` in both directories.
4. navigate to the src/apis/db.js file and change the baseURL in the axios instance to `http://localhost:3001`
5. That's all you need to do and you can view the app in your browser.
