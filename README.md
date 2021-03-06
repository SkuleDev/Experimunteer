# Experimunteer #

### Getting Started ###
1. Clone this repo
2. run `npm install`
3. run `gulp compile`
4. run `npm start`
5. navigate to `localhost:3000`

### Current Routes ###
* `/` - Main index page, containing a search bar and select experiments
* `/experiment` - Redirects the user back. Could be a general "all experiments page"
* `/experiment/<id>` - Page for a given experiment, containing all details

### Making Changes ###
* If you wish to make changes, please keep them contained to the `views/` and `src/` folders.

* I recommend running `gulp default` or just `gulp`, which will automatically recompile all `js` and `scss` files when they are changed

* If you need to add a new package, remember to `npm install --save` them

* This repo (should be) ES6 compatible (Thanks `babelify`!). I would like to use as many ES6 features as possible in our JS

* Any changes should have PRs associated with them, and should hopefully be reviewed or approved by at least one other member on the team.
