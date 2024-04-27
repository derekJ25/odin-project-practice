const Content = (data) => {
  const contentContainer = document.querySelector(".content");
  contentContainer.innerHTML = "";

  const currentActive = document.querySelector(".active");
  const contentTitle = document.createElement("h1");
  contentTitle.innerHTML = currentActive.innerHTML;
  contentContainer.appendChild(contentTitle);

  // TODO: find the active button and make it load into the content depending on value
  // need to seperate logic to pass the data and return data?
  console.log(data);
};

export default Content;
