import express from "express";
import multer from "multer";
import cors from "cors";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsControllers.js";

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

// linux
//const upload = multer({dest: "./upload"});

const routes = (app) => {
  // Habilita o middleware `express.json()` para permitir que o servidor
  // parse dados JSON enviados no corpo das requisições (req.body)
  app.use(express.json());
  app.use(cors(corsOptions));
  // Rota GET para o endpoint "/posts" que recupera todos os posts
  app.get("/posts", listarPosts);
  app.post("/posts", postarNovoPost);
  app.post("/upload", upload.single("imagem"), uploadImagem);
  app.put("/upload/:id", atualizarNovoPost);
}

export default routes;
