import { Link } from "expo-router"
import Button from "../components/Button"
import { View } from "../components/Themed"

const index = () =>{
   return (
     <View style={{ flex: 1, justifyContent: "center", padding: 10 }}>
       <Link href={"/(user)"} asChild>
         <Button text="User" />
       </Link>
       <Link href={"/(admin)"} asChild>
         <Button text="Admin" />
       </Link>
       <Link href={"/sign-in"} asChild>
         <Button text="sign in" />
       </Link>
     </View>
   ); 
}
export default index;