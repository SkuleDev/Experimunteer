var express = require('express');
var router = express.Router();


// Parameter callbacks applied before any routes.
// parameters are processed in order of occurence
// ie /:id1/:next/:last will be processed id1 -> next -> last -> webpage

// extract the experiment ID from the URL
router.param('experiment_id', function(req, res, next, id) {
    req.experiment_id = id;
    // can do error checking here (id does not exist, etc.)
    next(); // move to the next parameter or url callback function

});

/* GET users listing. */
// no experiment specified, give general page
router.get('/', function(req, res, next) {
    console.log('sending back');
    res.redirect('back'); // send the user back
});

router.get('/:experiment_id', function(req, res, next) {
    var id = req.experiment_id; // experiment ID is in the request body from the param function call above
    res.send('Getting experiment #'+id);
});

module.exports = router;
