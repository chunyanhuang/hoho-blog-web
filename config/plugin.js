'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks'
  },
  webpack: {
    enable: true,
    package: 'egg-webpack',
  },
  // sequelize: {
  //   enable: true,
  //   package: 'egg-sequelize',
  // }
};

// exports.sequelize = {
//   enable: true,
//   package: 'egg-sequelize',
// };
