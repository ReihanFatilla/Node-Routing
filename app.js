const http = require("http")
const fs = require("fs")

const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if(err) {
            res.writeHead(404)
            res.write("Page Not Found")
        } else {
            res.write(data)
        }
        res.end();
    })
}

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type" : "text/html"})
    
    const url = req.url;

    switch(url){
        case "/home":
            renderHTML("./home.html", res);
            break;
        case "/about":
            renderHTML("./about.html", res);
            break;
        default:
            renderHTML("./error.html", res)
            break;       
    }
}).listen(3000, () => {
    console.log("Server is Running on 3000")
})



