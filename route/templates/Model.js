var mongoose = require('mongoose');
var schema = mongoose.Schema;

var <%= name %>Schema = new schema({
    name:
    {
        type: String,
        unique: true
    },
    createt: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('<%= name %>', <%= name %>Schema);
