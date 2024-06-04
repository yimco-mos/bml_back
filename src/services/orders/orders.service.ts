import { Injectable } from '@nestjs/common';
import { OrderRepository } from 'src/repositories/orders/orders.repository';
import { Order } from 'src/entities/orders/order.entity';

//logica de service para controller de pedidos
@Injectable()
export class OrderService {
    constructor(private readonly orderRepository: OrderRepository) {}

    //service para crear el pedido usando el repository
    async createOrder(orderData:Partial<Order>): Promise<Order> {
        return this.orderRepository.createOrder(orderData);
    }

    //funcion para obtener todos los pedidos
    async findOrders(): Promise<Order[]> {
        return this.orderRepository.findOrders();
    }
}
