const section_1 = document.querySelector(".section-1");
const addButton = document.querySelector("#add-movie-btn");
const myarray = [];
const ul = document.querySelector("#movie-list");
const searchButton = document.querySelector("#search-btn");
const modal = document.querySelector(".modaldata");
const closeBtn = document.querySelector(".close-btn");

function buttonHandler() {
  let movieTitle = document.querySelector("#title").value;
  let extraInfo = document.querySelector("#extra-name").value;
  let extraValue = document.querySelector("#extra-value").value;

  console.log(movieTitle);

  const movieObject = {
    key: Math.random(),
    title: movieTitle,
    info: extraInfo,
    value: extraValue,
  };
  console.log(movieObject);
  myarray.push(movieObject);
  console.log(myarray);
  addMoviesHandler(
    movieObject.key,
    movieObject.title,
    movieObject.info,
    movieObject.value
  );
}

function addMoviesHandler(mykey, mytitle, myinfo, myvalue) {
  const list = document.createElement("li");
  list.className = "mylistElements";
  list.innerHTML = `<div class="mydiv"> <h1 class="myh1">${mytitle}</h1><h3 class="myfirsth3">${myinfo}</h3> <h3 class="myh3">${myvalue}</h3></div>`;
  ul.append(list);
}

function search() {
  const filter = document.querySelector("#filter-title").value;
  let fData = myarray.filter((item) => {
    return item.title.includes(filter);
  });
  section_1.style.display = "block";
  console.log(fData, filter, myarray, "fdata");
  modal.innerHTML = "";
  for (let i = 0; i < fData.length; i++) {
    var div1 = document.createElement("div");
    div1.innerHTML = `<div class="mydiv"> <h1 class="myh1">${fData[i].title}</h1><h3 class="myfirsth3">${fData[i].info}</h3> <h3 class="myh3">${fData[i].value}</h3></div>`;
    modal.append(div1);
  }
}
addButton.addEventListener("click", buttonHandler);
searchButton.addEventListener("click", search);
closeBtn.addEventListener("click", () => {
  section_1.style.display = "none";
});
