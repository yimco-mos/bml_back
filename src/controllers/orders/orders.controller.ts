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
        @Body() createOrderDto: {
            address: string,
            description: string,
            sent_date: Date,
            receive_date: Date,
            price: number,
            receiver_name: string,
            receiver_identify: string,
            client_id: string,
            delivery_id:string
            
        }
    ): Promise<Order> {
        return this.orderService.createOrder(
            createOrderDto.address,
            createOrderDto.description,
            createOrderDto.sent_date,
            createOrderDto.receive_date,
            createOrderDto.price,
            createOrderDto.receiver_name,
            createOrderDto.receiver_identify,
            createOrderDto.client_id,
            createOrderDto.delivery_id
        );
    }
    //obtener todos los pedidos
    @Get('orders')
    async getOrders(): Promise<Order[]> {
        return this.orderService.findOrders();
    }
}
