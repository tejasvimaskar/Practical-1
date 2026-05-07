<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>World Explorer</title>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

<style>
html{scroll-behavior:smooth;}
body{font-family:'Poppins',sans-serif;background:#f5f7fa;}

/* NAVBAR */
.navbar{background:linear-gradient(45deg,#0d1b2a,#1b263b);}
.navbar.scrolled{background:#000 !important;}
.nav-link:hover{color:#ff9500 !important;}

/* DROPDOWN */
.dropdown-item:hover{background:#ff9500;color:white;}

/* CAROUSEL */
.carousel-caption{
background:rgba(0,0,0,0.5);
padding:20px;
border-radius:10px;
}

/* CARDS */
.card{transition:0.3s;border:none;}
.card:hover{
transform:translateY(-8px);
box-shadow:0 10px 25px rgba(0,0,0,0.2);
}

/* BLOG IMAGES */
.card img{
width:100%;
height:250px;
object-fit:cover;
border-radius:10px;
filter:brightness(0.95) contrast(1.05);
}
.card:hover img{
filter:brightness(1.05) contrast(1.1);
}

/* BUTTON */
.btn-custom{
background:linear-gradient(45deg,#ff7b00,#ff9500);
color:white;
border:none;
}
.btn-custom:hover{transform:scale(1.05);}

/* SIDEBAR */
.sidebar .card{border-radius:15px;}

/* GALLERY */
.gallery-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:15px;
}

.gallery-item{
position:relative;
overflow:hidden;
border-radius:15px;
}

.gallery-item img{
width:100%;
height:250px;
object-fit:cover;
transition:0.5s;
}

.gallery-item:hover img{
transform:scale(1.1);
}

.overlay{
position:absolute;
bottom:0;
width:100%;
background:linear-gradient(to top,rgba(0,0,0,0.7),transparent);
color:white;
padding:10px;
text-align:center;
}

/* FOOTER */
footer{
    background:#0d1b2a;color:white;
    width: 100%;
    Margin-top : auto;
    margin: 0;
    }
    
</style>
</head>

<body>

<!-- NAVBAR -->
<nav class="navbar navbar-expand-lg navbar-dark sticky-top">
<div class="container">
<h1>
<a class="navbar-brand"><i class="fa-solid fa-earth-asia"></i> WorldExplorer</a></h1>

<button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
<span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="nav">
<ul class="navbar-nav ms-auto">

<li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
<li class="nav-item"><a class="nav-link" href="#blog">Blog</a></li>

<li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
<i class="fa-solid fa-address-book"></i> Contact
</a>
<ul class="dropdown-menu">
<li><a class="dropdown-item" href="#Instagram"><i class="fa-brands fa-instagram"></i> Instagram</a></li>
<li><a class="dropdown-item" href="#YouTube"><i class="fa-brands fa-youtube"></i> YouTube</a></li>
<li><a class="dropdown-item" href="#Facebook"><i class="fa-brands fa-facebook"></i> Facebook</a></li>
<li><a class="dropdown-item" href="#Email"><i class="fa-solid fa-envelope"></i> Email</a></li>
</ul>
</li>

</ul>
</div>
</div>
</nav>

<!-- CAROUSEL -->
<div id="travelCarousel" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-inner">

<div class="carousel-item active">
<img src="https://i.pinimg.com/736x/af/e8/40/afe840acdc43663503e7418944ccfec6.jpg" class="d-block w-100" style="height:80vh;object-fit:cover;">
<div class="carousel-caption"><h2>Dubai</h2></div>
</div>

<div class="carousel-item active">
<img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a" class="d-block w-100" style="height:80vh;object-fit:cover;">
<div class="carousel-caption"><h2>Paris</h2></div>
</div>

<div class="carousel-item">
<img src="https://i.pinimg.com/736x/cd/21/4b/cd214b387cda29d1e6ef0cfd0840ef2a.jpg" class="d-block w-100" style="height:80vh;object-fit:cover;">
<div class="carousel-caption"><h2>Maldives</h2></div>
</div>

<div class="carousel-item">
<img src="https://i.pinimg.com/736x/47/f2/ec/47f2ec7e357d586a026c629c8c522d1a.jpg" class="d-block w-100" style="height:80vh;object-fit:cover;">
<div class="carousel-caption"><h2>Switzerland</h2></div>
</div>

<div class="carousel-item">
<img src="https://i.pinimg.com/736x/68/02/71/680271a7599519f4fc54fe5b6ca861d7.jpg" class="d-block w-100" style="height:80vh;object-fit:cover;">
<div class="carousel-caption"><h2>Rome</h2></div>
</div>

</div>

<button class="carousel-control-prev" data-bs-target="#travelCarousel" data-bs-slide="prev">
<span class="carousel-control-prev-icon"></span>
</button>

<button class="carousel-control-next" data-bs-target="#travelCarousel" data-bs-slide="next">
<span class="carousel-control-next-icon"></span>
</button>
</div>

<!-- MAIN -->
<div class="container my-5" id="blog">
<div class="row">

<div class="col-lg-8">

<div class="card mb-4 shadow">
<img src="https://i.pinimg.com/736x/95/5e/e9/955ee9df31b64fdeb9cb0e85a410b7d2.jpg">
<div class="card-body">
<h3>Swiss Alps</h3>
<p>Explore mountains and scenic beauty.</p>
<button class="btn btn-danger" onclick="likePost()">
<i class="fa-sharp fa-solid fa-heart" style="color: rgb(247, 248, 250);"></i><span id="like">0</span>
</button>
</div>
</div>

<div class="card mb-4 shadow">
<img src="https://i.pinimg.com/736x/c3/5e/ed/c35eed95ef0f02fb1ea9de8404bcb474.jpg">
<div class="card-body">
<h3>New York Skyline</h3>
<p>Experience vibrant city life.</p>
</div>
</div>

<!-- COMMENTS -->
<div class="card p-4">
<h4>Leave Comment</h4>
<input id="name" class="form-control my-2" placeholder="Name">
<textarea id="comment" class="form-control my-2" placeholder="Comment"></textarea>
<button class="btn btn-custom" onclick="addComment()">Post</button>
<div id="commentList"></div>
</div>

</div>

<!-- SIDEBAR -->
 
<div class="col-lg-4 sidebar">
    <div class="card text-center p-3">
<section style="padding:40px; background:#f5f5f5; text-align:center;">
    
    <h2 style="font-size:28px; margin-bottom:20px;">About Me</h2>

    <div style="max-width:800px; margin:auto;">
        
        <img src="https://i.pinimg.com/736x/fa/c8/60/fac860d7e26b9cefea655f8d74001474.jpg" 
             style="width:150px; height:150px; border-radius:50%; object-fit:cover;">

        <h3 style="margin-top:15px;">Hey, I'm The Travel Guy!</h3>

        <p style="color:#555; font-size:16px; line-height:1.6;">
            I'm a full-time traveler and blogger sharing my journeys, travel tips, 
            and guides to help you explore the world easily and safely. 
            From beaches to mountains, I bring you the best experiences.
        </p>
        <a href="#Learn More">

        <button style="margin-top:15px; padding:10px 20px; border:none; 
                       background:#ff6600; color:white; border-radius:5px; cursor:pointer;">
            Learn More
        </button></a>

    </div>
</section>

</div>
</div>

<!-- GALLERY -->
<section class="container my-5">
<h2 class="text-center mb-4"><i class="fa-solid fa-image"></i> Travel Gallery</h2>

<div class="gallery-grid">

<div class="gallery-item">
<img src="https://i.pinimg.com/736x/86/28/44/8628446445eb6c971d1546b3eadb33f4.jpg" width="500px" height="250px">
<div class="overlay">Swiss Alps</div>
</div>

<div class="gallery-item">
<img src="https://i.pinimg.com/736x/a5/37/22/a53722b63b7eeb9c7d68b3968db91ed5.jpg" width="500px" height="250px">
<div class="overlay">Maldives</div>
</div>

<div class="gallery-item">
<img src="https://i.pinimg.com/736x/6d/19/aa/6d19aa9386ed6429ed7ccee7196acbbb.jpg" width="500px" height="250px">
<div class="overlay">Rome</div>
</div>

<div class="gallery-item">
<img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=800" width="500px" height="250px">
<div class="overlay">Paris</div>
</div>

<div class="gallery-item">
<img src="https://i.pinimg.com/1200x/3d/43/94/3d4394e16eb27eef2c0441ea837d91e2.jpg" width="500px" height="250px">
<div class="overlay">Dubai</div>
</div>

<div class="gallery-item">
<img src="https://i.pinimg.com/1200x/6d/51/fa/6d51fa90807d982f6ded222a04e3558f.jpg" width="500px" height="250px">
<div class="overlay">Bali</div>
</div>

<div class="gallery-item">
<img src="https://i.pinimg.com/736x/48/bc/2c/48bc2c9e8cdec09f050e097f27ce4714.jpg" width="500px" height="250px">
<div class="overlay">Kyoto</div>
</div>

<div class="gallery-item">
<img src="https://i.pinimg.com/736x/dc/2f/5c/dc2f5c72b28e8c061f8dfafc4cffec56.jpg" width="500px" height="250px">
<div class="overlay">Santorini</div> 
</div>

</div>
</section>

<!-- FOOTER -->
<footer style="background:#111; color:white; width:100%; margin:0; padding:40px 0;">

    <div style="display:flex; flex-wrap:wrap; justify-content:space-around; width:100%; padding:0 40px;">
        
        <!-- Logo / About -->
        <div style="flex:1; min-width:250px; margin-bottom:20px;">
            <h2 style="color:#ff6600;">WorldExplorer</h2>
            <p style="color:#bbb;">
                Exploring the world, one adventure at a time.
            </p>
        </div>

        <!-- Quick Links -->
        <div style="flex:1; min-width:200px; margin-bottom:20px;">
            <h3>Quick Links</h3>
            <p><a href="#Home" style="color:#bbb; text-decoration:none;">Home</a></p>
            <p><a href="#Destinations" style="color:#bbb; text-decoration:none;">Destinations</a></p>
            <p><a href="#Blog" style="color:#bbb; text-decoration:none;">Blog</a></p>
            <p><a href="#Contact" style="color:#bbb; text-decoration:none;">Contact</a></p>
        </div>

        <!-- Social -->
        <div style="flex:1; min-width:200px; margin-bottom:20px;">
            <h3>Follow Me</h3>
            <p style="color:#bbb;">Instagram | YouTube | Facebook</p>
        </div>

    </div>

    <!-- Bottom -->
    <div style="text-align:center; margin-top:20px; border-top:1px solid #333; padding-top:15px; color:#aaa;">
        © 2026 Travel Blog | All Rights Reserved
    </div>

</footer>


<script>
let count=0;
function likePost(){
count++;
document.getElementById("like").innerText=count;
}

function addComment(){
let name=document.getElementById("name").value;
let comment=document.getElementById("comment").value;

if(name===""||comment===""){alert("Fill fields");return;}

let div=document.createElement("div");
div.innerHTML="<b>"+name+"</b>: "+comment;
document.getElementById("commentList").appendChild(div);

document.getElementById("name").value="";
document.getElementById("comment").value="";
}
</script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>
