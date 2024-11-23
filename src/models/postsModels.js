import 'dotenv/config'
import conectarAoBanco from "../config/dbConfig.js";
import  { ObjectId } from "mongodb";


const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);


// Função assíncrona que recupera todos os posts do banco de dados
export async function getTodosPosts() {
  // Acessa o banco de dados usando a conexão estabelecida (`conexao`)
  // e seleciona o database "imersao-instabytes"
  const db = conexao.db("imersao-instabytes");

  // Obtém a coleção "posts" do banco de dados selecionado
  const colecao = db.collection("posts");

  // Utiliza o método `find()` para recuperar todos os documentos da coleção
  // e converte o resultado para um array usando `toArray()`
  return colecao.find().toArray();
}

export async function criarPost(novoPost) {
  const db = conexao.db("imersao-instabytes");
  const colecao = db.collection("posts");
  return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost) {
  const db = conexao.db("imersao-instabytes");
  const colecao = db.collection("posts");
  const objID = ObjectId.createFromHexString(id);

  return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});
}

