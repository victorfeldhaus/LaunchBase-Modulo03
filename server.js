const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server, 
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    const about = {
        avatar_url: "https://avatars2.githubusercontent.com/u/46694915?s=400&u=e3099ee22484b534c5bbcb2e0d9d4d7f9194640d&v=4",
        name: "Victor Feldhaus",
        role: "Desenvolvedor Front e Back-End Junior",
        description: 'Programador inicante, focado em aprender e evoluir. Aluno do LaunchBase BootCamp da <a href="https://rocketseat.com.br" target="_blank">RocketSeat</a>',
        links: [
            {name: "Github", url: "https:github.com/victorfeldhaus"},
            {name: "Twitter", url: ""},
            {name: "Linkedin", url: "https://www.linkedin.com/in/victor-feldhaus-a449201a1"}
        ]
    }

    

    return res.render("about", { about })
})

server.get("/about", function(req, res) {
    const about = {
        avatar_url: "https://avatars2.githubusercontent.com/u/46694915?s=400&u=e3099ee22484b534c5bbcb2e0d9d4d7f9194640d&v=4",
        name: "Victor Feldhaus",
        role: "Desenvolvedor Front e Back-End Junior",
        description: 'Programador inicante, focado em aprender e evoluir. Aluno do LaunchBase BootCamp da <a href="https://rocketseat.com.br" target="_blank">RocketSeat</a>',
        links: [
            {name: "Github", url: "https:github.com/victorfeldhaus"},
            {name: "Twitter", url: ""},
            {name: "Linkedin", url: "https://www.linkedin.com/in/victor-feldhaus-a449201a1"}
        ]
    }

    

    return res.render("about", { about })
})

server.get("/portfolio", function(req, res) {
    return res.render("portfolio", {items: videos})
})

server.get("/video", function(req, res) {
    const id = req.query.id 

    const video = videos.find(function(video) {
        return video.id == id
    })

    if(!video) {
        return res.send("video not found")
    }

    return res.render("video", { item:video })
})

server.listen(5000, function() {
    console.log("server is running")
})