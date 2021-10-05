import { ServeResult } from 'esbuild';

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
    }
  )
  .then((server: ServeResult) => {
    console.log(server);
  })
  .catch(() => process.exit(1));
