import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('aggregated_feed_items', function(table) {
    table.uuid('id').notNullable().unique().primary();
    table.string('title');
    table.string('author');
    table.string('link');
    table.string('website_link');
    table.string('description');
    table.string('feature_image');
    table.string('tags');
    table.string('pub_date');
    table.string('social_type');

    table.uuid('parent_feed_id').references('feeds.id');

    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTable('aggregated_feed_items');
}
