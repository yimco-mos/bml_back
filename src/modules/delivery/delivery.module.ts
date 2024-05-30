// delivery.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryService } from 'src/services/delivers/delivers.service';
import { DeliveryController } from 'src/controllers/delivers/delivers.controller';
import { Delivery } from '../../entities/deliveries/delivery.entity';
import { DeliveryRepository } from '../../repositories/delivers/delivers.repository';
import { MetaDataDelivery } from '../../entities/deliveries/meta_data_delivery.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Delivery, MetaDataDelivery])],
  providers: [DeliveryService, DeliveryRepository],
  controllers: [DeliveryController],
  exports: [DeliveryRepository],
})
export class DeliveryModule {}
