import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('track_posts', function(table) {
    table.uuid('id').notNullable().unique().primary();
    table.string('title');
    table.string('post_type');

    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTable('track_posts');
}
