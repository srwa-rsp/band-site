import { getCurrentDate , api_key} from "./helpers.js";
import BandSiteApi from "./band-site-api.js";

const showsContainer = document.querySelector(".shows__list");

(async ()=>{
  const bandSiteApi = new BandSiteApi(api_key)
  try{
    const showsList = await bandSiteApi.getShows()
    renderShows(showsList)
    return showsList
  }catch(error){
    console.error('Error:', error);
  }
})()

function renderShows(array) {
  for (let i = 0; i < array.length; i++) {
    
    //ul
    const showItem = document.createElement("ul");
    showItem.classList.add("shows__item");
    showsContainer.appendChild(showItem);

    //first li -- date
    const dateElement = document.createElement("li");
    showItem.appendChild(dateElement);

    const dateLabel = document.createElement("span");
    dateLabel.innerText = "date";
    dateLabel.classList.add("shows__label", "label");
    dateElement.appendChild(dateLabel);

    const dateInfo = document.createElement("strong");
    dateInfo.innerText = getCurrentDate(array[i].date);
    dateElement.appendChild(dateInfo);

    //second li -- venue
    const venueElement = document.createElement("li");
    showItem.appendChild(venueElement);

    const venueLabel = document.createElement("span");
    venueLabel.innerText = "venue";
    venueLabel.classList.add("shows__label", "label");
    venueElement.appendChild(venueLabel);

    const venueInfo = document.createElement("span");
    venueInfo.innerText = array[i].place;
    venueElement.appendChild(venueInfo);

    //third li -- location
    const locationElement = document.createElement("li");
    showItem.appendChild(locationElement);

    const locationLabel = document.createElement("span");
    locationLabel.innerText = "location";
    locationLabel.classList.add("shows__label", "label");
    locationElement.appendChild(locationLabel);

    const locationInfo = document.createElement("span");
    locationInfo.innerText = array[i].location;
    locationElement.appendChild(locationInfo);

    //button
    const buttonElement = document.createElement("button");
    buttonElement.innerText = "buy ticket";
    buttonElement.classList.add("button");
    showItem.appendChild(buttonElement);
  }
}

// renderShows(showsList);

document.querySelectorAll(".shows__item").forEach((item) => {
  item.addEventListener("click", (e) => {
    document
      .querySelectorAll(".shows__item")
      .forEach((el) => el.classList.remove("active"));

    item.classList.add("active");
  });
});
