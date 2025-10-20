export const capitalizeFirstLetter = (text) => {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export function handleRetry() {
  window.location.reload();
}

export const getMessageError = (error, entity) => {
  if (!error) return null;

  if (
    error.code === "ERR_NETWORK" ||
    error.message?.includes("Network Error")
  ) {
    return `Problema de conexión con el servidor. Esto puede deberse a restricciones de seguridad del navegador.`;
  }

  if (
    error.message?.includes("CORS") ||
    error.message?.includes("Access-Control-Allow-Origin")
  ) {
    return `Error de seguridad del navegador. No se puede acceder al servidor desde esta ubicación.`;
  }

  if (error.response?.status === 502) {
    return `El servidor no está disponible temporalmente. Por favor, intenta nuevamente en unos momentos.`;
  }

  if (error.response?.status === 404) {
    return `No se encontraron los ${entity} solicitados`;
  }

  return `Error al cargar ${entity}`;
};
