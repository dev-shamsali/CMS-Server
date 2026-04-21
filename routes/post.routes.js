import express from 'express';
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  getPostBySlug
} from '../controllers/post.controller.js';

const router = express.Router();

router.route('/')
  .get(getPosts)
  .post(createPost);

router.route('/:id')
  .get(getPost)
  .put(updatePost)
  .delete(deletePost);

router.route('/slug/:slug')
  .get(getPostBySlug);

export default router;
