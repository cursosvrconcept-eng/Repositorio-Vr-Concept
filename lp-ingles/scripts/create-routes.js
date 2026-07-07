// Cria uma pasta para cada slug de variante dentro de dist/
// O servidor encontra o diretório e serve o index.html → React Router faz o roteamento
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Adicione aqui os slugs de cada variante (deve refletir o variants.ts)
const slugs = ['v1'];

const distDir = path.join(__dirname, '..', 'dist');
const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

for (const slug of slugs) {
  const dir = path.join(distDir, slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), indexHtml);
  console.log(`✓ dist/${slug}/index.html criado`);
}
