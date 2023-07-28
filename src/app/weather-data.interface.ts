export interface WeatherData {
    coord: {
      lon: number;
      lat: number;
    };
    weather: WeatherDescription[];
    main: {
      temp: number;
      pressure: number;
      humidity: number;

    };
  }
  
  export interface WeatherDescription {
    description: string;

  }
  