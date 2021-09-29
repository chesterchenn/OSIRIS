require('esbuild').buildSync({
  entryPoints: ['src/index.tsx'],
  bundle: true,
  outdir: 'build',
  tsconfig: 'tsconfig.json'
});
