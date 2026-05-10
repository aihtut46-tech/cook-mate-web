<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

  <title>Westibe</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">

  <style>

    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
    }

    body{
      font-family:'DM Sans',sans-serif;
      background:#0f172a;
      color:white;
      overflow-x:hidden;
    }

    .container{
      width:100%;
      max-width:1200px;
      margin:auto;
      padding:20px;
    }

    /* NAVBAR */

    .navbar{
      display:flex;
      justify-content:space-between;
      align-items:center;
      padding:20px 0;
      flex-wrap:wrap;
    }

    .logo{
      font-size:28px;
      font-weight:700;
      color:#38bdf8;
    }

    .nav-links{
      display:flex;
      gap:20px;
      flex-wrap:wrap;
    }

    .nav-links a{
      text-decoration:none;
      color:white;
      transition:0.3s;
    }

    .nav-links a:hover{
      color:#38bdf8;
    }

    /* HERO */

    .hero{
      min-height:90vh;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:50px;
      padding:60px 0;
    }

    .hero-text{
      flex:1;
    }

    .hero-text h1{
      font-size:64px;
      line-height:1.1;
      margin-bottom:20px;
    }

    .hero-text p{
      font-size:18px;
      opacity:0.8;
      margin-bottom:30px;
      line-height:1.7;
    }

    .btn{
      display:inline-block;
      padding:15px 28px;
      background:#38bdf8;
      color:#000;
      border-radius:12px;
      text-decoration:none;
      font-weight:700;
      transition:0.3s;
    }

    .btn:hover{
      transform:translateY(-3px);
    }

    .hero-image{
      flex:1;
      display:flex;
      justify-content:center;
    }

    .hero-image img{
      width:100%;
      max-width:500px;
      border-radius:24px;
    }

    /* FEATURES */

    .features{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:20px;
      margin-bottom:100px;
    }

    .card{
      background:#1e293b;
      padding:30px;
      border-radius:20px;
      transition:0.3s;
    }

    .card:hover{
      transform:translateY(-5px);
    }

    .card h3{
      margin-bottom:15px;
    }

    .card p{
      opacity:0.7;
      line-height:1.6;
    }

    /* RESPONSIVE */

    @media(max-width:992px){

      .hero{
        flex-direction:column;
        text-align:center;
      }

      .features{
        grid-template-columns:1fr 1fr;
      }

    }

    @media(max-width:768px){

      .navbar{
        flex-direction:column;
        gap:20px;
      }

      .nav-links{
        justify-content:center;
      }

      .hero-text h1{
        font-size:42px;
      }

      .hero-text p{
        font-size:16px;
      }

      .features{
        grid-template-columns:1fr;
      }

      .btn{
        width:100%;
        text-align:center;
      }

    }

    @media(max-width:480px){

      .hero-text h1{
        font-size:32px;
      }

      .container{
        padding:15px;
      }

    }

  </style>
</head>
<body>

  <div class="container">

    <!-- NAVBAR -->

    <nav class="navbar">

      <div class="logo">Westibe</div>

      <div class="nav-links">
        <a href="#">Home</a>
        <a href="#">Recipes</a>
        <a href="#">Premium</a>
        <a href="#">Contact</a>
      </div>

    </nav>

    <!-- HERO -->

    <section class="hero">

      <div class="hero-text">

        <h1>
          Cook Smarter <br>
          With Westibe AI
        </h1>

        <p>
          Discover delicious recipes, AI cooking help,
          premium meal plans, and smart food ideas
          for every device.
        </p>

        <a href="#" class="btn">
          Get Started
        </a>

      </div>

      <div class="hero-image">

        <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop" alt="Food">

      </div>

    </section>

    <!-- FEATURES -->

    <section class="features">

      <div class="card">
        <h3>AI Recipes</h3>
        <p>
          Generate recipes instantly with AI suggestions.
        </p>
      </div>

      <div class="card">
        <h3>Premium Plans</h3>
        <p>
          Monthly and yearly subscription support.
        </p>
      </div>

      <div class="card">
        <h3>All Devices</h3>
        <p>
          Works perfectly on iPhone, Android, Tablet and Laptop.
        </p>
      </div>

    </section>

  </div>

</body>
</html>
