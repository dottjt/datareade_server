import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('feeds', function(table) {
    table.uuid('id').notNullable().unique().primary();
    table.string('name');
    table.string('url');
    table.string('feed_type');

    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTable('feeds');
}
