import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './configormservice/dbormconfig';
import { OrderModule } from './modules/orders/orders.module';
import { DeliveryModule } from './modules/delivery/delivery.module';
import { commentsModule } from './modules/comments/comments.module';


//modulos necesarios que se esaran usando
@Module({
  imports: [
   DatabaseModule,
    UserModule,
    OrderModule,
    DeliveryModule,
    commentsModule
  ],
})
export class AppModule {}
