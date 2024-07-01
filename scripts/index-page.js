const commentListContainer = document.querySelector(".comment__list");

const commentsList = [
    {name:"Victor Pinto", date:"11/02/2023", message:"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."},
    {name:"Christina Cabrera", date:"10/28/2023", message:"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."},
    {name:"Isaac Tadesse", date:"10/20/2023", message:"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."}
];

function getCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const year = today.getFullYear();
  
    return `${day}/${month}/${year}`;
}

function renderComments(array) {
    // Clear existing comments
    commentListContainer.innerHTML = '';

    // Add each comment to the container
    for (let i = 0; i < array.length; i++) {
        const commentElement = document.createElement("li");
        commentElement.classList.add("comment__item");
        commentListContainer.appendChild(commentElement);
    
        const avatar = document.createElement("div");
        avatar.classList.add("comment__blank-avatar");
        commentElement.appendChild(avatar);
    
        const container = document.createElement("div");
        container.classList.add("comment__info-container")
        commentElement.appendChild(container);
    
        const commentInfo = document.createElement("div");
        commentInfo.classList.add("comment__info");
        container.appendChild(commentInfo);
    
        const nameElement = document.createElement("span");
        nameElement.innerText = array[i].name;
        commentInfo.appendChild(nameElement);
        
        const dateElement = document.createElement("span");
        dateElement.innerText = array[i].date;
        dateElement.classList.add("comment__info--date");
        commentInfo.appendChild(dateElement);
    
        const messageElement = document.createElement("p");
        messageElement.innerText = array[i].message;
        container.appendChild(messageElement);
    }
}

// Form
const form = document.querySelector(".comment__form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("form submitted");
    const name = event.target.name.value;
    const comment = event.target.comment.value;

    const commentEl = {
        name: name,
        date: getCurrentDate(),
        message: comment
    };

    commentsList.unshift(commentEl);
    console.log(commentsList);

    // Re-render
    renderComments(commentsList);

+    event.target.reset();
});

// Initial render
renderComments(commentsList);
