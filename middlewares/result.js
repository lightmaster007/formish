function calculateResult(req, res, next) {
    let body = req.body
    let test = body["test"];
    let score = calculateScore(body);
    let level = findLevel(score, test);
    let test2 = findTest2(test);
    let email = body["email"];
    console.log(email, body)
    if (test === "Relationship") {
        test = "Relationship Issues";
        test2 = "Relationship Issues";
    }
    let newBody = ``;
    if (body["help"] === "want") {
        newBody = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,500;0,700;1,700&display=swap" rel="stylesheet">  
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <style>
        *{
            font-family: 'ubuntu',sans-serif;
            scroll-behavior: smooth;
            letter-spacing: 0.05rem;
        }
        
        body{
            max-width: 100%;
        
            background-color: #b4dde4;
        }
        
        .top-nav{
            margin-top: 1rem;
        }

        .top-nav a img {
            // width: 15rem;

          }

        .container{
            background-color: #faf1e3;
            padding: 2rem;
            border-radius: 50px;
            margin-bottom : 2rem;
        
        } 
        
        .row .col{
            height: 3rem;
        }
        
        .form-control{
            height: 3rem;
            background-color: #1fb4bb;
            color: white;
        }
        
        .form-control:hover{
            background-color: #b4dde4;
        }
        .form-control:focus{
            background-color: #1fb4bb;
        }
        
        @media only screen and (max-width: 1000px) {
            
            body{
                max-width: 100%;
            }
            .container{
                /* margin-left: 8vw; */
                width: 85%;
                
                margin: 20px 30px;
                padding: 1.5rem;
                
            }
        
            .top-nav{
                padding-bottom: 0.5rem;
        
            }
        
            .fs-3{
                font-size: 1.2rem !important;
            }
        
            .fs-2{
                font-size: 1.3rem !important;
            }
        
            .form-control{
                font-size: 0.8rem;
            }
        
        } 
        
        </style>
        <title>Result</title>
    </head>
    <body>
        <nav class="top-nav text-center">
            <a href="https://www.goodmind.co/" target="_blank">

                <img src="https://ik.imagekit.io/GoodMind/logo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675345705958"
                alt="Goodmind" class="img-fluid">

            </a>
        </nav>
        <br><br>
        <p class="fs-1 fw-normal text-center">Your Results</p>
        <div class="container "> 
            <div class="h2 fw-bold title">${level} ${test}</div> <br>
            <p class="fs-4 fw-light">Your score falls in the range of <span class="title2">${level} ${test2}</span> </p>
            <p class="fs-4 fw-light"> 
                We recommend that you talk with one of our mental health counsellors for an evaluation and to discuss what your results mean.
            </p>
            <p class="fs-4 fw-light">We care about your mental well-being - and are here to give you the support you need.</p>            
            <p class="fs-4 fw-light">Click on the link to schedule your first appointment: <a href="https://goodmind.app/booking/index.html" class="link-info" target="_blank">Book</a></p>
            <br>
    
            <div class="row">
                <div class="col">
                    <form action="/email" method="post">
                        <button class="btn btn-block form-control btn-lg rounded-5 email" >Email Results</button></div>
                        <input type="text" name="emailVal" value=${email} hidden>
                        <input type="text" name="title" value=${test} hidden>
                        <input type="text" name="title2" value=${test2} hidden>
                        <input type="text" name="level" value=${level} hidden>
                        <input type="text" name="help" value="want" hidden>
                    </form>
                <div class="col">
                  <form action="/index" method="get" target="_blank">
                    <button id="btnSubmit" class="btn  btn-block form-control btn-lg rounded-5" >Take another test</button>
                  </form>
                </div>
            </div>
        </div>  
        
    <script type="application/javascript" src="https://sdki.truepush.com/sdk/v2.0.4/app.js" async></script>
    <script>
    var truepush = window.truepush || [];
            
    truepush.push(function(){
        truepush.Init({
            id: "63cd7e76892d8e034dcd61c5"
        },function(error){
          if(error) console.error(error);
        })
    })
    </script>           
    </body>
    </html>`;
    } else {
        newBody = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,500;0,700;1,700&display=swap" rel="stylesheet">  
    
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <style>
        *{
            font-family: 'ubuntu',sans-serif;
            scroll-behavior: smooth;
            letter-spacing: 0.05rem;
        }
        
        body{
            max-width: 100%;
        
            background-color: #b4dde4;
        }
        
        .top-nav{
            margin-top: 2rem;
        }
        
        .container{
            background-color: #faf1e3;
            padding: 3rem;
            border-radius: 50px;
            
        
        } 
        
        .row .col{
            height: 3rem;
        }
        
        .form-control{
            height: 3rem;
            background-color: #1fb4bb;
            color: white;
        }
        
        .form-control:hover{
            background-color: #b4dde4;
        }
        .form-control:focus{
            background-color: #1fb4bb;
        }
        
        @media only screen and (max-width: 1000px) {
            
            body{
                max-width: 100%;
            }
            .container{
                /* margin-left: 8vw; */
                width: 85%;
                
                margin: 20px 30px;
                padding: 1.5rem;
                
            }
        
            .top-nav{
                padding-bottom: 0.5rem;
        
            }
        
            .fs-3{
                font-size: 1.2rem !important;
            }
        
            .fs-2{
                font-size: 1.3rem !important;
            }
        
            .form-control{
                font-size: 0.8rem;
            }
        
        } 
        
        </style>
        <title>Result</title>
    </head>
    <body>
        <nav class="top-nav text-center">
            <a href="https://www.goodmind.co/" target="_blank">
            <img src="https://ik.imagekit.io/GoodMind/logo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675345705958"
            alt="Goodmind" class="img-fluid">
            </a>
        </nav>
        <br><br>
        <p class="fs-1 fw-normal text-center">Your Results</p>
        <div class="container "> 
            <div class="h2 fw-bold title">${level} ${test}</div> <br>
            <p class="fs-4 fw-light">Your family/friend/spouse falls under the range for <span class="title2">${level} ${test2}</span> </p>
            <p class="fs-4 fw-light"> 
            We recommend you suggest him/her talk with one of our mental health counsellors for an evaluation and to discuss what your results mean.
            </p>
            <p class="fs-4 fw-light">We care about your mental well-being - and are here to give you the support you need.</p>            
            <p class="fs-4 fw-light">Click on the link to schedule an appointment: <a href="https://goodmind.app/booking/index.html" class="link-info" target="_blank">Book</a></p>
            <br>
    
            <div class="row">
                <div class="col">
                    <form action="/email" method="post">  
                        <button class="btn btn-block form-control btn-lg rounded-5 email" >Email Results</button>
                        <input type="text" name="emailVal" value=${email} hidden>
                        <input type="text" name="title" value=${test} hidden>
                        <input type="text" name="title2" value=${test2} hidden>
                        <input type="text" name="level" value=${level} hidden>
                        <input type="text" name="help" value="to" hidden>
                    </form>  
                </div>
                <div class="col">
                  <form action="/index" method="get" target="_blank">
                    <button id="btnSubmit" class="btn  btn-block form-control btn-lg rounded-5" >Take another test</button>
                  </form>
                </div>
            </div>      
            
    <script type="application/javascript" src="https://sdki.truepush.com/sdk/v2.0.4/app.js" async></script>
    <script>
    var truepush = window.truepush || [];
            
    truepush.push(function(){
        truepush.Init({
            id: "63cd7e76892d8e034dcd61c5"
        },function(error){
          if(error) console.error(error);
        })
    })
    </script>         
    </body>
    </html>`;
    }
    req.newBody = newBody;
    next()
}

