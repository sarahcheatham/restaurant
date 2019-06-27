const options = {
    method: "GET",
    headers: {
        "Accept": "application/json",
        "user-key": "43fa3472a56997047cfd55fd7f5ce82f"
    },
}
let ratings = [];
let rating = 0;
fetch("https://developers.zomato.com/api/v2.1/restaurant?res_id=16917140", options)
.then(res => res.json())
.then(data => {
    const header = document.getElementById("header");
    header.innerHTML = data.name;

    const address = document.getElementById("address");
    address.innerHTML = data.location.address

    const phoneNumber = document.getElementById("phone-number")
    phoneNumber.innerHTML = data.phone_numbers;

    const highlights = document.getElementById("highlights");

    for(let i = 0; i < data.highlights.length; i++){
        const span = document.createElement('span');
        span.className += 'highlight-item';
        span.innerHTML = data.highlights[i];
        highlights.appendChild(span)
    }

    const review = document.getElementById("review");
    review.innerHTML = data.all_reviews.reviews[0].review.review_text;
    data.all_reviews.reviews.map((review, index)=>{
        ratings.push(review.review.rating)
    })
    rating = data.all_reviews.reviews[0].review.rating;
    
})
setTimeout(()=>{
    const drawStars = (id) => {
        console.log("id:", id)
        const canvas = document.getElementById(id);
        const ctx = canvas.getContext("2d"); 
        const drawStar = (cx,cy,spikes,outerRadius,innerRadius) => {
            let rot = Math.PI / 2*3;
            let x = cx;
            let y = cy;
            let step = Math.PI / spikes;
        
            ctx.beginPath();
            ctx.moveTo(cx,cy-outerRadius)
            for(i = 0; i < spikes; i++){
                x = cx + Math.cos(rot) * outerRadius;
                y = cy + Math.sin(rot) * outerRadius;
                ctx.lineTo(x,y)
                rot += step
        
                x = cx + Math.cos(rot) * innerRadius;
                y = cy + Math.sin(rot) * innerRadius;
                ctx.lineTo(x,y)
                rot += step
            }
            ctx.lineTo(cx,cy-outerRadius);
            ctx.closePath();
            ctx.lineWidth = 5;
            ctx.strokeStyle = '#e7ec96';
            ctx.stroke();
            ctx.fillStyle = '#e7ec7b';
            ctx.fill();
        }
        drawStar(25,25,5,15,7.5);
    }
    drawStars("canvas-0")
    drawStars("canvas-1")
    drawStars("canvas-2")
    drawStars("canvas-3")
    drawStars("canvas-4") 
}, 2000)






