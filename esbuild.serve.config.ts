import { ServeResult } from 'esbuild';
import sassPlugin from 'esbuild-plugin-sass';

require('esbuild')
  .serve(
    {
      servedir: '.',
      port: 8000,
    },
    {
      entryPoints: ['src/index.tsx'],
      bundle: true,
      outdir: '.',
      tsconfig: 'tsconfig.json',
      format: 'esm',
      plugins: [sassPlugin()],
    }
  )
  .then((server: ServeResult) => {
    console.log(server);
  })
  .catch(() => process.exit(1));
