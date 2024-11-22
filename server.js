import express from "express";


const posts = [
  {
    id: 1,
    descricao: "Uma foto teste",
    imagem: "https://placecats.com/millie/300/150"
  },
  {
    id: 2,
    descricao: "Gato dormindo em uma caixa",
    imagem: "https://placecats.com/millie/300/150"
  },
  {
    id: 3,
    descricao: "Paisagem montanhosa",
    imagem: "https://placecats.com/millie/300/150"
  },
  {
    id: 4,
    descricao: "Cachorro brincando no parque",
    imagem: "https://placecats.com/millie/300/150"
  },
  {
    id: 5,
    descricao: "Comida deliciosa",
    imagem: "https://placecats.com/millie/300/150"
  },
  {
    id: 6,
    descricao: "Cidade à noite",
    imagem: "https://placecats.com/millie/300/150"
  },
  {
    id: 7,
    descricao: "Bebê sorrindo",
    imagem: "https://placecats.com/millie/300/150"
  }
];


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
