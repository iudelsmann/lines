import { Mongo } from 'meteor/mongo';

const lineCollection = new Mongo.Collection('lines');

const lines = lineCollection.find({});

lines.forEach((line) => {
  new Mongo.Collection(`line_${line.name}`);
});
