import { FlatList, Text } from "react-native";
import orders from "@/assets/data/orders";
import OrderItemListItem from "@/src/components/OrderListItem";
export default function OrdersScreen(){

    return (
        <FlatList data={orders} renderItem={({ item }) => <OrderItemListItem order={item}/> } contentContainerStyle={{gap:10 ,padding:16}} />
    )
}