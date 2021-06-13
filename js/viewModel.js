
        function AppViewModel() {

            this.openNav = function(movie) {
                document.getElementById("myTitle").textContent = movie.title;
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
         
             this.closeNav = function() {
                document.getElementById("mySidenav").style.display = "none";
                document.getElementById("box1").style.transform = "scale(1)";
                document.getElementById("box1").style.transition = "all 0.7s ease";
                document.getElementById("box1").style.border = "none";
            }

        
            var self = this;
            
            // Neue Filme Liste
            self.newMovies = ko.observableArray([
                new ListEntry("The SpongeBob Movie", "Tim Hill", "https://i.insider.com/603e9dc8b46d720018b046ed?width=700", 2021, ["Tom Kenny", "Bill Fagerbakke", "Clancy Brown"]),
                new ListEntry("Tom & Jerry", "Tim Story", "https://cdn.pnp.de/_em_daten/_cache/image/1xGLYpHmzNIKfYTHBgRTd5w1oZhYyZvy5tKC_eLn6osTSAN-3JWlGHkbiv4an-mFZ2uKNZh-sj8sRdiiG1oIcV12YspkeFzbabWZBs72K7z9SO38ljBvFNk6quPDqdVytw/200423-1438-29-80103446-tom-und-jerry-4-foto-warner-bros.jpg", 2020, ["Chloë Grace Moretz", "Michael Peña", "Ken Jeong"])
            ]);            

            // Derzeit Beliebte Liste
            self.popularMovies = ko.observableArray([
                new ListEntry("Avatar", "James Cameron", "https://crops.giga.de/33/60/19/102b81b0a56288a41103815eec_YyA5Mzl4NTI4KzMwKzE3AnJlIDUwMCAyODADMzAxYmI1ODQwMWU=.jpg", 2009, ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"]),
                new ListEntry("E.T.", "Steven Spielberg", "https://static.kino.de/wp-content/uploads/2018/09/landscape-1478617763-et-phone-home-rcm480x0u.jpg", 1982, ["Dee Wallace", "Henry Thomas", "Peter Coyote"])
            ]);

            // Editable data
            self.rewatchMovies = ko.observableArray([
                new ListEntry("Titanic", "James Cameron", "https://image.stern.de/8413980/t/g1/v4/w1440/r1.7778/-/titanic.jpg", 1997, ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"]),
                new ListEntry("The Dark Knight Rises", "Christopher Nolan", "https://i.weltbild.de/p/batman-the-dark-knight-072353034.jpg?v=3&wp=_ads-minzoom2", 2012, ["Christian Bale", "Gary Oldman", "Anne Hathaway"])
            ]);
            
            
            // Operations
            self.addMovie = function() {
                self.movies.push(new ListEntry("testTitel", "testRegisseur", "testPath"));
            }
            self.removeMovie = function(movie) { self.movies.remove(movie) }

          
        }

        // Activates knockout.js
        ko.applyBindings(new AppViewModel());
        
        function ListEntry(title, regisseur, imgPath, publishingYear, actors) {
            var self = this;
            self.title = title;
            self.regisseur = regisseur;
            self.imgPath = imgPath;
            self.publishingYear = publishingYear;
            self.actors = actors;
        }

        