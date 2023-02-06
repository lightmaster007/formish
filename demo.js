// app.get("/tbojzb",(req,res)=>{
//     res.sendFile(__dirname+"/views/admin.html")
// })

//End

// app.post('/mailing',(req,res)=>{
//     try {
//         let emailVal = req.body["email"]
//         let body = `<h4>Hey there,</h4>
//         <p>We are contacting you with regards to the session booking</p>
//         <p>Please click on the following link to fill up the confidentiality form</p>
//         <a href="https://goodmind.co/confidentiality-form/" target="_blank">Confidentiality form</a>
//         <p>Use the following link for payments to confirm your booking.</p>
//         <a href="https://imjo.in/YZE5cj" target="_blank">Payment Link</a>
//         `;
//         if(sendMail(emailVal,body,1)){
//             res.redirect("/tbojzb");
//         }

//     }catch (error) {
//         console.log("some error occured "+e)
//         res.send("<h1>An Error has Occured, Please Reload</h1>")
//     }
// })