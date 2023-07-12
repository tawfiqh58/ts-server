import mongoose, { Schema, Document } from 'mongoose';

interface IPost extends Document {
  title: string;
  content: string;
}

const postSchema: Schema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

const Post = mongoose.model<IPost>('Post', postSchema);

export default Post;
