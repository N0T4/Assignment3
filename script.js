



const sth = localStorage.getItem("th");

let colorSwitch = document.getElementById("colorSwitch");

if (sth) {
  document.body.classList.add(sth);
  if (document.body.classList.contains("dark")) {
    colorSwitch.checked = true;
  }
}


  colorSwitch.addEventListener("click", function () {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");

    const cth = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("th", cth);
  });


 let mybutton = document.getElementById("btn");

mybutton.addEventListener("click", function () {
  event.preventDefault();
  document.body.classList.toggle("close");
  document.body.classList.toggle("open");
});







