// const body = document.body;
// const div= document.createElement("div");
// body.append(div)


//-------------------BOM------------------//

// console.log(window.innerWidth); // Width of the browser's viewport
// console.log(window.location.href); // Current URL


// // console.log(location.href); // Get current URL
// // location.href = "https://example.com"; // Redirect to a new page

// console.log(navigator.userAgent); // Info about the browser
// console.log(navigator.language); // Browser language



// console.log(document.firstChild);



//----DOM----//


let hold=document.getElementById('changetext')


document.getElementById('changetext').addEventListener("click", function (){
    //console.log(this);
    document.getElementById('change-paragraph').textContent="the paragraph is changed";    
});

/    /note: here arrow functions can not be used as it would reference this to window and not the current object 

