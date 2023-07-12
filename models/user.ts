import mongoose, { Schema, Document, Model } from 'mongoose';

// attrs/feature/charecteristics
// interface UserAttrs {
//   email: string;
//   password: string;
// }

// custom doc; doc has lots of methods (toJSON)
interface UserDoc extends Document {
  name: string;
  email: string;
  token: string;
}

// custom model; model has lots of methods (deleteMany)
// interface UserModel extends Model<UserDoc> {
//   // build(attrs: UserAttrs): UserDoc;
// }

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    token: {
      type: String,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

// demo
// class Password {
//   static async toHash(pass: string) {
//     return pass + 'hash';
//   }
// }

// pre-save middleware
// note: at the creation time everyting is considered as modified
// userSchema.pre('save', async function (done) {
//   if (this.isModified('password')) {
//     const hashed = await Password.toHash(this.get('password'));
//     this.set('password', hashed);
//   }
//   done();
// });

// adds static method to user model
// takes user attrs
// returns user model
// userSchema.statics.build = (attrs: UserAttrs) => {
//   return new User(attrs);
// };
// const newUser = User.build(userAttrs);

// const User = mongoose.model<UserDoc, UserModel>('User', userSchema);
// export { User };

const User = mongoose.model<UserDoc>('User', userSchema);

export default User;
