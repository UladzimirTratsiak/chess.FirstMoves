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
  });
  let x = this.dataset.x;
  let y = this.dataset.y;
  console.log(x + " " + y);
  this.classList.add('green');
  if (+x + 1 < 8 && +y < 8) {
    document
      .querySelector(`.chess-block[data-x="${+x + 1}"][data-y="${+y}"]`)
      .classList.add("active");
  }
  if (+x + 2 < 8 && +y< 8) {
    document
      .querySelector(`.chess-block[data-x="${+x + 2}"][data-y="${+y}"]`)
      .classList.add("active");
  }
  if (+x +3 <8 && +y < 8) {
    document
      .querySelector(`.chess-block[data-x="${+x + 3}"][data-y="${+y}"]`)
      .classList.add("active");
  }
  if (+x +4 < 8 && +y < 8) {
    document
      .querySelector(`.chess-block[data-x="${+x + 4}"][data-y="${+y}"]`)
      .classList.add("active");
  }
  if (+x + 5 < 8 && +y< 8) {
    document
      .querySelector(`.chess-block[data-x="${+x + 5}"][data-y="${+y}"]`)
      .classList.add("active");
  }
  if (+x + 6 < 8 && +y< 8) {
    document
      .querySelector(`.chess-block[data-x="${+x + 6}"][data-y="${+y}"]`)
      .classList.add("active");
  }
  if (+x + 7 < 8 && +y< 8) {
    document
      .querySelector(`.chess-block[data-x="${+x + 7}"][data-y="${+y}"]`)
      .classList.add("active");
  }
if (+x - 1>= 0 && +y>= 0) {
document
.querySelector(`.chess-block[data-x="${+x - 1}"][data-y="${+y}"]`)
.classList.add("active");
}
if (+x -2 >= 0 && +y>= 0) {
document
.querySelector(`.chess-block[data-x="${+x - 2}"][data-y="${+y}"]`)
.classList.add("active");
}
if (+x - 3 >= 0 && +y>= 0) {
document
.querySelector(`.chess-block[data-x="${+x - 3}"][data-y="${+y}"]`)
.classList.add("active");
}
if (+x - 4 >= 0 && +y>= 0) {
document
.querySelector(`.chess-block[data-x="${+x - 4}"][data-y="${+y}"]`)
.classList.add("active");
}
if (+x - 5 >= 0 && +y>= 0) {
document
.querySelector(`.chess-block[data-x="${+x - 5}"][data-y="${+y}"]`)
.classList.add("active");
}
if (+x - 6 >= 0 && +y>= 0) {
document
.querySelector(`.chess-block[data-x="${+x - 6}"][data-y="${+y}"]`)
.classList.add("active");
}
if (+x - 7 >= 0 && +y>= 0) {
document
.querySelector(`.chess-block[data-x="${+x  - 7}"][data-y="${+y}"]`)
.classList.add("active");
}
              if (+x< 8 && +y - 1>= 0) {
              document
              .querySelector(`.chess-block[data-x="${+x}"][data-y="${+y - 1}"]`)
              .classList.add("active");
              }
              if (+x< 8 && +y - 2 >= 0) {
              document
              .querySelector(`.chess-block[data-x="${+x}"][data-y="${+y - 2}"]`)
              .classList.add("active");
              }
              if (+x< 8 && +y - 3 >= 0) {
              document
              .querySelector(`.chess-block[data-x="${+x}"][data-y="${+y  - 3}"]`)
              .classList.add("active");
              }
              if (+x< 8 && +y - 4 >= 0) {
              document
              .querySelector(`.chess-block[data-x="${+x}"][data-y="${+y - 4}"]`)
              .classList.add("active");
              }
              if (+x< 8 && +y - 5 >= 0) {
              document
              .querySelector(`.chess-block[data-x="${+x}"][data-y="${+y - 5}"]`)
              .classList.add("active");
              }
              if (+x< 8 && +y - 6 >= 0) {
              document
              .querySelector(`.chess-block[data-x="${+x}"][data-y="${+y - 6}"]`)
              .classList.add("active");
              }
              if (+x< 8 && +y - 7 >= 0) {
              document
              .querySelector(`.chess-block[data-x="${+x}"][data-y="${+y - 7}"]`)
              .classList.add("active");
              }
