# Getting Started with Gallery Application
This project is a Photo Gallery App made with React and the Flickr Photo Search API. 
Users can view, filter photos of mountains and dogs and search for tags on Flickr using this app.
This Application has infinite scrolling as well as pagination
The Application is responsive which renders photos in the grid and 3 in a row

<img width="1720" alt="Screenshot 2022-04-10 at 5 58 25 PM" src="https://user-images.githubusercontent.com/3435945/162618138-9643485f-17f8-467d-856d-7755571d93d8.png">

<img width="412" alt="Screenshot 2022-04-10 at 5 58 43 PM" src="https://user-images.githubusercontent.com/3435945/162618145-6447897b-60ab-4f72-80b6-d94a86423b91.png">

### Technologies used
* React
* JavaScript
* Flickr Photo Search API
* Jest

### Installing and running
<ol>
  <li>Unzip the zip file if you have downloaded this project as a zip file.</li>
  <li>Open the folder on the command line, such as Git Bash, Powershell or Terminal.</li>
  <li>Run npm install to install all dependencies to run this project.</li>
  <li>An API key to use the Flickr API is required to run this project. Sign up for an account at Flickr and then sign up for a Non-Commercial API Key.</li>
  <li>Copy details of your key into new file in the src folder called config.js like so:</li>
  <li>const apiKey = '<your key here>';</li>
  <li>export default apiKey;</li>
  <li>Run npm start to start the portfolio site on your default browser.</li>
</ol>
 
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.


### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

#### TODO:
reset all the values - search,checkboxes and pagination



