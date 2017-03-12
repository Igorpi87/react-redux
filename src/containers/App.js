import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getWeather, getWinds } from '../actions'

class App extends Component {

  getInfo = () => {
    const { dispatch } = this.props

    dispatch(getWeather())
    dispatch(getWinds())
  }

  renderInfo = () => {
    const { winds: { info: windsInfo }, weather: { info: weatherInfo } } = this.props

    return (
      <div>
        <p>Сейчас в Москве дует ветер <strong>{windsInfo.speed} м/с</strong></p>
        <p><strong>{weatherInfo.text}</strong> и температура воздуха <strong>{weatherInfo.temp} °F</strong></p>
      </div>
    )
  }

  infoRecieved = () => {
    const { winds, weather } = this.props

    return !winds.loading && !weather.loading && winds.info && weather.info
  }

  render() {
    const { winds, weather } = this.props

    return (
      <div>
        <button onClick={this.getInfo}>Загрузить данные о ветре и погоды</button>
        
        {winds.loading && <p>Загрузка данных о <strong>ветрах</strong></p>}

        {weather.loading && <p>Загрузка данных о <strong>погоде</strong></p>}
        
        {this.infoRecieved() && this.renderInfo()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { weather, winds } = state

  return {
    weather, winds
  }
}

export default connect(mapStateToProps)(App)
