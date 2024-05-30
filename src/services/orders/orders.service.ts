import { Injectable } from '@nestjs/common';
import { OrderRepository } from 'src/repositories/orders/orders.repository';
import { Order } from 'src/entities/orders/order.entity';

//logica de service para controller de pedidos
@Injectable()
export class OrderService {
    constructor(private readonly orderRepository: OrderRepository) {}

    //service para crear el pedido usando el repository
    async createOrder(
        address: string,
        description: string,
        sent_date: Date,
        receive_date: Date,
        price: number,
        receiver_name: string,
        receiver_identify: string,
        client_id: string,
        delivery_id: string
        
    ): Promise<Order> {
        return this.orderRepository.createOrder(
            address,
            description,
            sent_date,
            receive_date,
            price,
            receiver_name,
            receiver_identify,
            client_id,
            delivery_id
        );
    }

    //funcion para obtener todos los pedidos
    async findOrders(): Promise<Order[]> {
        return this.orderRepository.findOrders();
    }
}
