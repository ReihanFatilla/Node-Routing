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
    })
}

http.createServer((req, res) => {
    res.writeHead(200, {"content-type" : "text/html"})
    
    const url = req.url;
    if(url === "/home"){
        renderHTML("/home", res)
    } else if (url === "/Page2"){
        renderHTML("/page2", res)
    } else if (url === "/Page3"){
        renderHTML("/page3", res)
    } else if (url === "/Page4"){
        renderHTML("/page4", res)
    } else if (url === "/Page5"){
        renderHTML("/page5", res)
    } 
})