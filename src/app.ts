import express, { Request, Response } from 'express';
import chairRoutes from './routes/chairRoutes';

const app = express()
const port: number = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Server Running!');
});

app.use('/chairs', chairRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}🚀`)
})