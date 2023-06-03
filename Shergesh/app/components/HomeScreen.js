import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function MapPage({ navigation }) {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [hotels, setHotels] = useState([]);
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    // Здесь вы можете добавить логику для загрузки данных отелей и достопримечательностей из API
    // и сохранения их в состоянии hotels и attractions
    // Пример загрузки данных с использованием fetch:
    //hotellook
    fetch('http://engine.hotellook.com/api/v2/lookup.json?query=Novosibirsk&lang=ru&lookFor=both&limit=10')
      .then(response => response.json())
      .then(data => {
        const hotel = data.results.hotels[0];
        setHotels([hotel]);
      });
//OpenTripMap API
    // fetch('https://api.example.com/attractions')
    //   .then(response => response.json())
    //   .then(data => setAttractions(data));
  }, []);

  const calculateRoute = () => {
    // Здесь вы можете добавить логику для расчета маршрута с учетом отелей и достопримечательностей
    // и формирования данных для передачи на страницу с маршрутом
    const routeData = {
      selectedLocation,
      hotels,
      attractions,
    };
    return routeData;
  };

  const handleNavigate = () => {
    if (selectedLocation) {
      const routeData = calculateRoute();
      navigation.navigate('Маршрут', { routeData });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }} initialRegion={{ latitude: 55.034214, longitude: 82.906211, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}>
        {/* Маркеры для отелей */}
        {hotels.map(hotel => (
          <Marker key={hotel.id} coordinate={{ latitude: hotel.location.lat, longitude: hotel.location.lon }} title={hotel.label} />
        ))}
        {/* Маркеры для достопримечательностей */}
        {attractions.map(attraction => (
          <Marker key={attraction.id} coordinate={{ latitude: attraction.latitude, longitude: attraction.longitude }} title={attraction.name} />
        ))}
        {/* Маркер для выбранного места */}
        {selectedLocation && (
          <Marker coordinate={{ latitude: selectedLocation.latitude, longitude: selectedLocation.longitude }} title="Выбранное место" />
        )}
      </MapView>
      <View style={{ padding: 16 }}>
        <Text style={{ marginBottom: 8 }}>Выберите место на карте:</Text>
        <Button title="Выбрать" onPress={handleNavigate} />
      </View>
    </View>
  );
}
