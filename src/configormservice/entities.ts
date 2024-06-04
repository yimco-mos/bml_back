import { MetaDataDelivery } from "src/entities/deliveries/meta_data_delivery.entity";
import { MetaDataUser } from "src/entities/user/metadata_user.entity";
import { User } from "src/entities/user/user.entity";
import { Delivery } from "src/entities/deliveries/delivery.entity";
import { Order } from "src/entities/orders/order.entity";
import { Comments } from "src/entities/comments/comments.entiti";
//encargado de exportar todas las entidades necesarias
//opara no hacer una lista en un archivo principal se hace aca

export const Entities=[User,Delivery,MetaDataDelivery,MetaDataUser,Order,Comments];