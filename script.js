//#region Scope

/* This is used for the Scope.*/
// {
//     let insideLocal = 'called inside the block using : let'
//     console.log(insideLocal);

//     var insideGlobal = 'Shingadiya Ravi';
//     console.log("called inside the block : ",insideGlobal);
// }
// console.log("called outside the block : ",insideGlobal);

//#endregion

//#region Asyncrnous vs syncronous
/* Syncronous */
// let a = console.log('First: A print');
// let b = console.log('First: b print');
// let c = console.log('First: c print');

/* Asyncronous */
// console.log("Start : ");

// setTimeout(() => {
//     console.log("Asyncronous Run :")
// }, 3000);

// console.log("End : ");
//#endregion

//#region  Callbacks

// function hello(){
//     console.log("hello() Called using callback ");
// }

// function hi(){
//     console.log("hi() Called using callback ");
// }

// function addition(n1,n2,callback){
//     console.log("Number One :"+ n1 + " Number Two :"+n2);
//     console.log("Sum Total :",n1+n2); 

//     /* 
//         The callback is actual variable but we are used as a function.
//         Which function pass to callback parameter then it will called that function...
//         Inshort it is a dynamic call when we want to used then we will used any functions using callback and no need to change inside the main function.
//     */
//     callback();
// }

// /* Here we are pass the hello() function as a variable name.*/
// addition(10,20,hello)

// /* Here we are pass the hi() function as a variable name.*/
// addition(7,40,hi)

// /* Here we are pass the anynomous() function as a variable name.*/
// addition(7,15,function(){
//     console.log("Anynomous Function Called :  Bye");
// })

// /* Here we are pass the arrow function as a variable name.*/
// addition(7,15,()=>{
//     console.log("Arrow Function Called :  Bye");
// })

//#endregion

//#region Async & Await
/* The Async & Await work with only promise so here create a two promise for the async & await */
// let firstData = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve ("First Data Called");
//     }, 3000);
// });

// let secondData = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Second Data Called");
//     }, 5000);
// });


// async function display(){ 

//     console.log("Display Called : ");

//     console.log("Waiting for First Data...");
//     let first = await firstData;
//     console.log("First Data Fetch :-",first);


//     console.log("Waiting for Second Data...");
//     let second = await secondData;
//     console.log("Second Data Fetch :-",second);
//     // await console.log(a);

//     return [first,second]
// }


// display();

//#endregion

//#region  DOM Events :

//#region Mouse Events
function mouseEvent() {
    alert("Mouse Event Called ...");
}
//#endregion

//#region Keyboard Events

//#endregion

//#region Frame Events

//#endregion

//#region Form Events
/* This is used for the target the element by id and perform some operation on that element */
// let temp = document.getElementById("inputName");

// /* These are eventlistner for the different event handle */
// temp.addEventListener('focus',inputFocus);
// temp.addEventListener('blur',inputBlur);

// /* This will give input data when we unfocus that input field */
// temp.addEventListener('change',function(){
//     console.log(this.value);
// });
// /* This will give data when any change in input field.it means everytime it will return data. we dont need to unfocus that field. */
// temp.addEventListener('input',function(){
//     console.log(this.value);
// });

function inputFocus() {
    temp.style.backgroundColor = 'burlywood';
    console.log("Focus Called : ");
}

function inputBlur() {
    temp.style.backgroundColor = 'green';
    console.log("Blur Called :");
}


// Form Validation Start :::
let username = document.getElementById("username");
let password = document.getElementById("password");
let flag = true;

function validateForm() {
    if (username.value == '') {
        console.log("Empty username");
        document.getElementById("usernameError").innerHTML = "Please Enter Username";
        flag = false;
    } else {
        document.getElementById("usernameError").innerHTML = null;
        flag = true;
    }

    if (password.value == "") {
        console.log("Empty password");
        document.getElementById("passwordError").innerHTML = "Please Enter password";
        flag = false;
    } else if (password.value.length < 4) {
        document.getElementById("passwordError").innerHTML = "Minimum 4 character need for password.";
        flag = false;
    } else {
        document.getElementById("passwordError").innerHTML = null;
        flag = true;
    }


    let regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.value == '') {
        console.log("Empty Email");
        document.getElementById("mailError").innerHTML = "Please Enter Email";
        flag = false;
    }
    else if(!mail.value.match(regx)){
        document.getElementById('mailError').innerHTML = "Invalid Email";
        flag  = false;
    }
    else{
        document.getElementById("mailError").innerHTML = null;
        flag = true;
    }
    // /^\d{10}$/
    let contactValidation = /^\d{10}$/

    if(contact.value == ''){
        document.getElementById('contactError').innerHTML = "Please Enter Contact";
        flag = false;
    }
    else if(contact.value != '' && !contact.value.match(contactValidation)){
        document.getElementById('contactError').innerHTML = "Invalid Contact"
        flag = false;
    }else{
        document.getElementById('contactError').innerHTML = null;
        flag = true;
    }


    if (flag) {
        return flag;
    } else {
        return flag;
    }

}


//#endregion



//#region Start Event Deligation :

/* Last Argument false means it will work with the bubbling method (Bottom to Top)*/

// let parentBubble = document.getElementById("parentBubble").addEventListener('click',()=>{
//     console.log("Parent Bubble Called :");
// },false)
    

// let childBubble = document.getElementById("childBubble").addEventListener("click",()=>{
//     console.log("Child Bubble Called :");
// },false)


// /* Last Argument true means it will work with the capturing method (Top To Bottom)*/

// let parentCapture = document.getElementById("parentCapture").addEventListener('click',()=>{
//     console.log("Parent Capture Called :");
// },true)

// let childCapture = document.getElementById("childCapture").addEventListener("click",()=>{
//     console.log("Child Capture Called :");
// },true)



/* We have a issue in these method : because of we click in child then called parent and child both are work so some time we dont need to do that and we want to work only one called which one is click...
 */

 /* Bubbling Method (bottom to top)  */
// document.getElementById("eventBubble").addEventListener('click',(event)=>{
//     let message = event.target.id;

//     if(message === "parentBubble"){
//         console.log("Parent Bubble Called : ",message);
//     } else if(message === 'childBubble'){
//         console.log("Child Bubble Called : ",message);
//     }else{
//         console.log("Event Bubble Called : ",message);
//     }   
// },false);

/* Capturing Method (top to bottom) */
// document.getElementById("eventCapture").addEventListener('click',(event)=>{
//     let message = event.target.id;

//     if(message === "parentCapture"){
//         console.log("Parent Capture Called : ",message);
//     } else if(message === 'childCapture'){
//         console.log("Child Capture Called : ",message);
//     } else{
//         console.log("Event Capture Called : ",message);
//     }
     
// },true);

//#endregion


//#region Start Object Destruction :

    // This is simple Object...
    let data = {
        id:1,
        name : 'Shingadiya Ravi',
        degree : 'MCA'
    }

    /* Descturcting The data object and used as a object name... */
    let {id,name,degree} = data;

    console.log("Object Destruction Used.........");
    console.log("Simple as original variabel name : my Id: ",id,"My name is : ",name,"My degree is : ",degree);



    /* Desturcting the data object as own variable name... */
    // let {id:dataId,name,degree:dataDegree} = data;

    // console.log("Object Destruction Used.........");
    // console.log("Own variabel name : my Id: ",dataId,"My name is : ",name,"My degree is : ",dataDegree);


//#endregion