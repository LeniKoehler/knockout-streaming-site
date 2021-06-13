
        function AppViewModel() {
            this.firstName = ko.observable("Bert");
            this.lastName = ko.observable("Bertington");
            this.fullName = ko.computed(function() {
                return this.firstName() + " " + this.lastName();    
            }, this);
            
            this.capitalizeLastName = function() {
                var currentVal = this.lastName();        // Read the current value
                this.lastName(currentVal.toUpperCase()); // Write back a modified value
            }

            this.openNav = function() {
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
                
            // Editable data
            self.movies = ko.observableArray([
                new ListEntry("Titanic", "James Cameron"),
                new ListEntry("The Dark Knight Rises", "Christopher Nolan")
            ]);
            
            // Operations
            self.addMovie = function() {
                self.movies.push(new ListEntry("testTitel", "testRegisseur"));
            }
            self.removeMovie = function(movie) { self.movies.remove(movie) }
         

        }

        // Activates knockout.js
        ko.applyBindings(new AppViewModel());
        
        function ListEntry(title, regisseur) {
            var self = this;
            self.title = title;
            self.regisseur = regisseur;
        }