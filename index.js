function receivesAFunction(callback){
    return callback()
}


function returnsANamedFunction(){
    return function named(){
        console.log("A named function")
    }


}

function returnsAnAnonymousFunction(){
    return  function(){
        console.log("An anonymous function")
    }
}