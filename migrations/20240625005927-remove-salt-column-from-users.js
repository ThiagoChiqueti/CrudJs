'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'salt');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'salt', {
      type: Sequelize.STRING,
      allowNull: false
    });
  }
};
