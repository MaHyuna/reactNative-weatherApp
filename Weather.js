import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases = {
  Rain: {
    colors: ['#00C6FB', '#005BEA'],
    title: '비',
    subtitle: '비가 오는 날엔',
    icon: 'weather-pouring',
  },
  Clear: {
    colors: ['#FEF253', '#FF7300'],
    title: '맑음',
    subtitle: '태양을 피하고 싶었어',
    icon: 'weather-sunny',
  },
  Thunderstorm: {
    colors: ['#00ECBC', '#007ADF'],
    title: '번개',
    subtitle: '제우스의 벼락을 맞아라',
    icon: 'weather-lightning',
  },
  Clouds: {
    colors: ['#D7D2CC', '#304352'],
    title: '흐림',
    subtitle: '구름이 몽실몽실',
    icon: 'weather-cloudy',
  },
  Snow: {
    colors: ['#7DE2FC', '#B9B6E5'],
    title: '눈',
    subtitle: '렛잇 고~ 렛잇 고우~~',
    icon: 'weather-snowy',
  },
  Drizzle: {
    colors: ['#89F7FE', '#66A6FF'],
    title: '비 조금',
    subtitle: '이슬비가 내리는 이른 아침에',
    icon: 'weather-rainy',
  },
  Haze: {
    colors: ['#D7D2CC', '#304352'],
    title: '얕은 안개',
    subtitle: '안경 없이 걷고 있는 느낌',
    icon: 'weather-fog',
  },
  Mist: {
    colors: ['#D7D2CC', '#304352'],
    title: '짙은 안개',
    subtitle: 'Haze와 Mist의 차이는 뭐지?',
    icon: 'weather-fog',
  },
};

/*
export default class Weather extends Component {
  render() {
    return (
      <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
        <View style={styles.upper}>
          <Ionicons style={styles.icon} name="ios-rainy" />
          <Text style={styles.temp}>-8º</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}>Raining like a MF</Text>
          <Text style={styles.subtitle}>For more info look outsie</Text>
        </View>
      </LinearGradient>

    );
  }
}
*/
function Weather({ weatherName, temp }) {
  return (
    <LinearGradient
      colors={weatherCases[weatherName].colors}
      style={styles.container}>
      <View style={styles.upper}>
        <MaterialCommunityIcons style={styles.icon} name={weatherCases[weatherName].icon} />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>
          {weatherCases[weatherName].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired,
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginTop: 40,
  },
  icon: {
    fontSize: 160,
    color: '#fff',
    marginTop: 10,
  },
  temp: {
    fontSize: 48,
    backgroundColor: 'transparent',
    color: '#fff',
  },
  lower: {
    flex: 1,
    //alignItems: 'flex-start',
    //justifyContent: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    //paddingLeft: 30,
  },
  title: {
    fontSize: 38,
    fontWeight: '300',
    backgroundColor: 'transparent',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '100',
    backgroundColor: 'transparent',
    color: '#fff',
    marginBottom: 40,
  },
});
