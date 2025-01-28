export const getGeoLocation = (): Promise<{ lat: number; lon: number }> => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ lat: latitude, lon: longitude });
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
