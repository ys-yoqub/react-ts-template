import {
  useQuery,
  useMutation,
  UseQueryResult,
  UseMutationResult,
} from "@tanstack/react-query";
import api from "../../services/api";
import { AxiosResponse } from "axios";

export type RequestBody = Record<string, unknown>;
export type RequestMethod = "get" | "post" | "put" | "delete";

// UseFetch handles GET requests with caching and refetching
const useFetch = <T>(key: string[] | null, url: string): UseQueryResult<T> => {
  const query = useQuery<T>({
    queryKey: key!,
    queryFn: async () => {
      const response: AxiosResponse<T> = await api.get<T>(url);
      return response.data;
    },
  });
  return query;
};

// UseMutationRequest handles POST, PUT, DELETE requests
const useMutationRequest = <T>(
  url: string,
  method: RequestMethod
): UseMutationResult<T, Error, RequestBody> => {
  const mutation = useMutation<T, Error, RequestBody>({
    mutationFn: async (body) => {
      const response: AxiosResponse<T> = await api[method]<T>(url, body);
      return response.data;
    },
  });
  return mutation;
};

export { useFetch, useMutationRequest };
