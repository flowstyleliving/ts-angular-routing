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
      return this.MovieResource.query();
    }

    public create(movie: app.Interfaces.IMovie) {
      return this.MovieResource.save(movie).$promise;
    }

    constructor(private $resource: ng.resource.IResourceService) {
      this.MovieResource = <IMovieResource>$resource('/api/movies');
    }
  }

  angular.module('app').service('MovieService', MovieService);
}
