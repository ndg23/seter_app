// import * as React from 'react';
// import { View, useWindowDimensions } from 'react-native';
// import { TabView, SceneMap } from 'react-native-tab-view';

// const FirstRoute = () => (
//   <View style={{ flex: 1, backgroundColor: 'red',height:450 }} />
// );

// const SecondRoute = () => (
//   <View style={{ flex: 1, backgroundColor: 'blue' }} >
 
//     </View>
// );

// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
// });

// export default function TabViewExample() {
//   const layout = useWindowDimensions();

//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     { key: 'first', title: 'First' },
//     { key: 'second', title: 'Second' },
//   ]);

//   return (
//     <TabView
//       navigationState={{ index, routes }}
//       renderScene={renderScene}
//       onIndexChange={setIndex}
//       initialLayout={{ width: layout.width }}
//     />
//   );
// }

import React from 'react';
import { Tab, Text, TabView } from '@rneui/themed';
import { View } from 'react-native';
import ItemTravelComponent from '../../common/components/item-voyage';

export const TabViewComponent = () => {
  const [index, setIndex] = React.useState(0);

  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'white',
          
          height: 2,
        }}
        containerStyle={{
          backgroundColor:'navy',
          borderRadius:10,
          borderTopRightRadius:5,
        
          padding:0,
          
        }}
      >
        <Tab.Item
          title="Programme"
          titleStyle={{ fontSize: 20,color:"white" }}
        />
        <Tab.Item
          title="Voyages"
          titleStyle={{ fontSize: 20,color:"white" }}
        />
      
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring" containerStyle={{ flex: 1 }}>
        <TabView.Item style={{ backgroundColor: '#f1f1f1', width: '100%', height: 500 }}>
       <ItemTravelComponent trainName={'TER'} departureTime={'18:00'} arrivalTime={'20:00'} platformNumber={'230'}/>
        </TabView.Item>
      
        <TabView.Item style={{backgroundColor: '#f1f1f1', height:500, width: '100%' }}>
        <ItemTravelComponent trainName={'TER002'} departureTime={'11:00'} arrivalTime={'10:00'} platformNumber={'30'}/>
        </TabView.Item>
      </TabView>
    </>
  );
};