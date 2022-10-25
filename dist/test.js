"use strict";
// const a : string = "Hello World";
// const b : number = 42;
// const c : boolean = true;
// const d : null = null;
// const e : any[] = ["Hello", 42, true];
// const f : { [key: string]: string } = { "key": "value" };
// const user : {firstname : string, lastname : string, age : number} = { firstname : "john", lastname : "doe", age : 42 };
// const g : Function =  (e: MouseEvent) : void => {
// }
// const h : Function = (id : number) : void => {
// }
const compteur = document.querySelector("#compteur");
let i = 0;
const increment = (e) => {
    e.preventDefault();
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector("span");
    if (span) {
        span.innerText = i.toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener("click", increment);
