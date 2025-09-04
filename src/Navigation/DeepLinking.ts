import { LinkingOptions } from "@react-navigation/native";

const DeepLinking:LinkingOptions<any>={
    prefixes:['myapp://'],
    config:{
        screens:{
            UserDetails:'user/:id'
        }
    }
}
export default DeepLinking 