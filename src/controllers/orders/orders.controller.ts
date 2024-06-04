import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderService } from 'src/services/orders/orders.service';
import { Order } from 'src/entities/orders/order.entity';

    //controlle para pedidos modificar repository y service si es necesario

@Controller('orders')
export class OrdersController {
    constructor(private readonly orderService: OrderService) {}


    //crear un pedido usando el service 
    @Post('create_order')
    async createOrder(
        @Body() orderData:Partial<Order>): Promise<Order> {
        return this.orderService.createOrder(orderData);
    }
    //obtener todos los pedidos
    @Get('orders')
    async getOrders(): Promise<Order[]> {
        return this.orderService.findOrders();
    }
}
