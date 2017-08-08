import { Meteor } from 'meteor/meteor';
import { JsonRoutes } from 'meteor/simple:json-routes';

import '../imports/api/line/collection';
import '../imports/api/lines/collection';

Meteor.startup(() => {
  // code to run on server at startup
});

// Example of an API route to showcase we can have an api
JsonRoutes.add('get', '/api/bla', (req, res) => {
  JsonRoutes.sendResult(res, {
    data: {
      bla: 'bla',
    },
  });
});
