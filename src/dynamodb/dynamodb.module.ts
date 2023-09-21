import { Module } from '@nestjs/common';
import { DynamoProvider } from './provider/dynamodb.provider';

@Module({
  providers: [...DynamoProvider],
  exports: [...DynamoProvider],
})
export class DynamoDBModule {}
