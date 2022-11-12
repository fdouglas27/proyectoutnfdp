const buttons = document.querySelectorAll("button");
// const body = document.querySelector(".container");

buttons.forEach((button) => {
    button.addEventListener('focus', focus);
    button.addEventListener('blur', blur);
});

function changeBackground(param) {
    const color = param.target.classList[0];
    document.body.classList.add(color);
    // button.tarjet.style.backgroundColor = "#ccc"
    // document.body.style.backgroundColor = text;
    console.log(color);
}

function focus(params) {
    console.log("focus");
    const color = params.target.classList[0];
    document.body.classList.add(color);
    // params.target.classList.add("is-active");
    // $overlay.classList.add("is-active");
  }
  
  function blur(params) {
    console.log("blur");
    const color = params.target.classList[0];
    document.body.classList.remove(color);
  }


// button[0].addEventListener('click', (event) => {
//     body.style.background = 'rgb(255,255,255)';
//     console.log('hola mundo');
// });


// $inputList.forEach(($element) => {
//     $element.addEventListener("focus", focus);
//     $element.addEventListener("blur", blur);
//   });

// $overlay.addEventListener("click", (event) => {
//     $overlay.classList.remove("is-active");
//     //con clientX/Y recojo las coordenadas de click
//     const maybeIsAnInput = document.elementFromPoint(
//       event.clientX,
//       event.clientY
//     );
  
//     //INPUT esta en mayusculas a proposito
//     if (
//       maybeIsAnInput.tagName === "INPUT" ||
//       maybeIsAnInput.tagName === "TEXTAREA"
//     ) {
//       maybeIsAnInput.focus();
//     }
//   });