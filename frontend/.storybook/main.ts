import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import { Configuration } from 'webpack';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true, // Storybook의 SWC 설정 활성화
      },
    },
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config: Configuration) => {
    const { resolve, module } = config;

    // storybook에 emotion 관련 SWC 설정 추가
    module?.rules?.push({
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve('swc-loader'),
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
