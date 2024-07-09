import { Server } from "socket.io";
import http from "http";
import express from "express";


const app = express();

const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }


});

const userSocketMap:{[key:string]:string}={};

io.on("connection",(socket)=>{
    console.log("a user connected",socket.id);

    const userId = socket.handshake.query.userId as string;

    if(userId){
        userSocketMap[userId]=socket.id
    }
    // io.emit() is used to send events to all connected clients
    io.emit("getOnlineUsers");

    socket.on("disconnect",()=>{
       delete userSocketMap[userId];
       io.emit("getOnlineUsers",Object.keys(userSocketMap)); 
    })

})

