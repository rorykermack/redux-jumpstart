# REDUX JUMPSTART #
A React/Redux environment, playground & springboard for your project.

Get a react/redux playground/project up and running in < 5 mins. Quickly create components, reducers, write tests, lint and apply style sharpish. Happy coding :)

With:
  - React
  - Redux
  - Redux Router
  - ES6 w/ Babel
  - Webpack
  - Eslint (air bnb standard)
  - SASS
  - Thunk

Setup:
  1) `$ git clone ...`
  2) `npm install`
  3) `npm run jumpstart`

Run a http dev server:
  `npm run dev`

Run a https dev server:
  `npm run dev-https`

FAQS:
How do I create a new screen/page/smart component?:
  1) Duplicate the folder `_template`
  2) Rename the new folder your desired screen name or whatever
  3) Rename the `_template.scss`
  4) Change `_template` references
  5) In `./browser/router/createRoutes.js` import your new screen (e.g. `import About from '../about/Page.react`;)
  6) Finally add a new Route to the return value of createRoutes (e.g. `<Route path="about" component={About}`/>)


How can i add an item to the navigation?
  1) Open `./browser/navigation/navigation.react.js`
  2) Create an li element with your params e.g. `<li><Link to={'/about'} className={this.isActiveRoute('about')}>About</Link></li>`
  3) Done
