import { MetaDataDelivery } from "src/entities/deliveries/meta_data_delivery.entity";
import { MetaDataUser } from "src/entities/user/metadata_user.entity";
import { User } from "src/entities/user/user.entity";
import { Delivery } from "src/entities/deliveries/delivery.entity";
import { Order } from "src/entities/orders/order.entity";
//encargado de exportar todas las entidades 

export const Entities=[User,Delivery,MetaDataDelivery,MetaDataUser,Order];