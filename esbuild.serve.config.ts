import { htmlPlugin } from '@craftamap/esbuild-plugin-html'
import { ServeResult } from 'esbuild';

require('esbuild')
  .serve(
    {
      servedir: 'build',
      port: 8000,
    },
    {
      entryPoints: ['src/index.tsx'],
      bundle: true,
      outdir: 'build',
      tsconfig: 'tsconfig.json',
      format: 'esm',
      metafile: true,
      plugins: [
        htmlPlugin({
          files: [
            {
              filename: 'index.html',
              entryPoints: ['src/index.tsx'],
            },
          ],
        }),
      ],
    }
  )
  .then((server: ServeResult) => {
    console.log(server);
  })
  .catch(() => process.exit(1));
