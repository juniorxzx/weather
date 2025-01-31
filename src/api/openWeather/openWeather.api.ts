import { api } from "../api";

export const getWeatherOneCall = async (
  lat: number,
  lon: number,
  exclude: string = "",
  units: string = "metric",
  lang: string = "pt_br"
) => {
  try {
    const response = await api.get("/data/3.0/onecall", {
      params: {
        lat,
        lon,
        exclude,
        appid: "648df346cf000f8c40b6499e5eff284e",
        units,
        lang,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error(
      "Erro na chamada da API One Call:",
      error.response?.data || error.message
    );
    throw new Error("Não foi possível buscar os dados de clima.");
  }
};


export const getWeatherByCity = async (city: string) => {
  try {
    const response = await api.get("/data/3.0/onecall", {
      params: {
        q: city,
        appid: "648df346cf000f8c40b6499e5eff284e",
      },
    });
    return response.data;
  } catch (error: any) {
    console.error(
      "Erro na chamada da API One Call:",
      error.response?.data || error.message
    );
    throw new Error("Não foi possível buscar os dados de clima.");
  }
};
