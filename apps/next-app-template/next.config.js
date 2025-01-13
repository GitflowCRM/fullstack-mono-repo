// const { withTamagui } = require('@tamagui/next-plugin')

// module.exports = function (name, { defaultConfig }) {
//   let config = {
//     ...defaultConfig,
//     // ...your configuration
//   }

//   const tamaguiPlugin = withTamagui({
//     config: './tamagui.config.ts',
//     components: ['tamagui'],
//     appDir: true,
//   })

//   return {
//     ...config,
//     ...tamaguiPlugin(config),
//   }
// }

//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  transpilePackages: [
    'react-native',
    'react-native-web',
    // Add any other React Native packages you're using
  ],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    };
    config.resolve.extensions = [
      '.web.js',
      '.js',
      '.web.ts',
      '.ts',
      '.web.tsx',
      '.tsx',
    ];
    return config;
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
