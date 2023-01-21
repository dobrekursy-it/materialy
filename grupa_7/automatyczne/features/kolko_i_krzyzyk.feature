Feature: Kolko i krzyzyk
  Scenario: kliniecie w pole
    Given użytkownik uruchomile gre
    When użytkownik klika w pole "1" "1"
    Then pole "1" "1" jest "kolkiem"
  Scenario: drugie klikniecie
    Given użytkownik uruchomile gre
    When użytkownik klika w pole "1" "1"
    When użytkownik klika w pole "1" "2"
    Then pole "1" "2" jest "krzyzykiem"
  Scenario: kolko wygrywa
    Given użytkownik uruchomile gre
    When użytkownik klika w pole "1" "1"
    When użytkownik klika w pole "1" "2"
    When użytkownik klika w pole "2" "1"
    When użytkownik klika w pole "2" "2"
    When użytkownik klika w pole "3" "1"
    Then wygrywa "kolko"
  Scenario: krzyzyk wygrywa
    Given użytkownik uruchomile gre
    When użytkownik klika w pole "1" "1"
    When użytkownik klika w pole "1" "2"
    When użytkownik klika w pole "2" "1"
    When użytkownik klika w pole "2" "2"
    When użytkownik klika w pole "3" "3"
    When użytkownik klika w pole "3" "2"
    Then wygrywa "krzyzyk"
