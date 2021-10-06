import sassPlugin from 'esbuild-plugin-sass';

require('esbuild')
  .build({
    entryPoints: ['src/index.tsx'],
    bundle: true,
    outdir: 'build',
    tsconfig: 'tsconfig.json',
    format: 'esm',
    plugins: [sassPlugin()],
  })
  .catch(() => process.exit(1));
