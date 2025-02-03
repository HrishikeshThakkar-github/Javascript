let demobtn = document.querySelector("#demo");
let currmode = "light";

// Corrected: Removed the unused `addEventListener()`
demobtn.addEventListener("click", () => {
    if (currmode === "light") {
        currmode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        currmode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
});
