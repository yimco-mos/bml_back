import { NestFactory } from '@nestjs/core';
import { AppModule}  from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //ruta de donde se debe hacer las peticiones
  
  const corsOptions:CorsOptions = {
    origin: 'http://localhost:3001'|| process.env.FRONT_URL, 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',   
    allowedHeaders: ['Content-Type', 'Authorization'],
  };

  app.enableCors(corsOptions);

    const port = process.env.PORT || 4000
  await app.listen(port);
}


bootstrap();
