import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Order } from 'src/entities/orders/order.entity';
import { InjectRepository } from '@nestjs/typeorm';

//repository para los pedidos hechos por el usuario 


@Injectable()
export class OrderRepository {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,
        
    ) { }

    //funcion para crear un pedido
    async createOrder(orderData:Partial <Order>): Promise<Order> {
        return this.orderRepository.save(orderData);
    }


    //funcion para buscar todos los pedidos
    async findOrders(): Promise<Order[]> {
        return this.orderRepository.find();
    }
}
