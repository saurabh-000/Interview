import React, { useCallback, useEffect, useMemo, useState } from "react"
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native"
export type LargeItem = {id: string; title: string; price: number;};
function prepareData(len: number):LargeItem[] {
        return Array.from({length: len}, (_, i) => ({
            id: String(i + 1),
            title: `Product ${i + 1}`,
            price: Math.round(50 + (i % 100)),
            offer:5 + (i % 6)

        }));
}

const DATA=prepareData(5000)

const LargeListScreen=()=>{

    const PAGE_SIZE = 20;
    const [page, setPage] = useState(1);
    const [data, setData] = useState<LargeItem[]>(DATA.slice(0, PAGE_SIZE));
    const [loading, setLoading] = useState(false);
    const [favorites,setFavorites]=useState<Set<string>>(new Set())


    const renderItem = useCallback(({item}: any) => (
        <View style={{padding: 12, borderBottomWidth: 0.5, borderColor: '#ddd', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <View>
                <Text style={{fontWeight: '600'}}>{item.title}</Text>
                <Text>₹{item.price}</Text>
            </View>
            <View  style={{ borderRadius:8,width:70,justifyContent:'center',alignItems:'center'}}>
                <Text style={{ color: "#000" }}>
                    {item?.offer}% off
                </Text>
            </View>
        </View>
), []);


const keyExtractor = useCallback((it: any) => it.id, []);


const getItemLayout = useCallback((_: any, index: number) => ({
        length: 72, offset: 72 * index, index,
}), []);

const toggleFavorite = useCallback((id: string) => {
    const newSet = new Set(favorites);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
    setFavorites(newSet);
  }, [favorites]);

const loadMore = useCallback(() => {
    if (loading) return;
    if (data.length >= DATA.length) return; 

    setLoading(true);
    setTimeout(() => {
      const nextPage = page + 1;
      const newData = DATA.slice(0, nextPage * PAGE_SIZE);
      setData(newData);
      setPage(nextPage);
      setLoading(false);
    }, 500); 
  }, [loading, page, data]);

  const renderFooter = () =>
    loading ? <ActivityIndicator style={{ margin: 12 }} /> : null;


    return(
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            getItemLayout={getItemLayout}
            initialNumToRender={20}
            maxToRenderPerBatch={20}
            windowSize={10}
            removeClippedSubviews
            onEndReached={loadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={renderFooter}
        />
    )

}
export default LargeListScreen