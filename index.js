const user = {};

const Prototype = require('./src');
Prototype(user, {
    id: `${Math.floor(Math.random() * 99999999999) + 88888888}`,
    username: function() {
        return 'Username'
    }
})
 
console.log(user.id);
console.log(user.username());