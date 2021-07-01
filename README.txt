# Streaming Page

Die Seite kann alternativ auch hier betrachtet werden: https://lenikoehler.github.io/knockout-streaming-site/index.html

## Datensatz hinzufügen ##
Zum Hinzufügen eines Datensatzes zu einer Liste gibt es zwei Möglichkeiten:

- in der UI: Button "Account" oben rechts klicken. Aus dem DropDown Menü die Liste wählen, zu der man einen Film hinzufügen möchte. 
             Dann die Infos (Titel, Regisseur, Image Path, Year und Description) eintragen und auf den Button "Add" klicken.

- im Code: einfach in der Datei ./js/viewModel.js einen neuen ListEntry hinzufügen.

            z.B.: zum Hinzufügen eines Films zur Liste "Neue Filme", einfach unterhalb von Zeile 119
            "new ListEntry(title, regisseur, imgPath, publishingYear, actors, description)" hinzufügen.

            Dabei gelten folgende Datentypen:
            - title = String
            - regisseur = String
            - imgPath = String
            - publishingYear = Integer
            - actors = Array<String>
            - description = String

            Die Liste "Derzeit beliebt" befindet sich in der Datei ./js/viewModel.js in Zeile 122.
            Die Liste "Nochmal ansehen" befindet sich in der Datei ./js/viewModel.js in Zeile 129.

            Für diese beiden Listen gilt dieselbe Methodik zum Einfügen eines Datensatzes wie für "Neue Filme".

## Datensatz löschen ##

Um einen Datensatz zu löschen gibt es ebenfalls zwei Möglichkeiten:

- in der UI: Button "Account" oben rechts klicken. Es werden jetzt die ID's der Filme angezeigt. Im Feld "ID:" 
             unter "Remove a movie" die ID wählen und auf "remove" klicken.

- im Code: einfach die Zeile Code in der jeweiligen Liste löschen.

## Zusatzinfo ##
Die viewModel.js wird momentan aus github gezogen, wir haben allerdings die Datei zur Beurteilung in der 
Filestruktur gelassen, damit Sie diese begutachten können.