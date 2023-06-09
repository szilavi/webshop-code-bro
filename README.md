# Fictional webshop

Ezt a projektet Márai István, Hőzső Csaba, Páhy Zoárd Zsolt és Szilágyi Viktor készítette.

Az oldal egy fiktív filmes webshop.

## Előkészítés

- A projekt elindításához először ki kell adni az `npm i` parancsot.
- Ha szükséges, akkor telepítsük a jQuery-t ` npm install jquery --save`!
- Indítsuk el a json-servert, a főkönyvtárban adjuk ki a ` json-server --watch .\server\movies.json` parancsot!
- Végül indítsuk el az oldalt: `ng serve`

## Home component

- Ez a főoldala a webshopnak.
- Egy kiemelt terméksor van az oldal tetején.
  > 5 kiemelt terméket tartalmaz, azok közül jelennek meg, amelyeknek featured tulajdonsága true.
- A kiemelt termékek alatt van egy akciós terméksor is, ide bármilyen random termék
  kerülhet, szintén 5 darab van belőle.

## Category oldalak

- Itt is megjelenik a kiemelt terméksor 5 termékkel, de ezek már az adott kategóriából származnak.
  Ezek azok a termékek, amelyek az adott kategóriához tartoznak és a featured tulajdonságuk true.
- Alatta van egy terméklista. Itt az összes termék, amely
  az adott kategóriában található, egy rácsrendszerben vannak. Azt, hogy melyik termék melyik kategóriában van, a catId mondja meg.
- A terméklista tetején van egy szűrőmező. Ez egy input mező, ha gépelni kezdenek bele, akkor
  a név alapján leszűri a termékeket.

### 1. Termékkártya komponens

Ez jeleníti meg az egyes termékeket. Az alábbi részei vannak:

- Termékkép, teljes szélességében a kártya felső 30-50%-át foglalja el.
- Alatta egymás alatt: név, rövid leírás, készlet, ár.
  Kiindulásnak jó lehet (de módosítsátok): `https://getbootstrap.com/docs/4.6/components/card/#example`
- Működése: input tulajdonságként kapja meg a megjelenített terméket,
  pl.: `<app-product-card [product]="product"></app-product-card>`

### 2. Terméklapozó komponens

Az öt terméket jeleníti meg. A főoldalon kettő, a kategóriaoldalakon egy van belőle,
csak különböző termékekkel. Tehát ez jeleníti meg a főoldalon a kiemelt és akciós
termékeket, a kategóriaoldalakon pedig a kategória kiemelt termékeit.

- Működése: input tulajdonságként kapja meg az 5 terméket. \*ngFor használatával
  jeleníti meg őket, minden termék egy product-card komponens lesz.
- Több termék is megjelenik benne, jobbra-balra lapozó gombokkal.

### 3. Terméklista komponens

Ez a komponens hasonlóan működik, mint a terméklapozó, de ez korlátlan számú terméket
képes megjeleníteni.

- Működése: input tulajdonságként kapja meg a termékek tömbjét. Ezeket bejárva (\*ngFor)
  minden terméket egy product-card komponenssel jelenít meg.

## Extra funkciók

- A lista nézetben a termékeket szűrni nemcsak név, hanem más paraméterek alapján is lehet.
- A lista nézetben rendezni is lehet a termék kártyákat, ár, név, akció, kiemelt alapján.

## AdminComponent

- Hozzatok létre egy új komponenst admin néven.
- A menüben is, és az `/admin` URL-en is elérhető.
- Ezen az oldalon van egy szerkesztő komponens, ahol a termékek adatait lehet módosítani.

## DataEditorComponent

- Az admin oldalon található.
- Egy adatlistát jelenít meg táblázatos formában.
- Ez a komponens a termékek adatainak a szerkesztését látja el.
- Az adatsorokban az egyes adatok input elemként jelennek meg, kétirányú
  adatkötéssel. Minden adatsor végén van kettő gomb a fő műveletekhez.
- Az adatlistát szűrni is lehet egy bizonyos oszlop alapján egy beviteli
  mezőbe írva.
