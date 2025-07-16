const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'axdenis03@gmail.com',
      pass: 'gxah txru bnfl agqj' // Use your Gmail App Password here!
    }
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'axdenis03@gmail.com',
      subject: subject,
      text: `${message}\n\nNume: ${name}\nEmail: ${email}`
    });
    res.status(200).json({ message: 'Email trimis cu succes!' });
  } catch (error) {
    res.status(500).json({ message: 'Eroare la trimiterea emailului.', error });
  }
});

app.listen(5000, () => console.log('Server started on port 5000'));