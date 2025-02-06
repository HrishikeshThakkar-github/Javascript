let fetchbtn =document.getElementById("fetchbtn");

fetchbtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler(){
    console.log("fetchbtn");
    
    //instantiate xhr object
    const xhr = new XMLHttpRequest();

    //xhr.open('GET','abc.json', true);
    xhr.open('POST','https://dummyjson.com/posts', true);
    xhr.getResponseHeader('content-type','application/x-www-form-urlencoded')
    
    //this true represents asynchrnous behaviour == true 

    //what to do on progress
    xhr.onprogress=function (){ 
        console.log("progress");
        
    }
    //what to do when fetch data
    xhr.onload=function(){ 
        console.log(this.responseText);
    }
                                                                                                                                                                                                                                                                                                                                                                                                   
    //earlier before on load this was used
    xhr.onreadystatechange = function(){
        console.log('ready state is', xhr.readyState);
        //this is mostly used to check in which stage the process is 

    // 0	UNSENT	Client has been created. open() not called yet.
    // 1	OPENED	open() has been called.
    // 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
    // 3	LOADING	Downloading; responseText holds partial data.
    // 4	DONE	The operation is complete.
    }

    //send request
    // xhr.send();
    params="posts"
    xhr.send();


    console.log("we are done");
    //this will be executed before json printing as we have asynchrnous behaviour  
    
}                            


let popbtn =document.getElementById("popbtn");

popbtn.addEventListener('click', popbtnHandler);

function popbtnHandler(){
    
}