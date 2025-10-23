import { AxiosError } from "axios";
import { ErrorWithCode } from "../types/common.types";

export const capitalizeFirstLetter = (text: string) => {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export function handleRetry() {
  window.location.reload();
}

export const getMessageError = (
  error: Error | AxiosError | string | null | undefined,
  entity: string
): string | null => {
  if (!error) return null;

  if (typeof error === "string") {
    return error;
  }

  const errorWithCode = error as ErrorWithCode;

  if (
    errorWithCode.code === "ERR_NETWORK" ||
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

  const axiosError = error as AxiosError;

  if (axiosError.response?.status === 502) {
    return `El servidor no está disponible temporalmente. Por favor, intenta nuevamente en unos momentos.`;
  }

  if (axiosError.response?.status === 404) {
    return `No se encontraron los ${entity} solicitados`;
  }

  return `Error al cargar ${entity}`;
};