if (+x>= 0 && +y + 1 < 8) {
document
.querySelector(`.chess-block[data-x="${+x}"][data-y="${+y + 1}"]`)
.classList.add("active");
}
if (+x>= 0 && +y + 2 < 8) {
document
.querySelector(`.chess-block[data-x="${+x}"][data-y="${+y + 2}"]`)
.classList.add("active");
}
if (+x>= 0 && +y + 3 < 8) {
document
.querySelector(`.chess-block[data-x="${+x }"][data-y="${+y + 3}"]`)
.classList.add("active");
}
if (+x>= 0 && +y + 4 < 8) {
document
.querySelector(`.chess-block[data-x="${+x}"][data-y="${+y + 4}"]`)
.classList.add("active");
}
if (+x>= 0 && +y + 5 < 8) {
document
.querySelector(`.chess-block[data-x="${+x}"][data-y="${+y + 5}"]`)
.classList.add("active");
}
if (+x>= 0 && +y + 6 < 8) {
document
.querySelector(`.chess-block[data-x="${+x}"][data-y="${+y + 6}"]`)
.classList.add("active");
}
if (+x>= 0 && +y + 7 < 8) {
document
.querySelector(`.chess-block[data-x="${+x}"][data-y="${+y + 7}"]`)
.classList.add("active");
}
                  if (+x + 1 < 8 && +y < 8) {
                    document
                      .querySelector(`.chess-block[data-x="${+x + 1}"][data-y="${+y}"]`)
                      .classList.add("active");
                  }
                  if (+x + 2 < 8 && +y< 8) {
                    document
                      .querySelector(`.chess-block[data-x="${+x + 2}"][data-y="${+y}"]`)
                      .classList.add("active");
                  }
                  if (+x +3 <8 && +y < 8) {
                    document
                      .querySelector(`.chess-block[data-x="${+x + 3}"][data-y="${+y}"]`)
                      .classList.add("active");
                  }
                  if (+x +4 < 8 && +y < 8) {
                    document
                      .querySelector(`.chess-block[data-x="${+x + 4}"][data-y="${+y}"]`)
                      .classList.add("active");
                  }
                  if (+x + 5 < 8 && +y< 8) {
                    document
                      .querySelector(`.chess-block[data-x="${+x + 5}"][data-y="${+y}"]`)
                      .classList.add("active");
                  }
                  if (+x + 6 < 8 && +y< 8) {
                    document
                      .querySelector(`.chess-block[data-x="${+x + 6}"][data-y="${+y}"]`)
                      .classList.add("active");
                  }
                  if (+x + 7 < 8 && +y< 8) {
                    document
                      .querySelector(`.chess-block[data-x="${+x + 7}"][data-y="${+y}"]`)
                      .classList.add("active");
                  }
  if (+x - 1>= 0 && +y>= 0) {
    document
      .querySelector(`.chess-block[data-x="${+x - 1}"][data-y="${+y}"]`)
      .classList.add("active");
  }
  if (+x -2 >= 0 && +y>= 0) {
    document
      .querySelector(`.chess-block[data-x="${+x - 2}"][data-y="${+y}"]`)
      .classList.add("active");
  }
  if (+x - 3 >= 0 && +y>= 0) {
    document
      .querySelector(`.chess-block[data-x="${+x - 3}"][data-y="${+y}"]`)
      .classList.add("active");
  }
  if (+x - 4 >= 0 && +y>= 0) {
    document
      .querySelector(`.chess-block[data-x="${+x - 4}"][data-y="${+y}"]`)
      .classList.add("active");
  }
  if (+x - 5 >= 0 && +y>= 0) {
    document
      .querySelector(`.chess-block[data-x="${+x - 5}"][data-y="${+y}"]`)
      .classList.add("active");
  }
  if (+x - 6 >= 0 && +y>= 0) {
    document
      .querySelector(`.chess-block[data-x="${+x - 6}"][data-y="${+y}"]`)
      .classList.add("active");
  }
  if (+x - 7 >= 0 && +y>= 0) {
    document
      .querySelector(`.chess-block[data-x="${+x  - 7}"][data-y="${+y}"]`)
      .classList.add("active");
  }
                              if (+x< 8 && +y - 1>= 0) {
                              document
                              .querySelector(`.chess-block[data-x="${+x}"][data-y="${+y - 1}"]`)
                              .classList.add("active");
                              }
                              if (+x< 8 && +y - 2 >= 0) {
                              document
                              .querySelector(`.chess-block[data-x="${+x}"][data-y="${+y - 2}"]`)
                              .classList.add("active");
                              }
                              if (+x< 8 && +y - 3 >= 0) {
                              document
                              .querySelector(`.chess-block[data-x="${+x}"][data-y="${+y  - 3}"]`)
                              .classList.add("active");
                              }
                              if (+x< 8 && +y - 4 >= 0) {
                              document
                              .querySelector(`.chess-block[data-x="${+x}"][data-y="${+y - 4}"]`)
                              .classList.add("active");
                              }
                              if (+x< 8 && +y - 5 >= 0) {
                              document
                              .querySelector(`.chess-block[data-x="${+x}"][data-y="${+y - 5}"]`)
                              .classList.add("active");
                              }
                              if (+x< 8 && +y - 6 >= 0) {
                              document
                              .querySelector(`.chess-block[data-x="${+x}"][data-y="${+y - 6}"]`)
                              .classList.add("active");
                              }
                              if (+x< 8 && +y - 7 >= 0) {
                              document
                              .querySelector(`.chess-block[data-x="${+x}"][data-y="${+y - 7}"]`)
                              .classList.add("active");
                              }
          if (+x>= 0 && +y + 1 < 8) {
            document
              .querySelector(`.chess-block[data-x="${+x}"][data-y="${+y + 1}"]`)
              .classList.add("active");
          }
          if (+x>= 0 && +y + 2 < 8) {
            document
              .querySelector(`.chess-block[data-x="${+x}"][data-y="${+y + 2}"]`)
              .classList.add("active");
          }
          if (+x>= 0 && +y + 3 < 8) {
            document
            .querySelector(`.chess-block[data-x="${+x }"][data-y="${+y + 3}"]`)
              .classList.add("active");
          }
          if (+x>= 0 && +y + 4 < 8) {
            document
            .querySelector(`.chess-block[data-x="${+x}"][data-y="${+y + 4}"]`)
              .classList.add("active");
          }
          if (+x>= 0 && +y + 5 < 8) {
            document
            .querySelector(`.chess-block[data-x="${+x}"][data-y="${+y + 5}"]`)
              .classList.add("active");
          }
          if (+x>= 0 && +y + 6 < 8) {
            document
            .querySelector(`.chess-block[data-x="${+x}"][data-y="${+y + 6}"]`)
              .classList.add("active");
          }
          if (+x>= 0 && +y + 7 < 8) {
            document
            .querySelector(`.chess-block[data-x="${+x}"][data-y="${+y + 7}"]`)
              .classList.add("active");
          }
          
}
