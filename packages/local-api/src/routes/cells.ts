import express from 'express';
import fs from 'fs/promises';
import path from 'path';

interface ICell {
  id: string;
  content: string;
  type: 'text' | 'code';
}

const router = express.Router();

router.get('/cells', async (req, res) => {
  try {
    const result = await fs.readFile(
      path.join(res.locals.dir, res.locals.filename),
      { encoding: 'utf-8' },
    );
    res.json(JSON.parse(result));
  } catch (err) {
    if (err.code === 'ENOENT') {
      await fs.writeFile(
        path.join(res.locals.dir, res.locals.filename),
        '[]',
        'utf-8',
      );
      res.send([]);
    } else {
      throw err;
    }
  }
});

router.post('/cells', async (req, res) => {
  const { cells }: { cells: ICell[] } = req.body;

  await fs.writeFile(
    path.join(res.locals.dir, res.locals.filename),
    JSON.stringify(cells),
    'utf-8',
  );

  res.json({ status: 'ok' });
});

export default router;
