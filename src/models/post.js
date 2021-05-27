const { Schema, model } = require('../connections/blog');
const postSchema = new Schema({
  "id": {
    "type": "Number",
  },
  "title": {
    "type": "String",
  },
  "description": {
    "type": "String",
  },
  "content": {
    "type": "String",
  },
  "author": {
    "type": "String",
  },
},
);	
const Post = model('Post', postSchema);
module.exports = { Post };