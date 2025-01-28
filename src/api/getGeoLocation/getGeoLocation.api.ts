import { api } from "../api";

export const getGeoLocation = (): Promise<{
  lat: number;
  lon: number;
  city: string;
}> => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getCityFromCoordinates(latitude, longitude)
            .then((city) => {
              resolve({ lat: latitude, lon: longitude, city });
            })
            .catch((error) => reject(error));
        },
        (error) => {
          reject(new Error("Permissão negada para acessar a localização."));
        }
      );
    } else {
      reject(new Error("Geolocalização não é suportada pelo navegador."));
    }
  });
};

const getCityFromCoordinates = async (
  lat: number,
  lon: number
): Promise<string> => {
  try {
    const response = await api.get(`/geo/1.0/reverse`, {
      params: {
        lat,
        lon,
        appid: "648df346cf000f8c40b6499e5eff284e",
        lang: "pt_br",
      },
    });

    if (response.data) {
      const city = `${response.data[0].name}, ${response.data[0].state}`;
      return city;
    } else {
      throw new Error("Cidade não encontrada.");
    }
  } catch (error) {
    throw new Error("Erro ao buscar a cidade: ");
  }
};
