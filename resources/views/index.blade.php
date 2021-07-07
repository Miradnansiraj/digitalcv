<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Blades</title>
        <link href="/css/app.css" rel="stylesheet">
    </head>
    <body style="background-color: #F3F6FB;">
        <div class="container-fluid" id="logincard">
            <div class="row align-items-center">
                <div class="col-4 mx-auto">
                    <div class="card border-light rounded shadow p-2 m-2 ">
                        <div class="card-body">
                            <form method="POST" action="/loginattempt">
                                @csrf
                                <h1>Login</h1>
                                <h3 class="text-danger">{{$message ?? ""}}</h3>
                                <div class="row p-1">
                                    <div class="col">UserName: </div>
                                    <div class="col"><input type="username" name="username"></div>
                                </div>
                                <div class="row p-1">
                                    <div class="col">Password: </div>
                                    <div class="col"><input type="password" name="password"></div>
                                </div>
                                <div class="row p-1">
                                    <div class="col"><button type="submit" class="btn btn-primary">Log In</button></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="/js/app.js"></script>
    </body>
</html>