import mongoose from "mongoose";

const resultsSchema = new mongoose.Schema({
    test: String,
    help: String,
    clientDate: String,
    q1: String,
    q2: String,
    q3: String,
    q4: String,
    q5: String,
    q6: String,
    q7: String,
    q8: String,
    q9: String,
    q10: String,
    q11: String,
    q12: String,
    q13: String,
    q14: String,
    q15: String,
    q16: String,
    q17: String,
    q18: String,
    q19: String,
    q20: String,
    phone: String,
    email: String
});

const Result = mongoose.model("Result",resultsSchema) 

let userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  confidentiality: {
    type: String,
    default: "Pending",
  },
  results: [
    {
      test: String,
      help: String,
      clientDate: String,
      q1: String,
      q2: String,
      q3: String,
      q4: String,
      q5: String,
      q6: String,
      q7: String,
      q8: String,
      q9: String,
      q10: String,
      q11: String,
      q12: String,
      q13: String,
      q14: String,
      q15: String,
      q16: String,
      q17: String,
      q18: String,
      q19: String,
      q20: String,
    },
  ],

  sessions: [
    {
      bookingId: {
        type: Number,
      },
      startTime: {
        type: Date,

      },
      endTime: {
        type: Date,

      },
      description: {
        type: String,
      },
      status: {
        type: String,

      },
      counsellor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Counsellors",
      },
      paymentStatus: {
        type: Boolean,
        default: false,
      },
      paymentId: {
        type: String,
      },
      paymentURL: {
        type: String,
      },
    },
  ],
  role: {
    type: String,
    default: "user",
  },
});

let User = mongoose.model("Users", userSchema);

async function savetoDB(req,res,next){
    try {
      let newResult = new Result(req.body);
    await newResult.save();

    let {email,phone} = req.body
    let userFound = await User.findOne({email})
    
    if(userFound){
      delete req.body.email;
      delete req.body.phone
    
    
      userFound.results.push(req.body)
      await userFound.save()
    }else{
      userFound = new User({email: email, phone: phone})  
      
      delete req.body.email;
      delete req.body.phone
    
      
      userFound.results.push(req.body)
     
      await userFound.save()
    }
    req.body.email = userFound.email;
    req.body.phone = userFound.phone

    next()
  } catch (error) {
    console.log(error)
    res.send("<h1>An Error has Occured, Please Reload</h1>")
  }
}





export default savetoDB;