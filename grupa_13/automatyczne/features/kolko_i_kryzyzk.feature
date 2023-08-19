Feature: Gra w kolko i krzyzyk
  Scenario: Pierwsze klikniecie
    Given uzytkownik uruchomil gre
    When uzytkownik kliknal w "gorny" "srodkowy" kafalek
    Then kaflek "gorny" "srodkowy" jest "kolkiem"

  Scenario: Drugie klikniecie
    Given uzytkownik uruchomil gre
    When uzytkownik kliknal w "gorny" "lewy" kafalek
    When uzytkownik kliknal w "gorny" "srodkowy" kafalek
    Then kaflek "gorny" "srodkowy" jest "krzyzykiem"

  Scenario: Kolko wygrywa
    Given uzytkownik uruchomil gre
    When uzytkownik kliknal w "gorny" "lewy" kafalek
    When uzytkownik kliknal w "gorny" "srodkowy" kafalek
    When uzytkownik kliknal w "srodkowy" "lewy" kafalek
    When uzytkownik kliknal w "srodkowy" "srodkowy" kafalek
    When uzytkownik kliknal w "dolny" "lewy" kafalek
    Then "kolko" wygrywa
