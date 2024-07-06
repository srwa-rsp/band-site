import { getCurrentDate, api_key } from "./helpers.js";
import BandSiteApi from "./band-site-api.js";

const commentListContainer = document.querySelector(".comment__list");

async function getCommentsList (){
    const bandSiteApi = new BandSiteApi(api_key)
    try{
      const commentsList = await bandSiteApi.getComments();
      const sortedCommentList = commentsList.sort((a,b)=> b.
      timestamp - a.timestamp
      )
      renderComments(sortedCommentList)
      return commentsList
    }catch(error){
      console.error('Error:', error);
    }
  }

  //initial render
  getCommentsList ()
  
  async function postComment(comment){
    const bandSiteApi = new BandSiteApi(api_key)
    try{
        await bandSiteApi.postComment(comment); 
        await getCommentsList();
    }catch(error){
      console.error('Error:', error);
    }
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
        dateElement.innerText = getCurrentDate(array[i].timestamp) 
        ;
        dateElement.classList.add("comment__info--date");
        commentInfo.appendChild(dateElement);
    
        const messageElement = document.createElement("p");
        messageElement.innerText = array[i].comment;
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
        comment: comment
    };
    postComment(commentEl)

    // reset 
    event.target.reset();
});


