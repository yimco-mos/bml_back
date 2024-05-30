import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from 'src/entities/orders/order.entity';
import { OrdersController } from 'src/controllers/orders/orders.controller';
import { OrderService } from 'src/services/orders/orders.service';
import { OrderRepository } from 'src/repositories/orders/orders.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([Order])],
    providers: [OrderService, OrderRepository],
    controllers: [OrdersController],
})
export class OrderModule { }
