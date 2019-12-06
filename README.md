## Embedded screenshot
![Embedded screenshot](/SRC/images/ScreenShot1.png)
![Embedded screenshot](/SRC/images/ScreenShot2.png)
![Embedded screenshot](/SRC/images/ScreenShot3.png)

## Property manager (frontend)
### Repository link: https://github.com/khalsaniwas/property-manager
### Production site link: https://khalsaniwas.github.io/property-manager/
### Development site link: http://localhost:7165/

## Propert manager (backend)
### Repository link: https://github.com/khalsaniwas/property-manager-backend
### Production site link: https://property-manager-hs.herokuapp.com/properties
### Development site link: http://localhost:4741/
 
## Technologies used
Github
Git
React
Visual studio code
Terminal
Development tools
javaScript
reactBootStrap
html

## Wireframe diagram
![wireframe diagram](/SRC/images/wireframe1.png)
![wireframe diagram](/SRC/images/wireframe2.png)
![wireframe diagram](/SRC/images/wireframe3.png)
![wireframe diagram](/SRC/images/wireframe4.png)
![wireframe diagram](/SRC/images/wireframe5.png)

## Planning
As a user I wanted to register multiple properties under my accoun. For my Property manager app I wanted to save property data that can help users manage their properties and keep track of tenants and their lease dates.
I started making wireframes of how my web app components will look like on the web page. I begin with main page and continue to start developing the thought process behind how each navigation page will look like. I made a wireframe to show an index of all properties as a list and then each list was a link to access the single property. On that page I added delete and update functionality. User can also go to create form and can cancle to navigate back to properties list. 

## Development story
I started thinking of making an app that can be used in real by family or friends. Then I thought of why not make an application which can store some data for my father in law and other people who have lot of rental properties and they can use it to save information about all their rental properties. Then I started building Property manager app. I had a plan to use rails to build my Api for backend and React for front end. First I stared writing a pseudo code. Open the local development environment to test my code as I was writing, I used development tools to consol log errors and network tab. I worked on auth features first to signup and sign in with email and password credentials, added change password functionality and then signout. After testing auth features I created routes create a new property and to see a list of all the properties owned by signed in user, then user can also update and delete their properties.I used react to build my front end application.

## Unsolved problems
- I want to add more styling to make the front end look pretty. 

- I want to add more font styles and make the submit buttons look better.

## User stories

* [x] As a new user, I should be able to SignUp.
* [x] As a signed-up user, I should be able to SignIn.
* [x] As a signed-in user, I should be able to ChangePassword.
* [x] As a signed-in user, I should be able to SignOut.
* [x] As a new user, I want to see SignUp and SignIn only.
* [x] As a signed-in user, I want to hide Signup and Signin.
* [x] As a signed-in user, I want to show ChangePassword and SignOut.
* [x] As a signed-in user, I should be able to create new property.
* [x] As a signed-in user, I should be able to view a list of my properties.
* [] As a signed-in user, I should be able to update my properties.
* [x] As a signed-in user, I should be able to delete my properties.

## Set up and installation instructions

### Local deployment guide
- [npm start](#npm-start) to link http://localhost:7165/
### Installing a dependency
- [npm install](#npm-install)
### [Deploying to GitHub Pages](https://pages.github.com/)

#### Step 1: Add `homepage` to `package.json`

**The step below is important!**<br>
**If you skip it, your app will not deploy correctly.**

Open your `package.json` and add a `homepage` field for your project:

```json
  "homepage": "https://myusername.github.io/my-app",
```
#### Step 2: Deploy the site by running `npm run deploy
```sh
npm run deploy
```


