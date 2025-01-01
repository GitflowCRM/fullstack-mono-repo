module.exports = function (api) {
  api.cache(true);

  const isBuildOrStorybook =
    process.env.NX_TASK_TARGET_TARGET === 'build' ||
    process.env.NX_TASK_TARGET_TARGET?.includes('storybook');

  const commonPlugins = [
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
        importSource: 'nativewind', // Set jsxImportSource for NativeWind
      },
    ],
  ];

  if (isBuildOrStorybook) {
    return {
      presets: [
        [
          '@nx/react/babel',
          {
            runtime: 'automatic',
          },
        ],
      ],
      plugins: commonPlugins,
    };
  }

  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: commonPlugins,
  };
};
