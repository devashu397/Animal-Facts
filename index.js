function dogFact() {
  const url = "https://some-random-api.ml/animal/dog";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let df = document.getElementById("df");
      df.innerHTML = data.fact;
    });
}

function catFact() {
  const url = "https://some-random-api.ml/animal/cat";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let cf = document.getElementById("cf");
      cf.innerHTML = data.fact;
    });
}

function pandaFact() {
  const url = "https://some-random-api.ml/animal/panda";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let pf = document.getElementById("pf");
      pf.innerHTML = data.fact;
    });
}

function redPandaFact() {
  const url = "https://some-random-api.ml/animal/red_panda";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let rpf = document.getElementById("rpf");
      rpf.innerHTML = data.fact;
    });
}

function foxFact() {
  const url = "https://some-random-api.ml/animal/fox";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let ff = document.getElementById("ff");
      ff.innerHTML = data.fact;
    });
}

function raccoonFact() {
  const url = "https://some-random-api.ml/animal/raccoon";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let rf2 = document.getElementById("rf2");
      rf2.innerHTML = data.fact;
    });
}

function koalaFact() {
  const url = "https://some-random-api.ml/animal/koala";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let kf = document.getElementById("kf");
      kf.innerHTML = data.fact;
    });
}

function kangarooFact() {
  const url = "https://some-random-api.ml/animal/kangaroo";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let kf2 = document.getElementById("kf2");
      kf2.innerHTML = data.fact;
    });
}
