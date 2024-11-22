import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";


console.log(process.env.STRING_CONEXAO);
console.log(process.env.STRING_CONEXAO);
await conectarAoBanco(process.env.STRING_CONEXAO);


const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});


function buscarPostPorID(id) {
  return posts.findIndex((post) => {
    return post.id == Number(id);
  });
}

app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorID(req.params.id);
  res.status(200).json(posts[index]);
});
