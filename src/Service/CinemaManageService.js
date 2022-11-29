import { baseService } from "./baseService";
export class CinemaManageService extends baseService {
  constructor(){
    super()
  }
     getAllCinema =()=>{
      return this.get('/cluster/')
     }
    getAllMovieSchedule =(filmId) => { 
      return this.get(`/film/?filmId=${filmId}`)
     }
  }
  export const CinemaService = new CinemaManageService();