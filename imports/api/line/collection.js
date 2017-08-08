import { Mongo } from 'meteor/mongo';

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
