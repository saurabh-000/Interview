import React, { useEffect, useState } from "react"
import { getJSON, setJSON } from "../Utils/Utils";
import { FlatList, RefreshControl, Text, View } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { GETAPI } from "../API/APICall";  

const OfflineSupportScreen=()=>{
    const [users, setUsers] = useState<any>();
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        init()
        
    },[])

    const init=async()=>{
        await getJSON('users')
    }

    const load=async()=>{
        const net = await NetInfo.fetch();
        try {
            if (net.isConnected) {
                const data = await GETAPI('https://jsonplaceholder.typicode.com/users');
                console.log("data",data)
                setUsers(data);
                setJSON('users', data);
            } else {
                const cached = await getJSON<any[]>('users') ?? [];
                console.log('cached',cached)
                setUsers(cached);
            }
        }catch(e){
            console.log("error",e)
        }
        finally { 
            setLoading(false);
            }
        }
    useEffect(()=>{
        load()
    },[])    
    return(
        <View style={{flex:1}}>
            <FlatList
            data={users}
            keyExtractor={(u) => String(u.id)}
            refreshControl={<RefreshControl refreshing={loading} onRefresh={load} />}
            renderItem={({item}) => (
                <View style={{padding:12, borderBottomWidth:0.5, borderColor:'#000'}}>
                    <Text style={{fontWeight:'600'}}>
                        {item.name}
                    </Text>
                    <Text>{item.email}</Text>
                </View>
)}
        />
        </View>
        
    )
}
export default OfflineSupportScreen