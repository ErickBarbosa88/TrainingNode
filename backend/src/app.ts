import express from 'express';
import userRoutes from './routes/userRoutes';
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

app.use(express.json());
app.use('/', userRoutes);

app.listen(port, () => {
  console.log(`Servidor Express rodando em http://localhost:${port}`);
});
