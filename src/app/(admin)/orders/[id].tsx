import { Stack, useLocalSearchParams } from "expo-router";
import { FlatList, Text, View } from "react-native";
import orders from "@/assets/data/orders";
import OrderListItem from "@/src/components/OrderListItem";
import OrderItemListItem from "@/src/components/OrderItemListItem";
import OrderStatus from "@/src/components/OrderStatus";

export default function OrderDetailsScreen() {
    
    const { id } = useLocalSearchParams();
   
    const order = orders.find(o => o.id.toString() === id)
    
    if (!order) {
        return <Text>Not Found</Text>
    }

    return (
      <View style={{ padding: 16 , gap:20 }}>
        <Stack.Screen options={{ title: `order #${id}` }} />
        
        <FlatList
          data={order.order_items}
          renderItem={({ item }) => <OrderItemListItem item={item} />}
                contentContainerStyle={{ gap: 10 }}
          ListHeaderComponent={() => <OrderListItem order={order} />}
          ListFooterComponent={()=> <OrderStatus order={order}/>}
        />
      </View>
    );
}