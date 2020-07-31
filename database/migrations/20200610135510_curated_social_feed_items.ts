import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('curated_social_feed_items', function(table) {
    table.uuid('id').notNullable().unique().primary();
    table.string('title');
    table.string('publishDate');
    table.string('curated_type');
    table.string('socials');

    table.uuid('parent_feed_id').references('feeds.id');

    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTable('curated_social_feed_items');
}
