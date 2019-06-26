
const options = {
    method: "GET",
    headers: {
        "Accept": "application/json",
        "user-key": "43fa3472a56997047cfd55fd7f5ce82f"
    },
}

fetch("https://developers.zomato.com/api/v2.1/restaurant?res_id=16917140", options)
.then(res => res.json())
.then(data => {
    data.photos.map((photo, index) => {
        if(index === 1 || index === 3 || index === 4){
            let img = document.getElementById(`pic${index}`)
            img.src = photo.photo.url
        }
    })
    const header = document.getElementById("header");
    header.innerHTML = data.name;

    const address = document.getElementById("address");
    address.innerHTML = data.location.address

    const phoneNumber = document.getElementById("phone-number")
    phoneNumber.innerHTML = data.phone_numbers;
    console.log(data)
})

// const nav = document.getElementsByClassName("nav-link");
// for(let i = 0; i < nav.length; i++){
//     console.log(nav[i].href)
// }



// setTimeout(() => {
//     console.log("restaurantName:", restaurantName)
//     console.log("address:", address)
//     console.log("rating:", rating)
// }, 2000)

// setTimeout(() => {
// //    console.log(photoArr)
// }, 2000)