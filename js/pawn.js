let chess = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
function draw() {
  let out = "";
  let m = 0;
  for (let i = 0; i < chess.length; i++) {
    let arr = chess[i];
    for (let k = 0; k < arr.length; k++) {
      if (m % 2 == 0) {
        out += `<div class="chess-block" data-x="${k}" data-y="${i}"></div>`;
      } else {
        out += `<div class="chess-block bg-black" data-x="${k}" data-y="${i}"></div>`;
      }
      m++;
    }
    m++;
  }
  document.querySelector('#field').innerHTML = out;
  document.querySelectorAll(".chess-block").forEach(function (element) {
    element.onclick = horse;
  });
}

draw();

function horse() {
  document.querySelectorAll(".chess-block").forEach(function (element) {
    element.classList.remove('green');
    element.classList.remove('active');
    element.classList.remove('lastField')
    element.classList.remove('impossiblePosition')
  });
  let x = this.dataset.x;
  let y = this.dataset.y;
  console.log(x + " " + y);
  this.classList.add('green');
  
        if( +y== 0 && +x>=0) {
          this.classList.add('lastField')
                  return alert("Transformation field: you will need to select a figure!")
        }
        if( +y== 7 && +x>=0) {
          this.classList.add('impossiblePosition')
          return alert("Pawn position on this square is impossible!")
        }
              if (+x< 8 && +y - 1>= 0) {
              document
              .querySelector(`.chess-block[data-x="${+x}"][data-y="${+y - 1}"]`)
              .classList.add("active");
              }
              if (+x< 8 && +y== 6) {
              document
              .querySelector(`.chess-block[data-x="${+x}"][data-y="${+y - 2}"]`)
              .classList.add("active");
              }
              
}
