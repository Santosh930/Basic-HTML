




const nodemailer=require('nodemailer');
const sendMail=async (req,res)=>{

    
    const transporter = await nodemailer.createTransport({
        service:'gmail',
  auth: {
    
    user: "santoshtajpur@gmail.com",
    pass: "fottabpfppfpnsfg",
  },
    });
    // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'santoshtajpur@gmail.com', // sender address
    to: "shrutisri213@gmail.com,kumarsantoshtajpur@gmail.com,santoshtajpur@gmail.com", // list of receivers
    subject: "Job Application", // Subject line
    text: "Hello Manohar! This is your Job Offer", // plain text body
    html: "<b>Hello  Manohar Kumar .Where are you? Please Join on Monday from 9Am</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);


    res.send("I am sending mail");

}

module.exports=sendMail;

