// import express from 'express'
require('dotenv').config({path:__dirname+'/./../.env'});
const express = require('express')
const app = express()
const port = 8080

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})

const { Client } = require('pg')
const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.PORT
})

client.connect()

let username
client.query('SELECT username FROM users', (err, res) => {
    if (err) {
        console.log(err.stack)
    } else {
        username = res.rows[0].username
    }
})

app.get('/user', function (req, res, next) {
    res.status(200).send('Hello, ' + username + '!')
})
