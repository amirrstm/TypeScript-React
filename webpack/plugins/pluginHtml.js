import { join } from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';

import { rootDir } from '../utils/env';

const config = {
    inject: true,
    filename: 'index.html',
    template: join(rootDir, './src/assets/index.html'),
};

export const htmlWebpackPlugin = new HtmlWebpackPlugin(config);
