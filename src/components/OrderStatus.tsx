import { View, Pressable, Text } from "react-native";

import { Order, OrderStatusList } from "../types";
import Colors from "../constants/Colors";

type OrderListItemProps = {
  order: Order;
};

export default function OrderStatus({order}:OrderListItemProps) {
    
    return (
      <>
        <Text style={{ fontWeight: "bold" }}>Status</Text>
        <View style={{ flexDirection: "row", gap: 5 }}>
          {OrderStatusList.map((status) => (
            <Pressable
              key={status}
              onPress={() => console.warn("Update status")}
              style={{
                borderColor: Colors.light.tint,
                borderWidth: 1,
                padding: 10,
                borderRadius: 5,
                marginVertical: 10,
                backgroundColor:
                  order.status === status ? Colors.light.tint : "transparent",
              }}
            >
              <Text
                style={{
                  color: order.status === status ? "white" : Colors.light.tint,
                }}
              >
                {status}
              </Text>
            </Pressable>
          ))}
        </View>
      </>
    );
}