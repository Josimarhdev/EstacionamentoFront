import axios, { AxiosInstance } from "axios";

import { Veiculo } from "@/model/Veiculo";



export class VeiculoClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/veiculo',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number) : Promise<Veiculo> {
        try {
            return (await this.axiosClient.get<Veiculo>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async ListaCompleta(): Promise<Veiculo[]> {
        try {
            return (await this.axiosClient.get<Veiculo[]>('/')).data;
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }


    public async findByAtivo(ativo: Boolean): Promise<Veiculo[]> {
        try {
          return (await this.axiosClient.get<Veiculo[]>(`/ativos/${ativo}`)).data;
        } catch (error: any) {
          return Promise.reject(error.response);
        }
      }

	public async cadastrar(veiculo: Veiculo): Promise<void> {
		try {
			return (await this.axiosClient.post('/', veiculo))
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

	public async editar(veiculo: Veiculo): Promise<void> {
		try {
			return (await this.axiosClient.put(`/${veiculo.id}`, veiculo)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

	public async deletaVeiculo(veiculo: Veiculo): Promise<void> {
        try {
          return (await this.axiosClient.delete(`/delete/${veiculo.id}`, { data: veiculo })).data;
        } catch (error: any) {
          return Promise.reject(error.response);
        }
      }

	
}