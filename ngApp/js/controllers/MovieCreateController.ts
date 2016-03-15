namespace app.Controllers {
  export class MovieCreateController {
    public movie: app.Interfaces.IMovie = { id: null, title: '', director: ''};


    public createMovie() {
      this.MovieService.create(this.movie).then((res) => {
        //then... if AJAX is sucessful, run this function
        this.$state.go('Home');
      }, (err) => {
        //otherwise... run this function
        alert(err);
      })
    }
  constructor(private MovieService: app.Services.MovieService, private $state: ng.ui.IStateService) {
    }
  }

  angular.module('app').controller('MovieCreateController', MovieCreateController);
}
