
exports.up = function(knex) {
    knex.schema.createTable("incidents", function(table){
        table.increments();
        table.string('title').notNullable();
        table.string("description").NotNullable();
        table.decimal("value").NotNullable();
        
        table.string('ong_id').NotNullable();
        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
  knex.schema.dropTable('incidents');
};
