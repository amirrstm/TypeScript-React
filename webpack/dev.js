import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

import { devServerConfig } from './config';

export default {
    devServer: devServerConfig,
    devtool: 'cheap-module-source-map',
    plugins: [new ReactRefreshWebpackPlugin()],
};
