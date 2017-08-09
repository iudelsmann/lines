import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';


// Collection that represents all item in all lines
const Line = new Mongo.Collection('line');

Line.attachSchema(new SimpleSchema({
  createdAt: {
    type: Date,
  },
  name: {
    type: String,
    unique: true,
  },
  line: {
    type: String,
  },
}));

Line.allow({
  insert(userId) {
    return !!userId;
  },
  remove(userId) {
    return !!userId;
  },
});

export default Line;
