import { Meteor } from 'meteor/meteor';

import '../imports/api/line/collection';
import '../imports/api/lines/collection';

Meteor.startup(() => {
  // code to run on server at startup
});

// Example of an API route to showcase we can have an api
JsonRoutes.add("get", "/api/bla", function (req, res, next) {
  JsonRoutes.sendResult(res, {
    data: {
      bla: 'bla',
    },
  });
});
