const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('focus', focus);
    button.addEventListener('blur', blur);
});

function changeBackground(param) {
    const color = param.target.classList[0];
    document.body.classList.add(color);
    console.log(color);
}

function focus(params) {
    console.log("focus");
    const color = params.target.classList[0];
    document.body.classList.add(color);
  }
  
  function blur(params) {
    console.log("blur");
    const color = params.target.classList[0];
    document.body.classList.remove(color);
  }