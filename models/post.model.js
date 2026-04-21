import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    trim: true,
  },
  slug: {
    type: String,
    required: [true, 'Please provide a slug'],
    unique: true,
    trim: true,
    lowercase: true,
  },
  content: {
    type: String,
    required: [true, 'Please provide content'],
  },
  excerpt: {
    type: String,
  },
  author: {
    type: String,
    default: 'Admin',
  },
  status: {
    type: String,
    enum: ['published', 'draft'],
    default: 'draft',
  },
  featuredImage: {
    type: String,
  },
  tags: [String],
}, {
  timestamps: true,
});

const Post = mongoose.model('Post', postSchema);

export default Post;
