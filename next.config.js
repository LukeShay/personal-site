const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

function webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
  config.plugins.push(new webpack.IgnorePlugin(/\/test\//));
  config.plugins.push(new webpack.IgnorePlugin(/\/cypress\//));

  config.node = { fs: 'empty', child_process: 'empty' };

  config.module.rules.push({
    test: /\.md$/,
    use: 'raw-loader',
  });

  return config;
}

module.exports = withMDX({
  webpack,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});
