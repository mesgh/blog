import { Post } from '../models/post';

const CRUD = {
  async create(r) {
    const { body } = r;
    console.log(body);
    if (body.title && body.description && body.content && body.author && body.id) {
      const post = await Post.findOne({ title: body.title });
      if (post) {
        r.res.status(400).send({ message: `Post with name ${body.title} already exists!`, body: {} });
      } else {
        const newPost = new Post(body);
        try {
          await newPost.save();
        } catch (err) {
          console.error(err);
          r.res.status(400).send({ message: `ERROR: ${err}!`, body: {} });
        }
        r.res.status(201).send({ message: `Post ${body.title} created successfully!`, body: newPost });
      }
    } else {
      r.res.status(400).send({ message: 'Empty fields!', body: {} });
    }
  },
  async read(r) {
    const posts = await Post.find();
    r.res.status(200).send({ message: 'Posts found successfully!', body: posts });
  },
  async readOne(r) {
    const id = r.params.id;
    const post = await Post.findOne({ id });
    if (post) {
      r.res.status(200).send({ message: `Post with id ${id} found successfully!`, body: post });
    } else {
      r.res.status(400).send({ message: `Post with id ${id} not found!`, body: {} });
    }
  },
  async del(r) {
    const id = r.params.id;
    await Post.deleteOne({ id });
    r.res.status(200).send({ message: "Post deleted successfully!", body: {} });
  },
};
module.exports = CRUD;