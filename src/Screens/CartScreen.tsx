import React, {useMemo} from 'react';
import {FlatList, View, Pressable, Text, TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, decrement, removeFromCart } from '../Redux/store/slices/cartSlice';
import { RootState } from '../Redux/store';

const CartScreen=()=> {
  const items = useSelector((s: RootState) => Object.values(s.cart.items));
  const totalCount = useMemo(() => items.reduce((a, b) => a + b.qty, 0), [items]);
  const totalAmount = useMemo(() => items.reduce((a, b) => a + b.price * b.qty, 0), [items]);
  const dispatch = useDispatch();

  return (
    <View style={{flex:1}}>
      <FlatList
        data={items}
        keyExtractor={it => it.id}
        renderItem={({item}) => (
          <View style={{padding:12, borderBottomWidth:0.5, borderColor:'#ddd', flexDirection:'row', justifyContent:'space-between'}}>
            <Text>{item.name} x{item.qty}</Text>
            <View style={{flexDirection:'row', gap:8}}>
              <TouchableOpacity style={{padding:10,borderRadius:5,backgroundColor:'grey',marginHorizontal:5}} onPress={() => dispatch(decrement(item.id))}><Text style={{color:'white'}}>-</Text></TouchableOpacity>
              <TouchableOpacity style={{padding:10,borderRadius:5,backgroundColor:'orange',marginHorizontal:5}} onPress={() => dispatch(removeFromCart(item.id))}><Text style={{color:'white'}}>Remove</Text></TouchableOpacity>
            </View>
          </View>
        )}
      />
      <View style={{padding:12, backgroundColor:'#eef',justifyContent:'center',alignItems:'center'}}>
        <Text>Items: {String(totalCount)} | Total: ₹{String(totalAmount)}</Text>
        <TouchableOpacity onPress={() => dispatch(clearCart())} style={{marginTop:6,padding:10,borderRadius:5,backgroundColor:'orange',marginHorizontal:5}}>
          <Text>Clear Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default CartScreen;