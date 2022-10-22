import { Metricas } from "./Metricas.model"

export interface Meteorite {
    id: Number,
    name: String,
    nametype: String,
    recclass: String,
    massG: String
    metricas:Metricas[]
}