#!/usr/bin/env node

const {createServer} = require('http')
const {get} = require('request')
const {load} = require('cheerio')

const server = createServer();
const site = process.argv[2];

const getTitle = (site) => {
	console.log("check");
server.on('request', (req, res) => {
	console.log("check2");
  get(`http://${site}.com`, (err, _, body) => {
    const $ = load(body)
    console.log("title", $('title').text());

    // const topStories = []
    // $('title').each((i, title) => {
    //   const $title = $(title)
    //   topStories.push({
    //     title: $title.text(),
    //     link: $title.attr('href')
    //   })
    // })

 	 })
	})
}

getTitle(site);

server.listen(7575);
