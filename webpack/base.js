import path from 'path';

import entry from './entry';
import * as rules from './rules';
import * as plugins from './plugins';
import optimization from './optimization';
import { isDevServer, isProd } from './utils/env';
import { arrayFilterEmpty } from './utils/helpers';
import { aliasItems, devServerUrl, externalItems } from './config';

export default {
    context: __dirname,
    target: isDevServer ? 'web' : ['web', 'es5'],
    mode: isProd ? 'production' : 'development',
    entry,
    output: {
        path: path.join(__dirname, '../dist'),
        publicPath: isDevServer ? devServerUrl : './',
        filename: isDevServer ? '[name].[fullhash].js' : '[name].[contenthash].js',
    },
    module: {
        rules: arrayFilterEmpty([
            rules.javascriptRule,
            rules.typescriptRule,
            rules.htmlRule,
            rules.imagesRule,
            rules.fontsRule,
            rules.cssRule,
            ...rules.lessRules,
            ...rules.sassRules,
            ...rules.svgRules,
        ]),
    },
    plugins: arrayFilterEmpty([
        plugins.htmlWebpackPlugin,
        plugins.providePlugin,
        plugins.definePlugin,
        plugins.forkTsCheckerWebpackPlugin,
        plugins.esLintPlugin,
        plugins.copyPlugin,
    ]),
    resolve: {
        alias: aliasItems,
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    optimization,
    externals: externalItems,
};
