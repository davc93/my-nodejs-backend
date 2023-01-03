import express, { Request, Response, ErrorRequestHandler, NextFunction } from "express";
import { config } from "./config";
import cors from 'cors'
import { errors } from "./network/errors";
import services from './components/services/network'
import users from './components/users/network'

const app = express();
// cors to controll cors origin
app.use(cors())
// To use json middle in responses
app.use(express.json());

app.use('/api/services',services)
app.use('/api/users',users)
app.use(errors);
app.listen(config.PORT, () => {
  console.log(`escuchando en el ${config.PORT}`);
});
