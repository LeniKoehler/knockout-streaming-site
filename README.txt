# Streaming Page

## Datensatz hinzufügen ##
Zum Hinzufügen eines Datensatzes zu einer Liste, einfach in der Datei ./js/viewModel.js einen neuen ListEntry hinzufügen.

z.B.: zum Hinzufügen eines Films zur Liste "Neue Filme", einfach unterhalb von Zeile 30 "new ListEntry(title, regisseur, imgPath, publishingYear, actors, description)" hinzufügen.

Dabei gelten folgende Datentypen:
- title = String
- regisseur = String
- imgPath = String
- publishingYear = Integer
- actors = Array<String>
- description = String

Die Liste "Derzeit beliebt" befindet sich in der Datei ./js/viewModel.js in Zeile 34.
Die Liste "Nochmal ansehen" befindet sich in der Datei ./js/viewModel.js in Zeile 40.

Für diese beiden Listen gilt dieselbe Methodik zum Einfügen eines Datensatzes wie für "Neue Filme".


