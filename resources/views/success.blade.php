<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Hello {{$name}}</title>
        <link href="/css/app.css" rel="stylesheet">
        <script src="https://unpkg.com/react@17/umd/react.production.min.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js" crossorigin></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
        <script src="https://d3js.org/d3.v7.min.js"></script>
    </head>
    <body style="background-color: #b3b3b3 ;">
        <div class="container-fluid mb-6">
            <div class="card rounded shadow m-2 p-2  text-right">
                <div class="row align-items-center justify-content-end m-2" style="float: right !important;">
                    <div class="col-8" ><div id="timediv"></div></div>
                    <div class="col-sm"><h1>Hello, {{$name}}</h1></div>
                    <div class="col-sm">
                        <img src="{{URL('/images/me.jpeg')}}" class="img-thumbnail rounded-circle border-dark" alt="Responsive image" width="75" height="75">
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid" style="height: calc(100vh - 400px);">
            <div class="card rounded shadow m-2 p-2 h-100">
            <div id="tictactoe"></div>
            <div id="like_button_container"></div>
            </div>
        </div>
        <script src="/js/app.js"></script>
        <script defer  src="/js/likebutton.jsx"></script>
        <script defer  src="/js/time.jsx" type="text/babel"></script>
        <script defer  src="/js/tictactoe.jsx" type="text/babel"></script>
    </body>
</html>