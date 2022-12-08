let url = "https://api.adviceslip.com/advice";

let p = fetch(url);

p.then((response) => {
  console.log(response.ok);
  console.log(response.status);
  console.log(response.headers);

  return response.json();
}).then((value1) => {
  console.log(value1);

  for (key in value1) {
    console.log(value1[key]);

    var inhtml = `<div class="heading">
    <h5>ADVICE #${value1[key].id}</h5>
  </div>
  
  <div class="advice-paregraph">
        <p>" ${value1[key].advice} "</p>
      </div>`;
    document.body.getElementsByClassName("dynemic")[0].innerHTML = inhtml;
  }
});

let btn = document.body.getElementsByClassName("btn")[0];

btn.addEventListener("click", (e) => {
  let rload = location.reload();
  console.log(rload);
});
