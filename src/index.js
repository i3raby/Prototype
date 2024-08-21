module.exports = Object.setPrototypeOf || ({ __box__ : [] } instanceof Array ? ProtoArray : MixinProperties) 

function MixinProperties(object, proto) {
    for(const prop in proto) {
        if(!Object.prototype.hasOwnProperty.call(object, prop)) {
            object[prop] = proto[prop];
        }
    }

    return object;
}

function ProtoArray(object, proto) {
    object.__box__ = proto;
    return object;
}