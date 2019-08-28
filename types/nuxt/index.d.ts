import { NuxtAxiosInstance } from '@nuxtjs/axios'
export interface Context {
  $axios: NuxtAxiosInstance
}
declare module '*.json' {
  const data: any;
  export default data;
}
