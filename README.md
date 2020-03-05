## Welcome in the repo with solutions for React Hooks: useState and useEffect workshops!

Run _yarn_ and then _yarn start_.
There are no solutions for tasks with a star.
Go to the App.tsx and uncomment the ONE line of code you want render.
There's the list of tasks:

### Stage I - useState
Go to _src/part1/Part1_ and _src/part1/Contact_.
  1. Zbuduj prosty komponent do wyświetlania pojedynczego kontaktu (Hint: you can use randomuser.me for user data - just copy it over to your code || use already saved JSON file with random 5 contacts in _src/data_)
  2. Zbuduj komponent który wyświetla listę kontaktów
  3. Pokazuj/chowaj szczegóły kontaktu po najechaniu kursorem (bez uzycia hover CSS)
  4. Dodaj funkcjonalność filtrowania po imieniu
  5. ⭐Dodaj przycisk, który po kliknieciu spowoduje ze szczegóły kontaktu będą cały czas widoczne
  6. ⭐Filtruj po wszystkich polach, nie tylko po imieniu
  7. ⭐Filtrowanie powinno być niewrazliwe na wielkosc liter
  8. ⭐Dodaj przycisk do sortowania kontaktów po imieniu; kliknięcie przycisku spowoduje zmiane kierunku sortowania
  9. ⭐Dodaj ikone kierunku sortowania (↑/↓)

### Stage II - useEffect
Go to _src/part2_ and follow git commits.
  1. Zamiast hardcodować listę kontaktów, pobierz 5 kontaktów z API, np. z randomuser.me
  2. Dodaj loader ktory sie wyświetla podczas pobierania danych
  3. ⭐Dodaj error handling gdyby coś poszło nie tak
  4. ⭐Dodaj button “Załaduj jeszcze 3” po kliknięciu doładuj 3 elementy z API


### Stage III - Custom Hooks

  1. Dodaj do hooka useFavouriteContact _src/part3AddSingleFavourite/hook_ możliwość zapisywania całej listy ulubionych kontaktów (useFavouriteContacts) _src/part3AddFavourites_
  2. Stwórz hooka useFetch, który robi fetch na danym URL. Najlepiej, żeby oddawał stan loading, error i odpowiedź. _src/part2_
  1. Stwórz hooka, który nasłuchuje na pozycje kursora opuszczającego ekran i pokaż w tym czasie Alert "Nie zostawiaj nas!" _src/part3EventListener_
  3. Stwórz wyszukiwarkę dla kontaktów (auto-completion input) budując hooka useSuggestion _src/part4_
  4. ⭐Generalizuj działanie hooka useFavouriteContacts tak, żeby można było za jego pomocą zapisywać dowolne dane w localStorage _src/ReusableUseLocalStorage_
  4. ⭐Generalizuj tego hooka tak, żeby można było wybrać typ storage
