import { Injectable } from '@nestjs/common';
import * as Knex from 'knex';

@Injectable()
export class DatabaService {
  private knex;

  constructor() {
    this.knex = Knex({
      client: 'pg',
      connection: process.env.DATABASE_URL,
      searchPath: ['public'],
    });
  }

  public getKnexConnection() {
    return this.knex;
  }
}
