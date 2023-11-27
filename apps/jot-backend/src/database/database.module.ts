import { Global, Module } from '@nestjs/common';
import { DatabaService } from './database.service';

@Global()
@Module({
  providers: [DatabaService],
  exports: [DatabaService],
})
export class DatabaseModule {}
