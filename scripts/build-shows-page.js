const showsContainer = document.querySelector(".shows__list");


const showsList = [
    {date: "Mon Sept 09 2024", venue: "Ronald Lane ", location:"San Francisco, CA"},
    {date: "Tue Sept 17 2024 ", venue: "Pier 3 East  ", location:"San Francisco, CA"},
    {date: "Sat Oct 12 2024 ", venue: "View Lounge  ", location:"San Francisco, CA"},
    {date: "Sat Nov 16 2024 ", venue: "Hyatt Agency  ", location:"San Francisco, CA"},
    {date: "Fri Nov 29 2024", venue: "Moscow Center  ", location:"San Francisco, CA"},
    {date: "Wed Dec 18 2024 ", venue: "Press Club ", location:"San Francisco, CA"},
]

function renderShows(){
    for(let i = 0 ; i< showsList.length; i++){
        //ul
        const showItem = document.createElement("ul")
        showItem.classList.add("shows__item")
        showsContainer.appendChild(showItem)

        //first li -- date
        const dateElement = document.createElement("li")
        showItem.appendChild(dateElement)

        const dateLabel = document.createElement("span")
        dateLabel.innerText = "date";
        dateLabel.classList.add("shows__label", "label")
        dateElement.appendChild(dateLabel)

        const dateInfo = document.createElement("strong")
        dateInfo.innerText =  showsList[i].date;
        dateElement.appendChild(dateInfo)

        //second li -- venue
        const venueElement = document.createElement("li")
        showItem.appendChild(venueElement)

        const venueLabel = document.createElement("span")
        venueLabel.innerText = "venue";
        venueLabel.classList.add("shows__label", "label")
        venueElement.appendChild(venueLabel)

        const venueInfo = document.createElement("span")
        venueInfo.innerText =  showsList[i].venue;
        venueElement.appendChild(venueInfo)

        //third li -- location
        const locationElement = document.createElement("li")
        showItem.appendChild(locationElement)

        const locationLabel = document.createElement("span")
        locationLabel.innerText = "location";
        locationLabel.classList.add("shows__label", "label")
        locationElement.appendChild(locationLabel)

        const locationInfo = document.createElement("span")
        locationInfo.innerText =  showsList[i].location;
        locationElement.appendChild(locationInfo)

        //button
        const buttonElement = document.createElement("button");
        buttonElement.innerText = "buy ticket";
        buttonElement.classList.add("button")
        showItem.appendChild(buttonElement)
        
    }
}

renderShows()