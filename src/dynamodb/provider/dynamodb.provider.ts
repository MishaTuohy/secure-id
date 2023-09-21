import { DynamoDB } from 'aws-sdk';
import { Provider } from '@nestjs/common';

export const DynamoProvider: Provider[] = [
  {
    provide: 'DYNAMO',
    useFactory: (): DynamoDB.DocumentClient => {
      return new DynamoDB.DocumentClient({
        region: 'your-region',
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      });
    },
  },
];
