namespace app.Controllers {
  export class HomeController {
    public movies = [];

    public deleteMovie(movie: app.Interfaces.IMovie) {
      this.MovieService.delete(movie.id).then((res) => {
        //success
        this.movies.splice(this.movies.indexOf(movie), 1);
    }, (res) => {
      alert (res);
    });
  }

    constructor(private MovieService: app.Services.MovieService) {
      this.movies = MovieService.getAll();
    }
  }
  angular.module('app').controller('HomeController', HomeController);
}
