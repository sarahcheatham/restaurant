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
    const header = document.getElementById("reservation-header");
    header.innerHTML = data.name;
   

    const address = document.getElementById("reservation-address");
    address.innerHTML = data.location.address

    const phoneNumber = document.getElementById("reservation-phone-number")
    phoneNumber.innerHTML = data.phone_numbers;
});