"use strict";

function surprise(d, name){
    for(let i=d; i>0; i--){
        if(i!=0){
            console.log(i)
        }
    }
    alert(`Bon anniversaire ${name}!`)
}
surprise(56, "RV")