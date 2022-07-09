import nodemailer from "nodemailer"
//Nodemailer
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "zamiipx@gmail.com",
    pass: process.env.NODEMAILER_KEY,
  },
  port: 465,
  host: 'smtp.gmail.com'
});

function sendOrderNodeMailer(order) {
  const message = {message:"THANKS FOR YOUR ORDER!!",order: order.items[0]}
  
  let newOrder = {
    from: "zamiipx@gmail.com",
    to: order.email,
    subject: `Purchase details for order ${order._id}`,
    text: JSON.stringify(message, null, "\t"),
  };
  transporter.sendMail(newOrder, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email with order details sent!");
    }
  });
}

export {sendOrderNodeMailer}