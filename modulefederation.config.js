const { dependencies } = require('./package.json');

module.exports = {
  name: 'app2',
  exposes: {
    './App': './src/App',
  },
  remotes: {
    common: `common@http://localhost:3004/remoteEntry.js`,
  },
  filename: 'remoteEntry.js',
  shared: {
    react: {
      singleton: true,
      eager: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      eager: true,
      requiredVersion: dependencies['react-dom'],
    },
    'react-router-dom': {
      singleton: true,
      eager: true,
      requiredVersion: dependencies['react-router-dom'],
    },
    'jotai': {
      singleton: true,
      eager: true,
      requiredVersion: dependencies['jotai'],
    },
    '@mui/material': {
      singleton: true,
      eager: true,
      requiredVersion: dependencies['@mui/material'],
    },
    '@emotion/react': {
      singleton: true,
      eager: true,
      requiredVersion: dependencies['@emotion/react'],
    },
    '@emotion/styled': {
      singleton: true,
      eager: true,
      requiredVersion: dependencies['@emotion/styled'],
    },
  },
};