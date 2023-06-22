const sequelize = require('../config/connection');
const seedVegetables = require('./vegetablesData');
const seedFruits = require('./fruitsData');
const seedHousePlants = require('./housePlantsData');

//collecting all data 
const seedAll = async () => {
    await sequelize.sync({ force: true });
  
    await seedVegetables();
  
    await seedFruits();

    await seedHousePlants();
  
  
    process.exit(0);
  };
  
  seedAll();
  