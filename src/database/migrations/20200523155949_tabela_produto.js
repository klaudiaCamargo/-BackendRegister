
exports.up = function(knex) {
    return knex.schema.createTable('produto'), 
      function (table) {
          table.string('id').primary();
          table.string('nome').notNullable();
          table.string('decricao').notNullable();
      };
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('produto');
  };