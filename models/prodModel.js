const Prod = sequelize.define(
    'Prod',
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantity: {
        type: Sequelize.INTERGER,
        allowNull: true,
        default: 0
      },
    }
  );
  
  sequelize.sync();
  
  module.exports = { prod };