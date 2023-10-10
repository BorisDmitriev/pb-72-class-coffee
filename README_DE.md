### Coffee Shop App

- Arbeite in der Datei `index.js`.

Schreibe eine **Klasse** namens `CoffeeShop`, die **drei Instanz-Eigenschaften** hat:

1.  **name** : ein String (Name des Ladens)
2.  **menu** : ein Array von Objekten, die jeweils die Eigenschaften **`item`** (Name des Artikels), **`type`** ("food" oder "drink") und **`price`** enthalten.
3.  **orders** : ein leeres Array

und **Acht Methoden**:

1. **`shopName`**: gibt den Namen des Coffeeshops zurück
  
2.  **`addOrder`**: akzeptiert einen Parameter, um den **Name** des Artikels am Ende des Arrays **orders** hinzuzufügen, wenn er im **Menü** vorhanden ist, und gibt die Meldung `"Bestellung hinzugefügt!"` zurück. Andernfalls wird die Meldung `"Dieser Artikel ist derzeit nicht verfügbar!"`
3.  **`fulfillOrder`**: Wenn das `**orders**`-Array **nicht leer** ist, entfernt es den ältesten Artikel aus dem Array und gibt die Meldung `"Der {item} ist fertig!"` zurück. Wenn das Array **`orders`** leer ist, wird `"Alle Bestellungen wurden erfüllt!"` **WICHTIG**: Bestellungen werden in einer **FIFO** (first-in, first-out) Reihenfolge erfüllt. Achte darauf, dass die älteste Bestellung zuerst bearbeitet und aus dem Array "orders" entfernt wird.
4.  **`listOrders`**: gibt die Liste der **Bestellungen** zurück oder ein **leeres** Array, wenn es keine gibt.
5.  **`dueAmount`**: gibt den fälligen Gesamtbetrag für die **`orders`** zurück.
6.  **`cheapestItem`**: gibt den **Namen** des günstigsten Artikels auf der Speisekarte zurück.
7.  **`drinksOnly`**: gibt nur die Artikel **Namen** des Typs **`drink´** aus der Speisekarte zurück.
8.  **`foodOnly`**: gibt nur die Artikel **Namen** vom Typ **`food`** aus dem Menü zurück.


### Beispiele

```
tcs.addOrder("heißer Kakao") ➞ "Dieser Artikel ist derzeit nicht verfügbar!"
// Tesha's Coffee Shop verkauft keinen heißen Kakao
tcs.addOrder("Eistee") ➞ "Dieser Artikel ist derzeit nicht verfügbar!"
// Die Angabe der Variante von "Eistee" hilft bei der Bearbeitung

tcs.addOrder("Zimtrolle") ➞ "Bestellung hinzugefügt!"
tcs.addOrder("Eiskaffee") ➞ "Bestellung hinzugefügt!"
tcs.listOrders ➞ ["Zimtrolle", "Eiskaffee"]
// die Liste mit allen Artikeln der aktuellen Bestellung

tcs.dueAmount() ➞ 2.17

tcs.fulfillOrder() ➞ "Die Zimtrolle ist fertig!"
tcs.fulfillOrder() ➞ "Der Eiskaffee ist fertig!"
tcs.fulfillOrder() ➞ "Alle Bestellungen wurden erfüllt!"
// alle Bestellungen wurden vermutlich bedient

tcs.listOrders() ➞ []
// ein leeres Array wird zurückgegeben, wenn alle Bestellungen erfüllt wurden

tcs.dueAmount() ➞ 0.0
// keine neuen Aufträge angenommen, erwarte eine fällige Null

tcs.cheapestItem() ➞ "Limonade"
tcs.drinksOnly() ➞ ["Orangensaft", "Limonade", "Cranberrysaft", "Ananassaft", "Zitronen-Eistee", "Vanille Chai Latte", "Heiße Schokolade", "Eiskaffee"]
tcs.foodOnly() ➞ ["Thunfischsandwich", "Schinken-Käse-Sandwich", "Speck und Ei", "Steak", "Hamburger", "Zimtrolle"]
```

### Anmerkungen

Runde den **Betrag** auf **zwei Dezimalstellen** auf.
