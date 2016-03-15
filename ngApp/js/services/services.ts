namespace app.Services {
  interface IMovieResourceClass extends ng.resource.IResource<IMovieResourceClass> {
    id: number;
    title: string;
    director: string;
  }

  interface IMovieResource extends ng.resource.IResourceClass<IMovieResourceClass> {

  }

  export class MovieService {
    private MovieResource: ng.resource.IResourceClass<IMovieResourceClass>;

    public getAll() {
      // GET: /api/movies
      return this.MovieResource.query();
    }

    public create(movie: app.Interfaces.IMovie) {
      // POST: /api/movies
      return this.MovieResource.save(movie).$promise;
    }

    public delete(movieId: number) {
      //DELETE: /api/movies/
      return this.MovieResource.delete({id: movieId}).$promise;
    }

    constructor(private $resource: ng.resource.IResourceService) {
      this.MovieResource = <IMovieResource>$resource('/api/movies/:id');
    }
  }

  angular.module('app').service('MovieService', MovieService);
}
