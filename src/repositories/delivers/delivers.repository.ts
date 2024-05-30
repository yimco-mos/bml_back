import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Delivery } from 'src/entities/deliveries/delivery.entity';
import { MetaDataDelivery } from 'src/entities/deliveries/meta_data_delivery.entity';

//repository para controlar todo lo correspondiente
//al delivery faltan mas funciones 

@Injectable()
export class DeliveryRepository {
  constructor(
    @InjectRepository(Delivery)
    private readonly deliveryRepository: Repository<Delivery>,
    @InjectRepository(MetaDataDelivery)
    private readonly metaDataDeliveryRepository: Repository<MetaDataDelivery>,
  ) {}

  //funcion para crear un usuario

  async createDelivery(deliveryData: {
    name: string;
    subname: string;
    vehicle_descrip: string;
    income: Date;
    rating: number;
    comment: {
      text: string;
      client_id: string; 
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
    delivery.vehicle_descrip = deliveryData.vehicle_descrip;
    delivery.income = deliveryData.income;
    delivery.rating = deliveryData.rating;
    delivery.comment = deliveryData.comment;

    // Crear el MetaDataDelivery y guardarlo en la base de datos
    const metaDataDelivery = new MetaDataDelivery();
    metaDataDelivery.phone = deliveryData.meta_data_delivery.phone;
    metaDataDelivery.identification = deliveryData.meta_data_delivery.identification;
    metaDataDelivery.address = deliveryData.meta_data_delivery.address;
    metaDataDelivery.email = deliveryData.meta_data_delivery.email;
    metaDataDelivery.birthday = deliveryData.meta_data_delivery.birthday;
    metaDataDelivery.gender = deliveryData.meta_data_delivery.gender;
    metaDataDelivery.image = deliveryData.meta_data_delivery.image;

    const savedMetaDataDelivery = await this.metaDataDeliveryRepository.save(metaDataDelivery);

    // Asociar el MetaDataDelivery con el Delivery y guardar el Delivery en la base de datos
    delivery.meta_data_delivery = savedMetaDataDelivery;
    const savedDelivery = await this.deliveryRepository.save(delivery);

    return savedDelivery;
  }

  //funcion para obtener todos los usuarios

  async getAllDeliveries(): Promise<Delivery[]> {
    return await this.deliveryRepository.find({ relations: ['meta_data_delivery'] });
  }
  //funcion para obtener un usuario

  async getDeliveryById(id: number): Promise<Delivery> {
    return await this.deliveryRepository.findOne({ where: { id }, relations: ['meta_data_delivery'] });
  }

  //funcion para actualizar un usuario

  async updateDelivery(id: number, deliveryData: Partial<Delivery>): Promise<Delivery> {
    await this.deliveryRepository.update(id, deliveryData);
    return await this.deliveryRepository.findOne({ where: { id }, relations: ['meta_data_delivery'] });
  }

  //funcion para eliminar un usuario

  async deleteDelivery(id: number): Promise<void> {
    await this.deliveryRepository.delete(id);
  }
}