import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator } from 'react-native';
import Weather from './Weather';

const API_KEY = "833f03d7ff033b91ab13fc718a164bd7"; //OpenWeatherMap api key

export default class App extends React.Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,  // 온도
    name: null  // 날씨 명
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition( 
      position => { // 위치 물어봄, 켜둠으로 해놓으면 실행 됨
        //console.log(position);  // 위치정보 확인
        /*  // _getWeather으로 api 불러왔으니 주석달자
        this.setState({
          isLoaded: true,
          error: 'Somtion went wrong'
        });
        */
        this._getWeather(position.coords.latitude, position.coords.longitude)
      }, 
      error => {  // 에러 시 실행
        //console.log(error);
        this.setState({ 
          error: error
        }); 
      }
    );
  }
  _getWeather = (lat, long) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => { 
      //console.log(json);
      this.setState({
        temperature: json.main.temp,
        name: json.weather[0].main,
        isLoaded: true
      })
    })
  }
  render() {
    const { isLoaded, error, temperature, name } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? (
          <Weather weatherName={name} temp={Math.floor(temperature - 273.15)}/> 
        ) : (
          <View style={styles.loading}>
            <ActivityIndicator size="small" />
            <Text style={styles.loadingText}>날씨를 불러오고 있습니다...</Text>
            { error ? <Text style={styles.errorText}>{ error }</Text> : null }
          </View>
        )}
      </View>
    );
  }
}

// <StatusBar barStyle="light-content" />   // 위의 시간과 배터리 등 하얀색으로 변하게 하기
// <StatusBar barStyle="dark-content" />    // 위의 시간과 배터리 등 까맣게 변하게 하기
// <StatusBar hidden={true} />              // 의의 시간과 배터리 등 안보이게 하기

// <Weather temp={Math.floor(temperature - 273.15)}/>   // temperature은 켈빈으로 출력됨. floor 해서 버린 후 - 273.15 (날씨 기본 공식임)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText: {
    flexWrap: 'wrap',
    fontSize: 16,
    color: '#fff',
    backgroundColor: '#f33',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  loading: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItem: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: '#424242',
    marginTop: 12,
    textAlign: 'center'
  },
});
