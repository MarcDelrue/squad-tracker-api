import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  //     AppModule,
  //     {
  //       transport: Transport.REDIS,
  //       options: {
  //         url: 'redis://delrue:9Pw7YS@M2w4f5JV@redis-18853.c3.eu-west-1-2.ec2.cloud.redislabs.com:18853',
  //       }
  //     }
  // );
  // await app.listen();
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}

bootstrap();
