import axios, { AxiosInstance } from "axios";

import { Condutor } from "@/model/Condutor";



class CondutorClient {

    private axiosClient: AxiosInstance

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/condutor',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number): Promise<Condutor> {
      try {
          return (await this.axiosClient.get<Condutor>(`/${id}`)).data
      } catch (error:any) {
          return Promise.reject(error.response.data)
      }
  }

  public async listaCompleta(): Promise<Condutor[]> {
    try {
        return (await this.axiosClient.get<Condutor[]>(`/lista`)).data
    } catch (error:any) {
        return Promise.reject(error.response.data)
    }
}


    public async findByAtivo(ativo: Boolean): Promise<Condutor[]> {
        try {
          return (await this.axiosClient.get<Condutor[]>(`/ativos/${ativo}`)).data;
        } catch (error: any) {
          return Promise.reject(error.response.data);
        }
      }

      public async cadastrar(condutor: Condutor): Promise<string> {
        try {
            return (await this.axiosClient.post<string>(``, condutor)).data
        } catch (error:any) {
            return Promise.reject(error.response.data)
        }
    }

    public async editar(id: number, condutor: Condutor): Promise<string> {
      try {
          return (await this.axiosClient.put<string>(`/${id}`, condutor)).data
      } catch (error:any) {
          return Promise.reject(error.response.data)
      }
  }

  public async deletaCondutor(id: number): Promise<string> {
    try {
        return (await this.axiosClient.delete<string>(`/${id}`)).data
    } catch (error:any) {
        return Promise.reject(error.response.data)
    }
}

    
	
}

export default new CondutorClient();