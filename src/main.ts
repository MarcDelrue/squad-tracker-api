import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {MicroserviceOptions, Transport} from "@nestjs/microservices";


async function bootstrap() {

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      {
        transport: Transport.REDIS,
        options: {
          url: 'redis://delrue:9Pw7YS@M2w4f5JV@redis-18853.c3.eu-west-1-2.ec2.cloud.redislabs.com:18853',
        }
      }
  );
  await app.listen();
}

bootstrap();
