import axios, { AxiosInstance } from "axios";

import { Marca } from "@/model/Marca";



class MarcaClient {

    private axiosClient: AxiosInstance

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/marca',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number): Promise<Marca> {
      try {
          return (await this.axiosClient.get<Marca>(`/${id}`)).data
      } catch (error:any) {
          return Promise.reject(error.response.data)
      }
  }

  public async listaCompleta(): Promise<Marca[]> {
    try {
        return (await this.axiosClient.get<Marca[]>(`/lista`)).data
    } catch (error:any) {
        return Promise.reject(error.response.data)
    }
}


    public async findByAtivo(ativo: Boolean): Promise<Marca[]> {
        try {
          return (await this.axiosClient.get<Marca[]>(`/ativos/${ativo}`)).data;
        } catch (error: any) {
          return Promise.reject(error.response.data);
        }
      }

      public async cadastrar(marca: Marca): Promise<string> {
        try {
            return (await this.axiosClient.post<string>(``, marca)).data
        } catch (error:any) {
            return Promise.reject(error.response.data)
        }
    }

    public async editar(id: number, marca: Marca): Promise<string> {
      try {
          return (await this.axiosClient.put<string>(`/${id}`, marca)).data
      } catch (error:any) {
          return Promise.reject(error.response.data)
      }
  }

  public async deletaMarca(id: number): Promise<string> {
    try {
        return (await this.axiosClient.delete<string>(`/${id}`)).data
    } catch (error:any) {
        return Promise.reject(error.response.data)
    }
}

    
	
}

export default new MarcaClient();