module.exports = {
    sequelize: {
        database: 'core',
        username: 'core',
        password: 'core',

        dialect: 'sqlite',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        storage: '../database.sqlite',
        operatorsAliases: false
          
    }    
}