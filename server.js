import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();

app.use(express.static("uploads"));
routes(app);

// Inicia o servidor Express na porta 3000. A função callback (seta de função)
// é executada quando o servidor estiver ouvindo.
app.listen(3000, () => {
  console.log("Servidor escutando..."); // Mensagem de log indicando que o servidor está ativo
});