//calculating the total score from the input values
function calculateScore(data) {
    let sum = 0;
    const keys = Object.keys(data);
    keys.forEach((key) => {
        if (key.startsWith("q")) {
            sum += Number(data[key]);
        }
    });
    return sum;
}

//Calculating the severity of the problem
function findLevel(score, test) {
    let severity = "";
    let mild = "Mild";
    let moderate = "Moderate";
    let severe = "Severe";

    switch (test) {
        case "Anxiety":
            if (score <= 20) {
                severity = mild;
            } else if (score > 20 && score <= 32) {
                severity = moderate;
            } else if (score > 32) {
                severity = severe;
            }
            break;
        case "Stress":
            if (score <= 40) {
                severity = mild;
            } else if (score > 40 && score <= 60) {
                severity = moderate;
            } else if (score > 60) {
                severity = severe;
            }
            break;
        case "Depression":
            if (score <= 15) {
                severity = mild;
            } else if (score > 15 && score <= 30) {
                severity = moderate;
            } else if (score > 30) {
                severity = severe;
            }
            break;
        case "PTSD":
            if (score <= 45) {
                severity = mild;
            } else if (score > 45 && score <= 65) {
                severity = moderate;
            } else if (score > 65) {
                severity = severe;
            }
            break;
        case "Relationship":
            if (score <= 50) {
                severity = mild;
            } else if (score > 50 && score <= 60) {
                severity = moderate;
            } else if (score > 60) {
                severity = severe;
            }
            break;
        case "OCD":
            if (score <= 25) {
                severity = mild;
            } else if (score > 25 && score <= 36) {
                severity = moderate;
            } else if (score > 35) {
                severity = severe;
            }
            break;
    }
    return severity;
}

//finding the second occurence of test
function findTest2(test) {
    if (test == "OCD") {
        return "Obsessive Compulsive Disorder";
    } else if (test == "PTSD") {
        return "Post Traumatic Stress Disorder";
    } else {
        return test;
    }
}

export default calculateResult;
