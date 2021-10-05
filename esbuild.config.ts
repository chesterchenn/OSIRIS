require('esbuild')
  .build({
    entryPoints: ['src/index.tsx'],
    bundle: true,
    outdir: 'build',
    tsconfig: 'tsconfig.json',
    format: 'esm',
    loader: 'jsx',
  })
  .catch(() => process.exit(1));
