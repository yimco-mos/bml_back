import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Delivery } from 'src/entities/deliveries/delivery.entity';
import { DeliveryService } from 'src/services/delivers/delivers.service';

//controller de delivery 
@Controller('deliveries')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Post('create_delivery')
  async createDelivery(@Body() deliveryData: {
    name: string;
    subname: string;
    active: number;
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
    // Crear un objeto con todas las propiedades requeridas
    const requiredData: {
      name: string;
      subname: string;
      active: number;
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
    } = {
      name: '',
      subname: '',
      active: 0,
      vehicle_descrip: '',
      income: new Date(),
      rating: 0,
      comment: { text: '', client_id: '' },
      meta_data_delivery: {
        phone: 0,
        identification: '',
        address: '',
        email: '',
        birthday: '',
        gender: '',
        image: ''
      }
    };
  
    // Fusionar los datos recibidos con los datos requeridos
    const mergedData = { ...requiredData, ...deliveryData };
  
    return await this.deliveryService.createDelivery(mergedData);
  }
  
  //funcion para obtener todos los deliverys

  @Get('deliverys')
  async getAllDeliveries(): Promise<Delivery[]> {
    return await this.deliveryService.getAllDeliveries();
  }

  //funcion para obtener un deliverys

  @Get(':id')
  async getDeliveryById(@Param('id', ParseIntPipe) id: number): Promise<Delivery> {
    return await this.deliveryService.getDeliveryById(id);
  }


  //funcion para actualizar un deliverys
  @Patch(':id')
  async updateDelivery(@Param('id', ParseIntPipe) id: number, @Body() deliveryData: Partial<Delivery>): Promise<Delivery> {
    return await this.deliveryService.updateDelivery(id, deliveryData);
  }

  //funcion para eliminar un deliverys
  @Delete(':id')
  async deleteDelivery(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.deliveryService.deleteDelivery(id);
  }
}
