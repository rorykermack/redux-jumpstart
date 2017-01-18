![alt text](https://raw.githubusercontent.com/rorykermack/redux-jumpstart/master/readme-header.jpg  "Logo Title Text 1")
# REDUX JUMPSTART #
### A React/Redux environment, playground & springboard for your project. ###

Get a react/redux playground/project up and running in < 5 mins. Quickly create components, reducers, write tests, lint and apply style sharpish. Happy coding :)

Setup:
  1. `$ git clone ...`
  2. `npm install`
  3. `npm run jumpstart`

**`npm run jumpstart` will run install and start a http server*

***To start your server (when not starting new) you have the following options:*

Run a http dev server:

    `npm run dev`

Run a https dev server:

    `npm run dev-https`


## How To's:
----
##### How do I create a new screen/page/smart component?:
1. Duplicate the folder `_template` within the ./src/browser folder
2. Rename the new folder your desired screen name or whatever
3. Rename the `_template.scss`
4. Change `_template` references

##### How can I add a new route?:
  1. In `./browser/router/createRoutes.js` import your new screen (e.g. `import About from '../about/Page.react`;)
  2. Finally add a new Route to the return value of createRoutes (e.g. `<Route path="about" component={About}`/>)

##### How can I add an item to the navigation?
  1. Open `./browser/navigation/navigation.react.js`
  2. Create an li element with your params e.g. `<li><Link to={'/about'} className={this.isActiveRoute('about')}>About</Link></li>`

##### How can I add a new reducer?
  1. Duplicate the folder '_template' within the ./src/common/ folder
  2. Set up your actions & reducers
  3. Import the actions.js file into ./common/app/mapDispatchToProps
  4. Import the reducer.js into ./common/app/reducer.js

  ---

  ##### With:
    - React
    - Redux
    - Redux Router
    - ES6 w/ Babel
    - Webpack
    - Eslint (air bnb standard)
    - SASS
