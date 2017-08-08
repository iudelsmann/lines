import { Mongo } from 'meteor/mongo';

// Collection that represents all item in all lines
const Line = new Mongo.Collection('line');

Line.allow({
  insert(userId) {
    return !!userId;
  },
  remove(userId) {
    return !!userId;
  },
});

export default Line;
