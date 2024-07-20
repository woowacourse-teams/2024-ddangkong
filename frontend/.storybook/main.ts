import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import { Configuration } from 'webpack';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: true,
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),
  webpackFinal: async (config: Configuration) => {
    const { resolve, module } = config;

    // storybook 에 emotion 관련 babel 설정 추가
    module?.rules?.push({
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            plugins: [require.resolve('@emotion/babel-plugin')],
          },
        },
      ],
    });

    if (resolve) {
      resolve.alias = {
        ...resolve.alias,
        '@': path.resolve(__dirname, '../src'),
      };
    }

    return config;
  },
};
export default config;
