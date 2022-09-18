const express = require('express');
const app = express();
const ejs = require("ejs")
const bodyParser = require('body-parser');
const { response } = require('express');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get("/",(req,res) => {
    res.send(`
    <html>
        <body>
            <form action="/" method="get">
                <input type="text" name="age" value="" />
                <input type="submit" value="submit"/>
            </form>
        </body>
    </html>
`)
})

app.post("/",urlencodedParser,(req,res) => {
    response = {
        age:req.body.age
     };
     const template = `
     <html>
        <body>
            <p>
                your age is ${age}
            </p>
        </body>
     </html>
     `

     ejs.render(template,{age:response.age})
})

app.listen(8080)

