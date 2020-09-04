

function secret(arr, type, password) {
    var rsl=arr;
    for (i in arr) 
    {
        if (type === "encrypt") 
        {
            rsl[i]=arr[i] + password;
        }
        else if (type === "decrypt") 
        {
            rsl[i]= arr[i] - password;
        }
    }



    return arr;
}
var rsl = secret(([1, 2, 3, 1]), "encrypt", 1);

console.log("Se encripata con resultado: " + rsl);
console.log("Se desencripata con resultado: " + secret(rsl, "decrypt", 1));
