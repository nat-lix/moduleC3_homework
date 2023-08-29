const obj = {
    a: 1, 
    b: 2,
    c: 3
};
function ownFunction(obj) {
    for (let key in ownFunction) {
        if (obj.hasOwnProperty(key)) {
            console.log(key, obj[key]); 
        }   
    }

}
