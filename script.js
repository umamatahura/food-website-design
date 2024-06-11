const imageArray = [
  {
    url: "./images/food-image/food-7.png",
  },
  {
    url: "./images/food-image/food-8.png",
  },
  {
    url: "./images/food-image/food-9.png",
  },
  {
    url: "./images/food-image/food-10.png",
  },
  {
    url: "./images/food-image/food-11.png",
  },
  {
    url: "./images/food-image/food-12.png",
  },
];

function handleShowMoreProject() {
  const projectContainer = document.getElementById("projects");

  const projectDiv = document.createElement("div");
  console.log(projectDiv);

  for (const item of imageArray) {
    console.log(item);
    const projectDivImage = document.createElement("div");
    projectDivImage.innerHTML = `

<img src="${item.url}" alt="" />

`;
  }

  console.log("click");
}
