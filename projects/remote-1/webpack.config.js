const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'remote-1',

  exposes: {
    './Component': './projects/remote-1/src/app/app.component.ts',
    './AppModule': './projects/remote-1/src/app/app.module.ts',
    './HomeModule': './projects/remote-1/src/app/home/home.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
