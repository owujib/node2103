const Event = require('events'); //import event module
const event = new Event.EventEmitter(); //instantiate event class

//creating an event
event.on('hello world', function (message) {
  console.log(message);
});

// event.emit('hello world', 'this is a new message from me ');

exports.getReqData = (req) => {
  return new Promise((resolve, reject) => {
    try {
      let body = '';

      //listen to data sent by client
      req.on('data', (chunk) => {
        console.log(chunk);
        body += chunk.toString();
      });

      //listen to the end
      req.on('end', () => {
        resolve(body);
      });
    } catch (error) {
      reject(error);
    }
  });
};
