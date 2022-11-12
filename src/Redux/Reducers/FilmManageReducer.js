const stateDefault = {
  arrFilm:[
    {
        "id":"1",
        "movieName":"Ban tay diet quy",
        "desc":"Phim hay và nổi tiếng các bạn nên đón xem",
        "actor":"Trịnh Công Sơn",
        "img":"https://movienew.cybersoft.edu.vn/hinhanh/avatar-1-chieu-lai-_gp03.jpeg",
        "dateStart":"10-10-2000",
        "dateEnd":"10-10-2010",
        "country":"Việt Nam"
    },
    {
      "id":"2",
      "movieName":"Ban tay diet quy",
      "desc":"Phim hay và nổi tiếng các bạn nên đón xem",
      "actor":"Trịnh Công Sơn",
      "img":"https://movienew.cybersoft.edu.vn/hinhanh/avatar-1-chieu-lai-_gp03.jpeg",
      "dateStart":"10-10-2000",
      "dateEnd":"10-10-2010",
      "country":"Việt Nam"
  }
  ]
}
export const FilmManageReducer =(state=stateDefault,action)=>{
switch (action.type) {
  

  default:return{...state}
}
}