![alt text](https://raw.githubusercontent.com/rorykermack/redux-jumpstart/master/readme-header.jpg  "Logo Title Text 1")
# REDUX JUMPSTART #
### A React/Redux environment, playground & springboard for your project. ###

Get a react/redux playground/project up and running in < 5 mins. Quickly create components, reducers, write tests, lint and apply style sharpish. Happy coding :)

Setup:
  1. `$ git clone ...`
  2. `npm run jumpstart`

**tested with node -v 6 & 7*

**`npm run jumpstart` will run install and start a dev environment*

##### With:
    - React
    - Redux
    - Redux Router
    - Redux Thunk
    - Redux Dev Tools
    - ES6 w/ Babel
    - Webpack 2
    - Webpack dashboard
    - Hot Module Replacement
    - Eslint (air bnb standard)
    - SASS
    - Mocha

## Running in: Dev

```
$ npm run dev

```

## Running in: Production
*Build will be in the `./build` folder.*

To create and bundle a build simply run:

```
$ npm run build

```

To create and bundle a build then be able to preview it locally run:
```
$ npm run production
```

## How To's:
----
##### Create a new screen/page/smart component:
1. Duplicate the folder `_template` within the ./src/screens folder
2. Rename the new folder your desired screen name or whatever
3. Rename the `_template.scss`
4. Change `_template` references

##### Add a new route:
  1. In `./router/createRoutes.js` import your new screen (e.g. `import About from '../About/Page.react`;)
  2. Finally add a new Route to the return value of createRoutes (e.g. `<Route path="about" component={About}`/>)

##### Add an item to the navigation:
  1. Open `./components/Navigation/navigation.react.js`
  2. Create an li element with your params e.g. `<li><Link to={'/about'} className={this.isActiveRoute('about')}>About</Link></li>`

##### Add a new reducer:
  1. Duplicate the folder '_template' within the ./src/reducers folder
  2. Set up your actions & reducers
  3. Import the actions.js file into ./src/reducers/mapDispatchToProps
  4. Import the reducer.js into ./src/reducers/appReducer.js

  ---


## Contributing:
Everyone brings something awesome to the party so please raise any suggestions and contribute.
So... <br/>
1. Fork it! <br/>
2. Create your feature branch: `git checkout -b my-new-feature` <br/>
3. Commit your changes: `git commit -am 'Add some feature'` <br/>
4. Push to the branch: `git push origin my-new-feature` <br/>
5. Submit a pull request :D <br/>
