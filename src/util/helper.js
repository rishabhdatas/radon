    const print = function() {
    const nameOfMonth = new Date().toLocaleString(
            'default', {month: 'long'}
          );
   const a = new Date();
   console.log(a);
   console.log(nameOfMonth);
   console.log("Roadon, W3D1, the topic for today is Nodejs module system");
    }
    module.exports.print = print