const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// a <p> with red text that says “Hey I’m red!”

const paragraph = document.createElement("p");
paragraph.style.color = "red";
paragraph.innerHTML = "Hey I'm red!";

container.appendChild(paragraph);

// an <h3> with blue text that says “I’m a blue h3!”

const heading = document.createElement("h3");
heading.style.color = "blue";
heading.innerHTML = "I'm a blue h3!";

container.appendChild(heading);

// div black border pink background, h1 "I'm a div", p "ME TOO!"

const exerciseContainer = document.createElement("div");
exerciseContainer.classList.add("exerciseContainer");
exerciseContainer.style.border = "blue";
exerciseContainer.style.backgroundColor = "pink";

const heading1 = document.createElement("h1");
heading1.innerHTML = "I'm a div";
const paragraph1 = document.createElement("p");
paragraph1.innerHTML = "ME TOO!";

exerciseContainer.appendChild(heading1);
exerciseContainer.appendChild(paragraph1);
container.appendChild(exerciseContainer);
