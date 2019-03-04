const Sequelize = require('sequelize');
const models = require('../models');

models.sequelize.sync()
  .then(() => models.document.create({
    title: '샘플 타이틀 - 1',
    content: '샘플 내용 - 1'
  }))
  .then(sample => {
    console.log(sample.toJSON());
  });