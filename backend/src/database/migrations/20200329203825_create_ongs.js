
exports.up = function(knex) {
    knex.schema.createTable("ongs", function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string("email").NotNullable();
        table.string("whatsapp").NotNullable();
        table.string("city").NotNullable();
        table.string("uf", 2).NotNullable();
    });
};

exports.down = function(knex) {
  knex.schema.dropTable('ongs');
};
