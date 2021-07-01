
function AppViewModel() {

    var self = this;

    self.movieList = ko.observable();
    self.newMovieTitle = ko.observable();
    self.newMovieRegisseur = ko.observable();
    self.newMovieImgPath = ko.observable();
    self.newMovieYear = ko.observable();
    self.newMovieActors = ko.observable();
    self.newMovieDecription = ko.observable();

    self.adminMode = ko.observable(false);
    self.detailMode= ko.observable(false);
    self.deleteMovieWithID = ko.observable(0);

    self.availableMovieLists = [
        { listName: "New Movies", id: 0 },
        { listName: "Watch again", id: 1 },
        { listName: "Popular on HHN-flix", id: 2 }
    ];


    self.addMovie = function () {

        var list = this.movieList().listName;

        var movie = new ListEntry(this.newMovieTitle(), this.newMovieRegisseur(), this.newMovieImgPath(), this.newMovieYear(), this.newMovieActors(), this.newMovieDecription());
        console.log(movie);
        if (list == "New Movies") {
            self.newMovies.push(movie);
        }
        else if (list === "Watch again") {
            self.rewatchMovies.push(movie);
        }
        else if (list === "Popular on HHN-flix") {
            self.popularMovies.push(movie);
        }
        else {
            alert("Sorry, it is not possible to add a film to this list yet!")
        }
    }



    self.removeMovie = function () {
        var idValid = false;
        self.newMovies().forEach(function (v, i) {
            if (v.id == self.deleteMovieWithID()) {
                self.newMovies.remove(v);
                idValid = true;
            }

        });
        self.popularMovies().forEach(function (v, i) {
            if (v.id == self.deleteMovieWithID()) {
                self.popularMovies.remove(v);
                 idValid = true;
            }

        });
        self.rewatchMovies().forEach(function (v, i) {
            if (v.id == self.deleteMovieWithID()) {
                self.rewatchMovies.remove(v);
                 idValid = true;
            }
        });
        if(!idValid){
            alert("There is no film with that id that can be removed!");
        }
    }
    
    self.openMenu = function () {
        self.adminMode(!self.adminMode());
        self.detailMode(false);
    }

    self.openDetails = function (movie) {
        self.detailMode(true);
        document.getElementById("myTitle").textContent = movie.title;
        document.getElementById("myDescription").textContent = movie.description;
        document.getElementById("myYear").textContent = movie.publishingYear;
        document.getElementById("myRegisseur").textContent = movie.regisseur;
        document.getElementById("myActors").textContent = movie.actors;
    }

    self.closeDetails = function (movie) {
        self.detailMode(false);
    }


    self.openNav = function (movie) {
        console.log("Opened Details");
        document.getElementById("myTitle").textContent = movie.title;
        document.getElementById("myDescription").textContent = movie.description;
        document.getElementById("myYear").textContent = movie.publishingYear;
        document.getElementById("myRegisseur").textContent = movie.regisseur;
        document.getElementById("myActors").textContent = movie.actors;
        document.getElementById("mySidenav").style.display = "block";
        document.getElementById("box1").style.top = "400px";
        document.getElementById("box1").style.border = "1px solid #fff";
        document.getElementById("box1").style.transform = "scale(1)";
        document.getElementById("row").style.height = "800px";
        // document.getElementById("box1").style.display = "block";
    }

    self.closeNav = function () {
        document.getElementById("mySidenav").style.display = "none";
        document.getElementById("box1").style.transform = "scale(1)";
        document.getElementById("box1").style.transition = "all 0.7s ease";
        document.getElementById("box1").style.border = "none";
    }


    // Neue Filme Liste
    self.newMovies = ko.observableArray([
        new ListEntry("The SpongeBob Movie", "Tim Hill", "https://i.insider.com/603e9dc8b46d720018b046ed?width=700", 2021, ["Tom Kenny", "Bill Fagerbakke", "Clancy Brown"], "After SpongeBob's beloved pet snail Gary is snail-napped, he and Patrick embark on an epic adventure to The Lost City of Atlantic City to bring Gary home."),
        new ListEntry("Tom & Jerry", "Tim Story", "https://cdn.pnp.de/_em_daten/_cache/image/1xGLYpHmzNIKfYTHBgRTd5w1oZhYyZvy5tKC_eLn6osTSAN-3JWlGHkbiv4an-mFZ2uKNZh-sj8sRdiiG1oIcV12YspkeFzbabWZBs72K7z9SO38ljBvFNk6quPDqdVytw/200423-1438-29-80103446-tom-und-jerry-4-foto-warner-bros.jpg", 2020, ["Chloë Grace Moretz", "Michael Peña", "Ken Jeong"], "A chaotic battle ensues between Jerry Mouse, who has taken refuge in the Royal Gate Hotel, and Tom Cat, who is hired to drive him away before the day of a big wedding arrives.")
    ]);

    // Derzeit beliebte Filme Liste
    self.popularMovies = ko.observableArray([
        new ListEntry("Avatar", "James Cameron", "https://crops.giga.de/33/60/19/102b81b0a56288a41103815eec_YyA5Mzl4NTI4KzMwKzE3AnJlIDUwMCAyODADMzAxYmI1ODQwMWU=.jpg", 2009, ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"], "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home."),
        new ListEntry("E.T.", "Steven Spielberg", "https://static.kino.de/wp-content/uploads/2018/09/landscape-1478617763-et-phone-home-rcm480x0u.jpg", 1982, ["Dee Wallace", "Henry Thomas", "Peter Coyote"], "A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.")
    ]);

    // Wiederholt Filme ansehen Liste
    self.rewatchMovies = ko.observableArray([
        new ListEntry("Titanic", "James Cameron", "https://image.stern.de/8413980/t/g1/v4/w1440/r1.7778/-/titanic.jpg", 1997, ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"], "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."),
        new ListEntry("The Dark Knight Rises", "Christopher Nolan", "https://i.weltbild.de/p/batman-the-dark-knight-072353034.jpg?v=3&wp=_ads-minzoom2", 2012, ["Christian Bale", "Gary Oldman", "Anne Hathaway"], "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.")
    ]);

}

var movieCount = 0;
function ListEntry(title, regisseur, imgPath, publishingYear, actors, description) {
    var self = this;
    self.id = movieCount++;
    self.title = title;
    self.regisseur = regisseur;
    self.imgPath = imgPath;
    self.publishingYear = publishingYear;
    self.actors = actors;
    self.description = description;
}


// Activates knockout.js
ko.applyBindings(new AppViewModel());


