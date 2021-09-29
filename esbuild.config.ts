const { htmlPlugin } = require('@craftamap/esbuild-plugin-html');

require('esbuild')
  .build({
    entryPoints: ['src/index.tsx'],
    bundle: true,
    outdir: 'build',
    tsconfig: 'tsconfig.json',
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
  })
  .catch(() => process.exit(1));
