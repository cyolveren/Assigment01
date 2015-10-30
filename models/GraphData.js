var mongoose = require('mongoose');

var GraphDataSchema = new mongoose.Schema({
  Location: String,
  Revenue: Number,
  Expenses: Number
}, 
{
  collection: 'graph-data-collection'
});

mongoose.model('GraphData', GraphDataSchema);
