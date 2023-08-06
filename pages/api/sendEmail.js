import nodeMailer from "nodemailer";

export default async function sendEmail(req, res) {
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "ogedengbeoluwasemilogo@gmail.com",
      pass: process.env.NEXT_PUBLIC_PORTFOLIO_GMAIL_PASSWORD,
    },
  });

  try {
    let response = "";
    response = await transporter.sendMail({
      to: "ogedengbeoluwasemilogo@gmail.com",
      from: "ogedengbeoluwasemilogo@gmail.com", // Use the email address or domain you verified above
      subject: req.body.subject,
      text: `I am ${req.body.fullName}. The reason for contacting you is this: ${req.body.message}. This is my email right here: ${req.body.email}. I contacted you through your portfolio`,
    });
    return res.status(200).json({ response });
  } catch (error) {
    console.error(error);

    if (error) {
      return res.status(500).json({ error });
    }
  }
}
