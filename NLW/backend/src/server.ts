import express from 'express';
import 'express-async-errors';
import path from 'path';
import cors from 'cors';

import './database/connection';

import routes from './routes';
import errorHandler from './erros/handler';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);


app.listen(3333);

// rota -> conjunto 
// /users (usuário) -> recurso

// ***métodos HTTP -> GET, POST, PUT, DELETE***
// GET -> buscar uma informação (lista, item)
// POST -> criando uma nova informação
// PUT -> editando uma informação
// DELETE -> deletando uma informação

// parâmetros
// Query Params: http://localhost:3333/users?search=diego&page=2
// Route Params: http://localhost:3333/users/1 (identificar um recurso)
// Body: http://localhost:3333/users



// REQ (requisição) / RES (resposta)
// localhost:3333

// Driver nativo, Query builder, ORM (Object Relational Mapping)


// users
// User

// 3 users
// User User User