export class Weather {
  constructor(name, tempMin, tempMax, temp, humidity, pressure, icon) {
    this.name = name;
    this.tempMin = tempMin;
    this.tempMax = tempMax;
    this.temp = temp;
    this.humidity = humidity;
    this.pressure = pressure;
    this.icon = icon;
  }
}
