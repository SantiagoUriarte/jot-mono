import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`CREATE TABLE users (
        id SERIAL NOT NULL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
    );`);
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw(`DROP TABLE users;`);
}
