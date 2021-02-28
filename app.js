const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const reload = require('reload');
const bodyParser = require('body-parser');
const verifier = require('email-verify');
const pincodeDirectory = require('india-pincode-lookup');
require("./public/db/conn"); //mongo
const userSchema = require("./public/db/userschema");
const ordersSchema = require("./public/db/ordersSchema");
const addtocartSchema = require("./public/db/addtocartSchema");
const addrSchema = require("./public/db/addrschema");
const invoiceSchema = require("./public/db/invoicesSchema");
const adminSchema = require("./public/db/adminSchema");
const bcrypt = require('bcrypt')
var PhoneNumber = require('awesome-phonenumber');
require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const nodemailer = require("nodemailer");
var easyinvoice = require('easyinvoice');
var fs = require('fs');


/* client.messages
  .create({
     body: 'Congratulations! \nYour order has been placed sucessfully! Thank you for shopping with us.',
     from: 'whatsapp:+14155238886',
     to: 'whatsapp: process.env.ph_no'
   })
  .then(message => console.log(message))
  .catch(err=> console.log(err)); */


let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


app.use(express.static(__dirname + '/public'))
app.use(express.static(path.join(__dirname, '/public/assets')));
app.use('/build/', express.static(path.join(__dirname, 'node_modules/three/build')));
app.use('/jsm/', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

//feedback
app.post('/feedback',(req,res)=>{
  let info = {
    from: req.body.email,
    to: 'psyclemail@gmail.com',
    subject: "Customer Feedback",
    text: req.body.text,
  };
  
  transporter.sendMail(info, (err, data) => {
    if (err) { console.log(err) }
    else {
      console.log(data);
      res.send(true);
    };
  })
})



//email verify

var email;
app.post('/emailChecker', (req, res) => {
  email = req.body.email;
  verifier.verify(email, function (err, info) {
    if (info.success == true) {
      console.log("email exists");
      res.json({ exist: true });
    }
    else if (info.success == false) {
      console.log("email doesn't exist");
      res.json({ exist: false });
    } else if (err) {
      res.json({ exist: false });
    }
  });
});


//registration

app.post('/register', (req, res) => {   //inserting to db

  var name = req.body.name;
  var passwd = req.body.passwd;

  userSchema.findOne({ email: req.body.email })
    .then((result) => {
      /* console.log("104", result); */
      if (req.body.email != undefined) {

        if (passwd != "") {
          console.log("if chala");
          result.name = name;
          result.password = passwd;
          result.save()
            .then((result) => { res.send("passwdtoo") })
            .catch((err) => { console.log("116", err) })
        }
        else {
          console.log("else chala");
          userSchema.updateOne({ email: req.body.email }, { $set: { name: name } })
            .then((result) => { res.send("nameonly") })
        }

      }
      else {
        const userReg = new userSchema({
          name: name,
          email: email,
          password: passwd
        })
        userReg.save() // await is optional
          .then(function () {
            res.json({ emailExisting: false });
            var namesplit = name.split(' ');
            let info = {
              from: 'Psycle India <psyclemail@gmail.com>',
              to: email,
              subject: "Welcome to the Psycle Family!",
              text: `Hello ${namesplit[0]}. We are thrilled to welcome you to the Psycle family. Thanks for signing up!`,
            };

            transporter.sendMail(info, (err, data) => {
              if (err) { console.log(err) }
              else (console.log(data));
            })
          })
          .catch(function (err) {
            console.log(err);
            if (err) {
              if (err.name === 'MongoError' && err.code === 11000) {
                // Duplicate username
                console.log("user already exists!!");
                res.json({ emailExisting: true });
              }
              // Some other error
              /* return res.status(422).send(err); */
            }
          });
      }
    })
    .catch((err) => { console.log(err); })
});

//login
app.post('/login', (req, res) => {
  email = req.body.email;
  passwd = req.body.passwd;
  /*   console.log(email);
    console.log(passwd); */
  userSchema.findOne({ email: email })
    .then(
      function (result) {
        if (result) {
          console.log("email valid");
          bcrypt.compare(passwd, result.password)
            .then(function (result1) {
              if (result1) {
                console.log("password valid");
                res.json({ email: true, passwd: true });
              } else {
                console.log("password invalid");
                res.json({ email: true, passwd: false });
              }
            })
        }
        else {
          console.log("email invalid");
          res.json({ email: false, passwd: null });
        }
      })
})

app.post('/address-validation', function (req, res) {
  var phone = req.body.phone;
  var pin_code = req.body.pin_code;
  var alt_phone = req.body.alt_phone;
  var pincode = pincodeDirectory.lookup(pin_code);
  if (pincode[0]) {
    pin_code = true;
  }
  else {
    pin_code = false;
  }
  var phvalid = new PhoneNumber(phone, 'IN');
  if (phvalid.isValid() == true) {
    phvalid = true;
  }
  else {
    phvalid = false;
  }

  if (alt_phone != "") {
    var altphvalid = new PhoneNumber(alt_phone, 'IN');
    if (altphvalid.isValid() == true) {
      res.json({ pin_code: pin_code, ph_valid: phvalid, altph_valid: true });
    }
    else if (altphvalid.isValid() == false) {
      res.json({ pin_code: pin_code, ph_valid: phvalid, altph_valid: false });
    }
  }
  else {
    res.json({ pin_code: pin_code, ph_valid: phvalid, altph_valid: null });
  }
})


app.post('/address-save', async (req, res) => {
  var name = req.body.name;
  var phone = req.body.phone;
  var state = req.body.state;
  var city = req.body.city;
  var locality = req.body.locality;
  var pin_code = req.body.pin_code;
  var address = req.body.address;
  var landmark = req.body.landmark;
  var alt_phone = req.body.alt_phone;
  var email = req.body.email;

  const userAddress = new addrSchema({
    email: email,
    name: name,
    phone: phone,
    state: state,
    city: city,
    locality: locality,
    pincode: pin_code,
    address: address,
    landmark: landmark,
    alt_phone: alt_phone
  })

  addrSchema.findOne({              //4th april
    email: email
  })
    .then(function (result) {          //4th april
      result.email = email
      result.name = name
      result.phone = phone
      result.state = state
      result.city = city
      result.locality = locality
      result.pincode = pin_code
      result.address = address
      result.landmark = landmark
      result.alt_phone = alt_phone
      result.save(function (err, data) {
        if (!err) {
          res.json({ addr_save: 'success' })
        }
      })

    })
    .catch(function (err) {

      userAddress.save()
        .then(function (res) {
          console.log("line 258", res);
        })
        .catch(function (err) {
          console.log("line 261", err);
        });

      res.json({ addr_save: 'success' })

    });
});


app.get('/user-address-details/:email', function (req, res) {          //add 31 march
  addrSchema.findOne({ email: req.params.email })
    .then(result => {
      if (result) {
        res.send(result)
      }
    })
})

app.get('/update-cred/:email', async (req, res) => {          //5th apr
  userSchema.findOne({ email: req.params.email })
    .then(result => {
      if (result) {
        res.send(result)
      }
    })
})


app.post('/custom-cycle', async (req, res) => {
  var email = req.body.email;
  var framemodel = req.body.framemodel;
  var frameprice = req.body.frameprice;
  var handlebarmodel = req.body.handlebarmodel;
  var handlebarprice = req.body.handlebarprice;
  var seatmodel = req.body.seatmodel;
  var seatprice = req.body.seatprice;
  var cablemodel = req.body.cablemodel;
  var cableprice = req.body.cableprice;
  var mudguardmodel = req.body.mudguardmodel;
  var mudguardprice = req.body.mudguardprice;
  var forkmodel = req.body.forkmodel;
  var forkprice = req.body.forkprice;
  var gearmodel = req.body.gearmodel;
  var gears = req.body.gears;
  var gearprice = req.body.gearprice;
  var tyremodel = req.body.tyremodel;
  var tyreprice = req.body.tyreprice;
  var total = req.body.total;
  var clickedfrom = req.body.clickedfrom;

  if (clickedfrom == "placeorder") {
    const ordersData = new ordersSchema({
      email: email,
      framemodel: framemodel,
      frameprice: frameprice,
      handlebarmodel: handlebarmodel,
      handlebarprice: handlebarprice,
      seatmodel: seatmodel,
      seatprice: seatprice,
      cablemodel: cablemodel,
      cableprice: cableprice,
      mudguardmodel: mudguardmodel,
      mudguardprice: mudguardprice,
      forkmodel: forkmodel,
      forkprice: forkprice,
      gearmodel: gearmodel,
      gears: gears,
      gearprice: gearprice,
      tyremodel: tyremodel,
      tyreprice: tyreprice,
      total: total
    })


    await ordersData.save()
      .then(function (res) {
    client.messages
    .create({
      body: `Congratulations! \nYour order with order ID: ${res._id.toString().toUpperCase()} has been placed sucessfully! Thank you for shopping with us.`,
      from: '+17082907319',
      to: process.env.ph_no
    })
    .then(message => console.log(message))
    .catch(err => console.log(err));

    
    let info = {
      from: 'Psycle India <psyclemail@gmail.com>',
      to: email,
      subject: "Congratulations!",
      text: `Your order with order ID: ${res._id.toString().toUpperCase()} has been placed sucessfully! Thank you for shopping with us.`,
    };
    
    transporter.sendMail(info, (err, data) => {
      if (err) { console.log(err) }
      else (console.log(data));
    })

      })
      .catch(function (err) {
        console.log(err);
      });


  }

  if (clickedfrom == "addtocart") {
    const addtocartData = new addtocartSchema({
      email: email,
      framemodel: framemodel,
      frameprice: frameprice,
      handlebarmodel: handlebarmodel,
      handlebarprice: handlebarprice,
      seatmodel: seatmodel,
      seatprice: seatprice,
      cablemodel: cablemodel,
      cableprice: cableprice,
      mudguardmodel: mudguardmodel,
      mudguardprice: mudguardprice,
      forkmodel: forkmodel,
      forkprice: forkprice,
      gearmodel: gearmodel,
      gears: gears,
      gearprice: gearprice,
      tyremodel: tyremodel,
      tyreprice: tyreprice,
      total: total
    })


    await addtocartData.save()
      .then(function (res) {
      })
      .catch(function (err) {
        console.log(err);
      });
  }
})

app.post('/orders', (req, res) => {
  ordersSchema.find({ email: req.body.email })
    .sort({ $natural: -1 })
    .then((data) => { res.json(data); });
})


app.post('/addtocart', async (req, res) => {
  await addtocartSchema.find({ email: req.body.email })
    .sort({ $natural: -1 })
    .then((data) => { res.json(data); });
})

app.post('/transfer-data', (req, res) => {
  addtocartSchema.findOne({ _id: req.body.id })
    .sort({ $natural: -1 })
    .then((data) => {
      const ordersData = new ordersSchema({
        email: data.email,
        framemodel: data.framemodel,
        frameprice: data.frameprice,
        handlebarmodel: data.handlebarmodel,
        handlebarprice: data.handlebarprice,
        seatmodel: data.seatmodel,
        seatprice: data.seatprice,
        cablemodel: data.cablemodel,
        cableprice: data.cableprice,
        mudguardmodel: data.mudguardmodel,
        mudguardprice: data.mudguardprice,
        forkmodel: data.forkmodel,
        forkprice: data.forkprice,
        gearmodel: data.gearmodel,
        gears: data.gears,
        gearprice: data.gearprice,
        tyremodel: data.tyremodel,
        tyreprice: data.tyreprice,
        total: data.total
      })

      ordersData.save()
        .then((result) => {
          addtocartSchema.deleteOne({ _id: req.body.id })
            .then((res1) => {
              client.messages
                .create({
                  body: 'Congratulations! \nYour order has been placed sucessfully! Thank you for shopping with us.',
                  from: '+17082907319',
                  to: process.env.ph_no
                })
                .then(message => console.log(message))
                .catch(err => console.log(err));

              let info = {
                from: 'Psycle India <psyclemail@gmail.com>',
                to: result.email,
                subject: "Welcome to the Psycle Family!",
                text: 'Congratulations! \nYour order has been placed sucessfully! Thank you for shopping with us.',
              };

              transporter.sendMail(info, (err, data) => {
                if (err) { console.log(err) }
                else (console.log(data));
              })
            })
            .catch((err) => { console.log(err); })
          res.send(true);
        })
    })
    .catch((err) => { console.log(err); })
})


//remove from cart
app.post('/removefrmcart', async (req, res) => {
  await addtocartSchema.deleteOne({ _id: req.body.id })
    .then((res1) => {
      console.log(res1);
      res.json({ delete: true });
    })
    .catch((err) => { console.log(err); })
})

//cancel order
app.post('/cancel-order', async (req, res) => {
  var email;
  await adminSchema.find().then(result => { email = result[0].email; })
  ordersSchema.deleteOne({ _id: req.body.id })
    .then((res) => {
      console.log("427", res);
      let info = {
        from: 'Psycle India <psyclemail@gmail.com>',
        to: email,
        subject: "Order cancellation",
        text: `Order for Custom Psycle (${req.body.frame}) with order ID: ${req.body.id.toUpperCase()} has been cancelled.`,
      };

      transporter.sendMail(info, (err, data) => {
        if (err) { console.log(err) }
        else (console.log(data));
      })

    })
})


//invoice api
let imgPath = path.resolve('./', './public/Assets/Stickers/invoice.png');
// Function to encode file data to base64 encoded string
function base64_encode(img) {
  // read binary data
  let png = fs.readFileSync(img);
  // convert binary data to base64 encoded string
  return new Buffer.from(png).toString('base64');
};

app.post('/invoice', async (req, res) => {
  var name, address, locality, pincode, city, state, phone, status, payment, framemodel, frameprice, handlebarmodel,
    handlebarprice, seatmodel, seatprice, cablemodel, cableprice, mudguardmodel, mudguardprice, forkmodel, forkprice,
    gearmodel, gears, gearprice, tyremodel, tyreprice, orderdate, orderdate2;


  await addrSchema.findOne({ email: req.body.email })
    .then((result) => {
      name = result.name;
      address = result.address;
      locality = result.locality;
      pincode = result.pincode;
      city = result.city;
      state = result.state;
      phone = result.phone;
    })

  await ordersSchema.findById(req.body.id)
    .then((result) => {
      framemodel = result.framemodel;
      frameprice = result.frameprice;
      handlebarmodel = result.handlebarmodel;
      handlebarprice = result.handlebarprice;
      seatmodel = result.seatmodel;
      seatprice = result.seatprice;
      cablemodel = result.cablemodel;
      cableprice = result.cableprice;
      mudguardmodel = result.mudguardmodel;
      mudguardprice = result.mudguardprice;
      forkmodel = result.forkmodel;
      forkprice = result.forkprice;
      gearmodel = result.gearmodel;
      gears = result.gears;
      status = result.delivery_status;

      if (status == "Delivered") {
        payment = "Payment Received";
      } else {
        payment = "Payment Due";
      }
      if (gears == 8) {
        gearmodel = 'SM-3420(8 geared)'
      }
      else if (gears == 16) {
        gearmodel = 'SM-3420(16 geared)'
      }
      else if (gears == 21) {
        gearmodel = 'SM-3420(21 geared)'
      }

      gearprice = result.gearprice
      tyremodel = result.tyremodel;
      tyreprice = result.tyreprice;
      total = result.total;
      orderdate = result.orderdate;
      var orderdate1 = new Date(orderdate);
      orderdate2 = orderdate1.toString().slice(8, 10) + "-" + orderdate1.toISOString().slice(5, 7) + "-" + orderdate1.toISOString().slice(0, 4);
    })

  var invoicedate = new Date();
  var data = {
    //"documentTitle": "RECEIPT", //Defaults to INVOICE
    "currency": "INR",
    "taxNotation": "vat", //or gst
    "marginTop": 25,
    "marginRight": 25,
    "marginLeft": 25,
    "marginBottom": 25,
    "logo": `${base64_encode(imgPath)}`, //or base64
    //"logoExtension": "png", //only when logo is base64
    "sender": {
      "company": "Psycle Pvt. Ltd.",
      "address": "Asiatic Arcade, A/213, 1st Floor",
      "zip": "400609",
      "city": "Thane",
      "country": "India"
      //"custom1": "custom value 1",
      //"custom2": "custom value 2",
      //"custom3": "custom value 3"
    },
    "client": {
      "company": name,
      "address": address + ", " + locality + ", " + phone,
      "zip": pincode,
      "city": city,
      "country": "India",
      "custom1": `${state}`,
      "custom2": `Order ID: ${req.body.id.toUpperCase()}`,
      "custom3": `Order Date: ${orderdate2} -------------------- Payment Status: ${payment}`
    },
    "invoiceNumber": req.body.id.toUpperCase(),
    "invoiceDate": invoicedate.toISOString().slice(8, 10) + "-" + invoicedate.toISOString().slice(5, 7) + "-" + invoicedate.toISOString().slice(0, 4),
    "products": [
      {
        "quantity": "1",
        "description": `Frame Color: ${framemodel}`,
        "tax": 0,
        "price": frameprice
      },
      {
        "quantity": "1",
        "description": `Handlebar: ${handlebarmodel}`,
        "tax": 0,
        "price": handlebarprice
      },
      {
        "quantity": "1",
        "description": `Seat: ${seatmodel}`,
        "tax": 0,
        "price": seatprice
      },
      {
        "quantity": "1",
        "description": `Cable: ${cablemodel}`,
        "tax": 0,
        "price": cableprice
      },
      {
        "quantity": "1",
        "description": `Mudguard: ${mudguardmodel}`,
        "tax": 0,
        "price": mudguardprice
      },
      {
        "quantity": "1",
        "description": `Fork: ${forkmodel}`,
        "tax": 0,
        "price": forkprice
      },
      {
        "quantity": "1",
        "description": `Gear: ${gearmodel}`,
        "tax": 0,
        "price": gearprice
      },
      {
        "quantity": "1",
        "description": `Tyre: ${tyremodel}`,
        "tax": 0,
        "price": tyreprice
      }
    ],
    "bottomNotice": "Prices per item are inclusive of all taxes. Payment must be done on delivery. Thank you for shopping with us!"
  };

  /*   easyinvoice.createInvoice(data, function (result) {
        fs.writeFileSync("invoice.pdf", result.pdf, 'base64');
    }); */

  var invoiceExists;
  await invoiceSchema.findOne({ order_id: req.body.id })
    .then((res1) => {
      if (res1) {
        res.json({ data: res1.invoice });
        /*     easyinvoice.createInvoice(res.invoice, function (result) {
              fs.writeFileSync("invoice.pdf", result.pdf, 'base64');
            }); */
        invoiceExists = true;
      }
      else {
        res.json({ data: data });
        /*     easyinvoice.createInvoice(data, function (result) {
              fs.writeFileSync("invoice.pdf", result.pdf, 'base64');
          }); */
      }
    })

  if (status == "delivered" && invoiceExists != true) {
    /*     res.json({ data: data })
        easyinvoice.createInvoice(data, function (result) {
          fs.writeFileSync("invoice.pdf", result.pdf, 'base64');
      }); */

    const invoiceData = new invoiceSchema({
      order_id: req.body.id,
      invoice: data
    })

    await invoiceData.save()
      .then(function (res) {
      })
      .catch(function (err) {

      });
  }

  if (req.app.from == "admin") {
    res.json({ data: data });
  }

})

//admin

/* app.get('/a',(req,res)=>{
  const admindata = new adminSchema({
    name: "Alex Francis",
    email: "psyclemail@gmail.com",
    password: "1Qqq"
  })
  admindata.save()
  .then((result)=>{console.log(result);})
}) */


app.post('/admin-validation', (req, res) => {
  adminSchema.findOne({ email: req.body.email })
    .then((result) => {
      if (result) {
        bcrypt.compare(req.body.password, result.password)
          .then(function (result1) {
            if (result1) {
              res.json({ email: true, passwd: true });
            } else {
              res.json({ email: true, passwd: false });
            }
          })
      } else {
        res.json({ email: false });
      }
    })
})

app.post('/admin-orders', (req, res) => {
  ordersSchema.find()
    .sort({ $natural: -1 })
    .then((data) => { res.json(data); });
})

app.get('/admin-get-addr', (req, res) => {
  addrSchema.find()
    .then(data => { res.send(data) })
})

app.post('/admin-update-deliver-status', (req, res) => {
  ordersSchema.findOne({ _id: req.body.id })
    .then((result) => {
      result.delivery_status = req.body.status;
      result.save()
        .then((result1) => {
          res.send(true)
        })
    })
})


//prefill admin data

app.get('/admin-data-get/:email', (req, res) => {
  adminSchema.findOne({ email: req.params.email })
    .then((result => { res.send(result) }))
})

//update admin data
app.post('/admin-data-update', (req, res) => {
  var passwd = req.body.passwd;
  adminSchema.findOne({ email: req.body.email })
    .then((result) => {

      if (req.body.name != '' && req.body.passwd != '') {

        adminSchema.updateOne({ email: req.body.email }, { $set: { name: req.body.name } })
          .then((result) => { })

        result.password = passwd;
        result.save()
          .then((result) => { res.send("passwd") })
          .catch((err) => { })


      }
      else if (req.body.name != '' && req.body.passwd == '') {
        adminSchema.updateOne({ email: req.body.email }, { $set: { name: req.body.name } })
          .then((result) => { res.send(true) })
      }
    })

  if (req.body.image != '') {
    adminSchema.updateOne({ email: req.body.email }, { $set: { profile_pic: req.body.image } })
      .then((result) => { })
  }
})

app.post('/admin-del-profile-pic', (req, res) => {
  adminSchema.updateOne({ email: req.body.email }, { $set: { profile_pic: '' } })
    .then((result) => { })
})

//about us

app.get('/site-info', async (req, res) => {
  var users, orders;
  await userSchema.find()
    .then(result => { users = result.length })

  await ordersSchema.find({ delivery_status: 'Delivered' })
    .then((result) => { orders = result.length })

  res.json({ users: users, orders: orders })
})

//insights
app.get('/admin-insights/:email', async (req, res) => {
  var admin, users, delivered, pending;
  await adminSchema.findOne({ email: req.params.email })
    .then((result) => {
      admin = result.name;
    })

  await userSchema.find()
    .then((result) => { users = result.length });

  await ordersSchema.find()
    .then((result) => {
      delivered = result.filter(results => results.delivery_status == 'Delivered').length;
      pending = result.filter(results => results.delivery_status != 'Delivered').length;

    })
  res.json({ admin, users, delivered, pending })
})

app.get('/statisics', async (req, res) => {
  ordersSchema.find({ delivery_status: 'Delivered' })
    .then((result) => {
      //frame
      var py = result.filter(results => results.framemodel == 'Plain Yellow').length;
      var pb = result.filter(results => results.framemodel == 'Plain Blue').length;
      var po = result.filter(results => results.framemodel == 'Plain Orange').length;
      var pg = result.filter(results => results.framemodel == 'Plain Green').length;
      var pr = result.filter(results => results.framemodel == 'Plain Red').length;
      var mf = result.filter(results => results.framemodel == 'Metal Finish').length;
      var cg = result.filter(results => results.framemodel == 'Camo Grey').length;
      var cc = result.filter(results => results.framemodel == 'Camo Cream').length;
      var cgr = result.filter(results => results.framemodel == 'Camo Green').length;
      var cb = result.filter(results => results.framemodel == 'Camo Brown').length;

      //handle
      var hb_2734 = result.filter(results => results.handlebarmodel == 'HB-2734').length;
      var hb_8473 = result.filter(results => results.handlebarmodel == 'HB-8473').length;

      //seat
      var sb = result.filter(results => results.seatmodel == 'Leather Black').length;
      var sbr = result.filter(results => results.seatmodel == 'Leather Brown').length;
      var sg = result.filter(results => results.seatmodel == 'Leather Grey').length;
      var scgy = result.filter(results => results.seatmodel == 'Camo Grey').length;
      var scc = result.filter(results => results.seatmodel == 'Camo Cream').length;
      var scgn = result.filter(results => results.seatmodel == 'Camo Green').length;

      //cable
      var cblb = result.filter(results => results.cablemodel == 'Black').length;
      var cblg = result.filter(results => results.cablemodel == 'Green').length;
      var cblbrwn = result.filter(results => results.cablemodel == 'Brown').length;
      var cblgry = result.filter(results => results.cablemodel == 'Grey').length;

      //mudguard
      var mgn = result.filter(results => results.mudguardmodel == 'None').length;
      var mg84 = result.filter(results => results.mudguardmodel == 'MG-3984').length;
      var mg23 = result.filter(results => results.mudguardmodel == 'MG-1723').length;
      var mg85 = result.filter(results => results.mudguardmodel == 'MG-9485').length;

      //fork
      var fkb = result.filter(results => results.forkmodel == 'Black').length;
      var fkm = result.filter(results => results.forkmodel == 'Metal').length;

      //gear
      var gr1 = result.filter(results => results.gears == '1').length;
      var gr8 = result.filter(results => results.gears == '8').length;
      var gr16 = result.filter(results => results.gears == '16').length;
      var gr21 = result.filter(results => results.gears == '21').length;

      //tyre
      var trrzb = result.filter(results => results.tyremodel == 'Razor-03 Black').length;
      var trrzg = result.filter(results => results.tyremodel == 'Razor-03 Green').length;
      var trrzbl = result.filter(results => results.tyremodel == 'Razor-03 Blue').length;
      var trrzbr = result.filter(results => results.tyremodel == 'Razor-03 Brown').length;
      var trmnb = result.filter(results => results.tyremodel == 'Monster-03 Black').length;
      var trmng = result.filter(results => results.tyremodel == 'Monster-03 Green').length;
      var trmnbl = result.filter(results => results.tyremodel == 'Monster-03 Blue').length;
      var trmnbr = result.filter(results => results.tyremodel == 'Monster-03 Brown').length;


      /*       console.log([trrzb.length, trrzg.length, trrzbl.length, trrzbr.length,
              trmnb.length, trmng.length, trmnbl.length, trmnbr.length]) */

      res.json({
        frame: [py, pb, po, pg, pr, mf, cg, cc, cgr, cb],
        handle: [hb_2734, hb_8473],
        seat: [sb, sbr, sg, scgy, scc, scgn],
        cable: [cblb, cblg, cblbrwn, cblgry],
        mudguard: [mgn, mg84, mg23, mg85],
        fork: [fkb, fkm],
        gear: [gr1, gr8, gr16, gr21],
        tyre: [trrzb, trrzg, trrzbl, trrzbr, trmnb, trmng, trmnbl, trmnbr]
      })
    })

})

const server = http.createServer(app);
server.listen(3000, () =>
  console.log('Visit http://127.0.0.1:3000')
);

reload(app);
