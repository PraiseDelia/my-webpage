// clicking to change value of numbers
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = nut;
});
let place = 0;
function nut() {
    place++;
    document.querySelector("#het").innerHTML = place;
    if (place % 10 === 0) {
        alert (`${place} is a multiple of ten`)
    }

}

//saying hello name.value
document.addEventListener('DOMContentLoaded', function() 
{document.querySelector('#form').onsubmit = function() {
    const name = document.querySelector('#name').value;
    alert (`hello ${name}`)
}})

//chnanging color of item 
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.color-change') .forEach(function(button) {
        button.onclick = function() {
            document.querySelector("#hello").style.color = button.dataset.color;
        };
    });
});

// this is the latest version of the above code. Note "function" is absent 
//document.addEventListener('DOMContentLoaded', () => {
  //document.querySelectorAll(".color-change").forEach(button => {
    //  button.onclick = () => {
      //    document.querySelector('#hello').style.color = button.dataset.color;
      //};
  //}); 
//});

//changing color using options. NB u cant use the latest js method here
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('#color-change').onchange = function() {
        document.querySelector("#know") .style.color = this.value;
    };
});

// filter list
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#filter').onchange = function() {
        document.querySelector('#image').style.filter = this.value;
    };
});

// to do list
//document.addEventListener('DOMContentLoaded', function() {

    //document.querySelector('#new-task').onsubmit = function() {

        //const Li = document.createElement('Li');
        //Li.innerHTML = document.querySelector('#task').value;

        //document.querySelector('#tasks').append(Li);

        //document.querySelector('#task').value = '';

      //  return false;
    //};
//});

// this block ensures that u cant submit an empty input field
document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#submit').disabled = true;

    document.querySelector('#task').onkeyup = () => { // if u use this without any conditional statement it allows u submit as long as uve typed something in there b4 even if u erase it
        if (document.querySelector('#task').value.length > 0)
        document.querySelector('#submit').disabled = false;
        else 
        document.querySelector('#submit').disabled = true;
    };
    document.querySelector('#new-task').onsubmit = () => {
        const li = document.createElement('li');
        li.innerHTML = document.querySelector('#task').value;

        document.querySelector('#tasks').append(li);// note: this last "li" isnt inside any bracket

        document.querySelector('#task').value = '';
        document.querySelector('#submit').disabled = true;  

        return false;
    };
});

//document.addEventListener('DOMContentLoaded', () => {
    //setInterval(increase, 1000);
// /});
//let counter = 0;
//function increase() {
  //  counter++;
    //document.querySelector('#counter').innerHTML = counter;
    //if (counter == 10)
    //alert("you have 40 seconds till this exam ends ")
//}

//counting without button use
if (!localStorage.getItem('counter'))
    localStorage.setItem('counter', 0);

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('#counter').innerHTML = localStorage.getItem('counter');

        document.querySelector('button').onclick = () => {
            let counter = localStorage.getItem('#counter');
            counter++;

            document.querySelector('#counter').innerHTML = counter;
            localStorage.setItem('counter', counter);
        }
    });
