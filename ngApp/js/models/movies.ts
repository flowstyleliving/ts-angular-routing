namespace app.Models {
  export class Movie {
    public id;
    public title;
    public director;

    constructor(id_obj: (number | app.Interfaces.IMovie), title?: string, director?: string) {
      if (typeof id_obj === 'number') {
        this.id = id_obj;
        this.title = title;
        this.director = director;
      } else {
        this.id = id_obj.id;
        this.title = id_obj.title;
        this.director = id_obj.director;
      }
    }
  }
}
