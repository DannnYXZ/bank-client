const {createProxyMiddleware} = require('http-proxy-middleware');
const BANK_SERVICE_BASE_URL = process.env.BANK_SERVICE_BASE_URL;

module.exports = function (app) {
    app.use(
        '/bank',
        createProxyMiddleware({
            target: BANK_SERVICE_BASE_URL,
            changeOrigin: true,
        })
    );
};