<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Dashboard</title>
        <link href="/css/app.css" rel="stylesheet">
        <link href="/css/timeline.css" rel="stylesheet">
        <link rel="stylesheet" href="/css/animate.css"/>
        <script src="https://unpkg.com/react@17/umd/react.production.min.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js" crossorigin></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
        <script src="https://d3js.org/d3.v7.min.js"></script>
        <script src="/js/wow.js"></script>
    </head>
    <body>
        <!-- First Card -->
        <div class="container-fluid p-2 mb-6">
          <div class="card py-2 rounded shadow-sm align-items-center">
              <div class="row align-items-center h-100 w-100" >
                  <div class="col-6" ><div id="timediv"></div></div>
                  <div class="col-sm">
                      <div class="row align-items-center text-right">
                        <!-- The name is loaded in controller because initially it was planned to be fetched from database-->
                          <div class="col-sm  justify-content-end wow bounceIn"><h1>{{$name}}</h1></div>
                          <div class="col-sm">
                              <img src="{{URL('/images/me.jpeg')}}" class="img-thumbnail rounded-circle border-dark float-left zoomable" 
                                  alt="Responsive image" width="75" height="75">
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
        <!-- Second Card -->
        <div class="container-fluid p-2 mb-6 content-row">
            <div class="row">
                <div class="col">
                    <div class="card rounded shadow-sm p-4 h-100 align-items-center mx-auto">
                        <h1>My Skills</h1>
                        <svg class="barchart mb-3 rounded" width="500" height="300" style="background-color: #40e0d0; border: 2px solid black;">
                        </svg>
                        <h5 class="text-muted">Powered by <span style="color: orange;">D3.js</span></h5>
                    </div>
                </div>
                <div class="col">
                    <div class="card rounded shadow-sm p-4 h-100 align-items-center mx-auto justify-content-center text-center">
                        <h1>Who am I?</h1>
                        <p>
                            I am Mir Adnan Siraj, 26 years old bangladeshi living in United Arab Emirates.<br/>
                            I have a bachelors degree in Computer Engineering from Ajman University of Science & Technology
                            and I specialize in Web Development both Front-end and Back-end.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Third Card -->
        <div class="container-fluid p-2 mb-6 content-row">
            <div class="card rounded shadow-sm p-4 h-100 align-items-center mx-auto" style="min-height: 200px;">
                <h1>My tools</h1>
                <div class="row m-2 h-100 w-100">
                    <div class="col-sm" id="htmlicon"></div>
                    <div class="col-sm" id="cssicon"></div>
                    <div class="col-sm" id="jsicon"></div>
                    <div class="col-sm" id="phpicon"></div>
                    <div class="col-sm" id="laravelicon"></div>
                    <div class="col-sm" id="reacticon"></div>
                    <div class="col-sm" id="vueicon"></div>
                    <div class="col-sm" id="bsicon"></div>
                    <div class="col-sm" id="d3icon"></div>
                    <div class="col-sm" id="wowicon"></div>
                </div>
            </div>
        </div>
        <!-- Fourth Card -->
        <div class="container-fluid p-2 mb-6">
            <div class="card rounded shadow-sm p-4 h-100">
                <h1 class="text-center">My Experience</h1>
            </div>
        </div>
        <!-- Timeline -->
        <div class="container-fluid">
            <div class="timeline">
                <div class="container right wow bounceInRight">
                    <div class="shadow-sm rounded content">
                      <h2>2021</h2>
                      <h3>Amazon</h2>
                      <h4 class="text-secondary">Warehouse Associate</h4>
                    </div>
                  </div>
                  <div class="container right wow bounceInRight">
                    <div class="shadow-sm rounded content">
                      <h2>2020</h2>
                      <h3>Amazon</h2>
                      <h4 class="text-secondary">Delivery Associate</h4>
                    </div>
                  </div>
                <div class="container left wow bounceInLeft">
                  <div class="shadow-sm rounded content">
                    <h2>2020</h2>
                    <h3>Ajman University of Science & University</h2>
                    <h4 class="text-secondary">Bsc. Computer Engineering</h4>
                  </div>
                </div>
                <div class="container right wow bounceInRight">
                    <div class="shadow-sm rounded content">
                      <h2>2019</h2>
                      <h3>Feedback market research</h2>
                      <h4 class="text-secondary">market researcher</h4>
                    </div>
                  </div>
                  <div class="container right wow bounceInRight">
                    <div class="shadow-sm rounded content">
                      <h2>2018</h2>
                      <h3>Ashtel</h2>
                      <h4 class="text-secondary">Huawei sales associate</h4>
                    </div>
                  </div>
                  <div class="container right wow bounceInRight">
                    <div class="shadow-sm rounded content">
                      <h2>2017</h2>
                      <h3>LG</h2>
                      <h4 class="text-secondary">Sales Associate</h4>
                    </div>
                  </div>
                  <div class="container right wow bounceInRight">
                    <div class="shadow-sm rounded content">
                      <h2>2016</h2>
                      <h3>Souq</h2>
                      <h4 class="text-secondary">Warehouse Associate</h4>
                    </div>
                  </div>
                <div class="container left wow bounceInLeft">
                  <div class="shadow-sm rounded content">
                    <h2>2015</h2>
                    <h3>The English School, UAQ</h2>
                    <h4 class="text-secondary">12th grade</h4>
                  </div>
                </div>
                <div class="container left wow bounceInLeft">
                  <div class="shadow-sm rounded content">
                    <h2>2012</h2>
                    <h3>Royal Academy Private School</h2>
                    <h4 class="text-secondary">10th grade</h4>
                  </div>
                </div>
              </div>
        </div>
        <script src="/js/app.js"></script>
        <script defer>new WOW().init();</script>
        <script defer  src="/js/time.jsx" type="text/babel"></script>
        <script defer src="/js/barchart.js"></script>
        <script defer src="/js/loadicons.jsx"  type="text/babel"></script>
    </body>
</html>