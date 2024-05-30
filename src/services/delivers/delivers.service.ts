import { Injectable } from '@nestjs/common';
import { Delivery } from 'src/entities/deliveries/delivery.entity';
import { DeliveryRepository } from 'src/repositories/delivers/delivers.repository';
import { MetaDataDelivery } from 'src/entities/deliveries/meta_data_delivery.entity';

//service para el controller de delivery
@Injectable()
export class DeliveryService {
  constructor(private readonly deliveryRepository: DeliveryRepository) {}

  async createDelivery(deliveryData: {
    name: string;
    subname: string;
    active: number;
    vehicle_descrip: string;
    income: Date;
    rating: number;
    comment: {
      text: string;
      client_id: string; // Cambiar el tipo de client_id a string
    };
    meta_data_delivery: {
      phone: number;
      identification: string;
      address: string;
      email: string;
      birthday: string;
      gender: string;
      image: string;
    };
  }): Promise<Delivery> {
    const delivery = new Delivery();
    delivery.name = deliveryData.name;
    delivery.subname = deliveryData.subname;
    delivery.active = deliveryData.active;
    delivery.vehicle_descrip = deliveryData.vehicle_descrip;
    delivery.income = deliveryData.income;
    delivery.rating = deliveryData.rating;
    delivery.comment = deliveryData.comment;

    // Verificamos si hay datos de meta_data_delivery para crearlo
    if (deliveryData.meta_data_delivery) {
      const metaData = new MetaDataDelivery();
      metaData.phone = deliveryData.meta_data_delivery.phone;
      metaData.identification = deliveryData.meta_data_delivery.identification;
      metaData.address = deliveryData.meta_data_delivery.address;
      metaData.email = deliveryData.meta_data_delivery.email;
      metaData.birthday = deliveryData.meta_data_delivery.birthday;
      metaData.gender = deliveryData.meta_data_delivery.gender;
      metaData.image = deliveryData.meta_data_delivery.image

      // Asignamos el metaDataDelivery creado al delivery
      delivery.meta_data_delivery = metaData;
    }

    // Llamamos al método del repositorio para crear el delivery
    return await this.deliveryRepository.createDelivery(delivery);
  }

  //funcion para todos los ususarios
  async getAllDeliveries(): Promise<Delivery[]> {
    return await this.deliveryRepository.getAllDeliveries();
  }

  //funcion para obtener un usuario
  async getDeliveryById(id: number): Promise<Delivery> {
    return await this.deliveryRepository.getDeliveryById(id);
  }

  //funcion para actualizar un usuario
  async updateDelivery(id: number, deliveryData: Partial<Delivery>): Promise<Delivery> {
    return await this.deliveryRepository.updateDelivery(id, deliveryData);
  }

  //funcion para eliminar un usuario
  async deleteDelivery(id: number): Promise<void> {
    return await this.deliveryRepository.deleteDelivery(id);
  }
}
