import cors from 'cors';
import express from 'express';
import fs from 'fs';
import path from 'path';
import simpleGit from 'simple-git';
import { generate, getAllFiles } from './utils';

const app = express();
app.use(
  cors({
    origin: '*',
  }),
);
app.use(express.json());

const DEPLOYMENTS_DIR = path.join(__dirname, '../deployments');
app.use('/site', express.static(DEPLOYMENTS_DIR));

app.post('/deploy', async (req, res) => {
  try {
    const { repoUrl } = req.body;

    if (!repoUrl) {
      res.status(400).json({ message: "Repository URL can't be empty" });
      return;
    }

    const id = generate();
    const deploymentDir = path.join(DEPLOYMENTS_DIR, id);

    await simpleGit().clone(repoUrl, deploymentDir);

    const files = getAllFiles(deploymentDir);

    const filePaths = files.map((file) => {
      const relativePath = path.relative(deploymentDir, file);
      return {
        path: relativePath,
        url: `/site/${id}/${relativePath.replace(/\\/g, '/')}`,
      };
    });

    res.status(201).json({
      deploymentId: id,
      message: 'Site deployed successfully',
      files: filePaths,
      siteUrl: `/site/${id}/`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Deployment failed',
      error: error instanceof Error ? error.message : String(error),
    });
  }
});

app.get('/site/:id', (req, res) => {
  const { id } = req.params;
  const indexPath = path.join(DEPLOYMENTS_DIR, id, 'index.html');

  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Site not found or no index.html in the repository');
  }
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});
