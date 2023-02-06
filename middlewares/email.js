import * as dotenv from 'dotenv'
dotenv.config();
import nodemailer from "nodemailer";

function sendEmail(req,res,next){
    try{
        let postParams = req.body;
        console.log(postParams)
        let emailVal = postParams["emailVal"];
        let headTitle = postParams["title"];
        let textTitle = postParams["title2"];
        let levelVal = postParams["level"];
        let helpVal = postParams["help"];
        let htbody = "";
        if(headTitle === "Relationship"){
            headTitle="Relationship Issues";
            textTitle = "Relationship Issues";
        }else if(headTitle === "OCD"){
            textTitle = "Obsessive Compulsive Disorder";
        }
        if(helpVal==="want"){
            htbody = `<h1>${levelVal} ${headTitle}</h1>
            <p style="font-size:15px;">Your score falls in the range of ${levelVal} ${textTitle}</p> 
            <p style="font-size:15px;">We recommend that you talk with one of our mental health counsellors for an evaluation and to discuss what your results mean.</p>
            <p style="font-size:15px;">Click on the link to schedule your first appointment: <a href="https://booking.goodmind.co" target="_blank">booking.goodmind.co</a></p>
            `; 
        } else{
            htbody = `<h1>${levelVal} ${headTitle}</h1>
            <p style="font-size:15px;">Your family/friend/spouse falls under the range for ${levelVal} ${textTitle}</p> 
            <p style="font-size:15px;">We recommend you suggest him/her talk with one of our mental health counsellors for an evaluation and to discuss what your results mean.</p>
            <p style="font-size:15px;">Click on the link to schedule an appointment: <a href="https://booking.goodmind.co" target="_blank">booking.goodmind.co</a></p>
            `;
        }
        if(sendMail(emailVal,htbody,0)){
            next()
        }
        
    }
    catch(e){
        console.log("some error occured "+e)
        res.send("<h1>An Error has Occured, Please Reload</h1>")
    };
}


//Sending the email
async function sendMail(email,body,flag) {
    try {
        console.log(email)
        let transporter = nodemailer.createTransport({
            host: "mail.goodmind.co",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            },
            tls: {rejectUnauthorized: false},
        });
        if(flag==0){
            let info = await transporter.sendMail({
                from: `"Team Goodmind" <${process.env.EMAIL_USERNAME}>`,
                subject: 'Mental Health Assessment Result', // Subject line
                to: email,
                html: body
            });

            console.log(info)
            return true;
        }else{
            let info = await transporter.sendMail({
                from: `"Team Goodmind" <${process.env.EMAIL_USERNAME}>`,
                subject: 'Goodmind session booking', // Subject line
                to: email,
                html: body
            });
            return true;
        }

        


    } catch (error) {
        console.log(error);
        return false;
    }
}

export default sendEmail