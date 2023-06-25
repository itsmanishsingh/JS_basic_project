// console.log("Hello Manish Singh");
// if (typeof document !== "undefined") {
//     // document exists
//     let element = document.querySelector('.class-name')
//     console.log("Document Exists");
//     const button = document.querySelectorAll('.button');
//     console.log(button);

//     const body = document.querySelector('.body');

//     button.forEach(function (button){
//         console.log(button);
//     })
// } 

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click',function(event){
        console.log(event);
        console.log(event.target);
        if(event.target.id == 'grey'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id == 'white'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id == 'blue'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id == 'yellow'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id == 'purple'){
            body.style.backgroundColor = event.target.id;
        }

    })
})







// else {
//     // document does not exist
//     console.log("Documemts does not exists");
//     console.log(typeof document);
// }


