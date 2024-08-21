type User = {
    id: string;
    username: Function;
}
 
const user = {} as User;
 
import Prototype from './src';
Prototype(user, {
    id: `${Math.floor(Math.random() * 99999999999) + 88888888}`,
    username: function() {
        return 'Username'
    }
})
 
console.log(user.id);
console.log(user.username());