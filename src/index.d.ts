interface Options {
    [key: string]: Function | string;
}

/*

*
    The Prototype function allows you to extend an existing object with additional properties and methods, effectively setting or merging a prototype object onto the target object. This function takes two parameters:

    - object: The target object that you want to extend. This object will be modified by adding new properties or methods defined in the props parameter.
    - props: An object containing properties and methods that you want to add to the target object. The keys of this object represent the property or method names, and the values are either functions (methods) or strings (properties) that will be assigned to the target object.
*/

/**
 * The Prototype function allows you to extend an existing object with additional properties and methods, effectively setting or merging a prototype  object onto the target object. This function takes two parameters:
 * - `Object` : The target object that you want to extend. This object will be modified by adding new properties or methods defined in the props parameter.
 * - `Props` : An object containing properties and methods that you want to add to the target object. The keys of this object represent the property or method names, and the values are either functions (methods) or strings (properties) that will be assigned to the target object.
 * 
 * @returns The function does not return a value. Instead, it modifies the object in place by adding the properties and methods defined in props.
 * 
 * @example 
 * ```ts
 * type User = {
 *    id: string;
 *    username: Function;
 * }
 * 
 * const user = {} as User;
 * 
 * import Prototype from './src';
 * Prototype(user, {
 *    id: `${Math.floor(Math.random() * 99999999999) + 88888888}`,
 *    username: function() {
 *        return 'Username'
 *    }
 * })
 * 
 * console.log(user.id);
 * console.log(user.username());
 * ```
 * 
 * @explain In this example, a `User` type is defined with `id` and `username` properties. The `Prototype` function is then used to add these properties to the `user` object. The `id` is generated as a random string, and `username` is a method that returns a static string `'Username'`.
 */

declare function Prototype<T extends object>(object: T, props: Options): void;

export = Prototype;