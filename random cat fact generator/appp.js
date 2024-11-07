const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
  let response = await fetch(URL);
  console.log(response); //json format
  let data = await response.json();
  let rand = Math.floor(Math.random()*5);
  factPara.innerText = data[rand].text;
};

btn.addEventListener("click", getFacts);
