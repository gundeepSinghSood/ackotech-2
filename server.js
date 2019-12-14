const express = require('express')
const next = require('next')
const allRoutes = require('./routes')
const bodyParser = require('body-parser')
var nodemailer = require('nodemailer');


const port = parseInt(process.env.PORT, 10) || 3005
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = allRoutes.getRequestHandler(app)

// send mail
var transport = {
  service: "Gmail",
  debug: true,
  auth: {
    user: 'gsood02@gmail.com',
    pass: '9988445520'
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});
// end send mail

app.prepare()
  .then(() => {
    const server = express()
    // server.use(handler)
    server.use(bodyParser.urlencoded({ extended: true }))
    server.use(bodyParser.json())
    
    
    server.post('/send', (req, res, next) => {
      var name = req.body.name
      var email = req.body.email
      var message = req.body.message
      var content = `name: ${name} \n email: ${email} \n message: ${message}`

      var mail = {
        from: name,
        to: email,
        subject: '',
        text: content
      }

      transporter.sendMail(mail, (err, data) => {
        if (err) {
          res.json({
            msg: err
          })
        } else {
          res.json({
            msg: 'success'
          })
        }
      })
    })

    server.get('*', (req, res) => {
      return handler(req, res)
      
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port} [${process.env.NODE_ENV}]`);
    })
  })