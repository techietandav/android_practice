// import { FlatList, View, Text, Image, StyleSheet } from 'react-native';
// import React from 'react';
// const dummy = [
//   {
//     id: 1,
//     name: 'Muskan',
//     email: 'muskan123',
//     image: './assets/images/kevin-mueller-QGSrJHopKwY-unsplash.jpg',
//   },
//   {
//     id: 2,
//     name: 'Muskan',
//     email: 'muskan123',
//     image: './assets/images/kevin-mueller-QGSrJHopKwY-unsplash.jpg',
//   },
//   {
//     id: 3,
//     name: 'Muskan',
//     email: 'muskan123',
//     image: './assets/images/kevin-mueller-QGSrJHopKwY-unsplash.jpg',
//   },
//   {
//     id: 4,
//     name: 'Muskan',
//     email: 'muskan123',
//     image: './assets/images/kevin-mueller-QGSrJHopKwY-unsplash.jpg',
//   },
//   {
//     id: 5,
//     name: 'Muskan',
//     email: 'muskan123',
//     image: './assets/images/kevin-mueller-QGSrJHopKwY-unsplash.jpg',
//   },
//   {
//     id: 6,
//     name: 'Muskan',
//     email: 'muskan123',
//     image: './assets/images/kevin-mueller-QGSrJHopKwY-unsplash.jpg',
//   },
//   {
//     id: 7,
//     name: 'Muskan',
//     email: 'muskan123',
//     image: './assets/images/kevin-mueller-QGSrJHopKwY-unsplash.jpg',
//   },
//   {
//     id: 8,
//     name: 'Muskan',
//     email: 'muskan123',
//     image: './assets/images/kevin-mueller-QGSrJHopKwY-unsplash.jpg',
//   },
//   {
//     id: 9,
//     name: 'Muskan',
//     email: 'muskan123',
//     image: './assets/images/kevin-mueller-QGSrJHopKwY-unsplash.jpg',
//   },
//   {
//     id: 10,
//     name: 'Muskan',
//     email: 'muskan123',
//     image: './assets/images/kevin-mueller-QGSrJHopKwY-unsplash.jpg',
//   },
//   {
//     id: 11,
//     name: 'Muskan',
//     email: 'muskan123',
//     image: './assets/images/kevin-mueller-QGSrJHopKwY-unsplash.jpg',
//   },
//   {
//     id: 12,
//     name: 'Muskan',
//     email: 'muskan123',
//     image: './assets/images/kevin-mueller-QGSrJHopKwY-unsplash.jpg',
//   },
//   {
//     id: 13,
//     name: 'Muskan',
//     email: 'muskan123',
//     image: './assets/images/kevin-mueller-QGSrJHopKwY-unsplash.jpg',
//   },
//   {
//     id: 14,
//     name: 'Muskan',
//     email: 'muskan123',
//     image: './assets/images/kevin-mueller-QGSrJHopKwY-unsplash.jpg',
//   },
// ];
// const App = () => {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={dummy}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <Image
//               source={require('./assets/images/kevin-mueller-QGSrJHopKwY-unsplash.jpg')}
//               style={styles.image}
//             />
//             <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//               <Text>name:</Text>
//               <Text>email:</Text>
//             </View>
//           </View>
//         )}
//         keyExtractor={item => item.id}
//         ItemSeparatorComponent={<View style={{ height: 10 }} />}
//         numColumns={4}
//         columnWrapperStyle={{ gap: 10 }}
//       />
//       <Text>App</Text>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#dadada',
//     paddingVertical: 10,
//     paddingHorizontal: 5,
//   },
//   card: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     width: 40,
//     height: 40,
//     borderRadius: 50,
//   },
// });

import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aur Bhai! Swagat hai Aaapka</Text>
      <TextInput placeholder="Enter a text here..." style={styles.input} />
      <Button title="Submit"></Button>
      <Text>Result:</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 20,
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  input: {
    width: '100%',
    padding: 5,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});
