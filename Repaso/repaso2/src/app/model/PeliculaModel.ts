export interface PeliculaModel {
    id: number,
    titulo: string,
    actores: ActorModel[]
}
export interface ActorModel {
    nombre: string,
    genero: string,
    edad: number
}
export interface RespuestaJSON {
    peliculas: PeliculaModel[];
}