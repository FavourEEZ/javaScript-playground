let image;
let prevImage;

function isSignedIn(){
    //make a form pop up

    return signedIn = true}

function randomiseImage(){
    const profileArray = ["https://media.istockphoto.com/photos/profile-of-a-serene-young-woman-picture-id1208585275?b=1&k=20&m=1208585275&s=170667a&w=0&h=GRkZwsUd_tNGZSyyk18hEu4hZlGS6G-kfTbXwFAOv5U=",
    "https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://www.mollybracken.com/eshop/87611-molly_default/87611-long-check-pattern-coat.jpg",
    "https://media.istockphoto.com/photos/beautiful-young-thai-girl-with-thai-style-dressing-ayutthaya-thailand-picture-id944419204?k=20&m=944419204&s=612x612&w=0&h=cvswAcWFvDlihCcaoWOJy5mJdQcq7z7iLHrVXQYMvS4="]
    prevImage = image
    image = profileArray[Math.floor(Math.random()*profileArray.length)]  
    console.log(`Previous image: ${prevImage}, Current image:${image}`)
  
    while (prevImage == image){
        image = profileArray[Math.floor(Math.random()*3)]
    }

    return image}

function changeProfile(event){
    console.log("Clicked")

    if (isSignedIn()){
        console.log("Signed In");
        let newImg = randomiseImage();
        console.log(newImg, typeof(newImg));
        let img = document.getElementById("img");
        img.src = newImg;
        console.log(img.src)

    } else {
        alert("You are not signed in!")
        }
    }
    
function displayCaption(event){
    // let text = document.querySelectorAll("img-details");
    let text = document.getElementById("img-details")

    if (event === "mouseLeave"){
        text.style.visibility = "hidden"
    } else {
        text.style.visibility = "visible"

    }

}
