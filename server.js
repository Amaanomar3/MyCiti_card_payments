const express = require("express");
const path = require("path");
const app = express();
const fileName = "index.html";
const port = 4200;
const StripeKey = sk_test_51OYVJKG1L19JAQOsoBmnRMnwxmVVe1Afazq0VbSOE51s4xLHKrwtx9DZeyeKWVNox0NvfOXcHuTibKfHVkAS28vV00rrgXdLxj

app.get("/", (req, res) => {
  const options = {
    root: path.join(__dirname),
  };

  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.error("Error sending file:", err);
    } else {
      console.log("Sent:", fileName);
    }
  });
});

app.get("/api/getCheckout",(req,res) =>{
  

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Authorization", "Bearer ");
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("customer_creation","always");
    urlencoded.append("line_items[0][price_data][unit_amount]",);
    urlencoded.append("line_items[0][price_data][currency]",);
    urlencoded.append("line_items[0][price_data][product_data][description]",);
    urlencoded.append("line_items[0][price_data][product_data][name]",);
    urlencoded.append("line_items[0][quantity]",);
    urlencoded.append("billing_address_collection","auto");
    urlencoded.append("allow_promotion_codes",);
    urlencoded.append("locale", "en");
    urlencoded.append("cancel_url",);
    urlencoded.append("success_url",);
    urlencoded.append("payment_intent_data[description]",);
    urlencoded.append("payment_intent_data[statement_descriptor]",);
    urlencoded.append("customer_email",);
    urlencoded.append("mode", "payment");
    urlencoded.append("payment_method_types[0]", "card");
   
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    
    fetch("https://api.stripe.com/v1/checkout/sessions", requestOptions)
      .then(response => response.json())
      .then(result => )
      .catch(error => console.log('error', error));
    
    
    }
})

app.listen(port, () => {
  console.log(`Server is listening to ${port}`);
});

