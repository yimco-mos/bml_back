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
    async createOrder(
        address: string,
        description: string,
        sent_date: Date,
        receive_date: Date,
        price: number,
        receiver_name: string,
        receiver_identify: string,
        client_id:string,
        delivery_id:string
    ): Promise<Order> {
        const order = new Order();
        order.address = address;
        order.description = description;
        order.sent_date = sent_date;
        order.receive_date = receive_date;
        order.price = price;
        order.receiver_name = receiver_name;
        order.receiver_identify = receiver_identify;
        order.client_id = client_id;
        order.delivery_id = delivery_id;

        

        return this.orderRepository.save(order);
    }


    //funcion para buscar todos los pedidos
    async findOrders(): Promise<Order[]> {
        return this.orderRepository.find();
    }
}
