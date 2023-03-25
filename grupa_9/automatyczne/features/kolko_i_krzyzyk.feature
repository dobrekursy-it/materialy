Feature: Kolko i krzyzyk
  Scenario: Pierwsze klikniecie to kolko
    Given uzytkownik wlaczyl gre
	  When uzytkownik kliknal w kafalek "5"
    Then kafelek "5" jest "kolkiem"
  Scenario: Drugie klikniecie to krzyzyk
    Given uzytkownik wlaczyl gre
  	 When uzytkownik kliknal w kafalek "5"
     When uzytkownik kliknal w kafalek "6"
     Then kafelek "6" jest "krzyzykiem"
  Scenario: Kolko wygrywa
    Given uzytkownik wlaczyl gre
    When uzytkownik kliknal w kafalek "5"
    And uzytkownik kliknal w kafalek "6"
    And uzytkownik kliknal w kafalek "2"
    And uzytkownik kliknal w kafalek "3"
    And uzytkownik kliknal w kafalek "8"
    Then "kolko" wygrywa
  Scenario: Krzyzyk wygrywa
    Given uzytkownik wlaczyl gre
    When uzytkownik kliknal w kafalek "5"
    And uzytkownik kliknal w kafalek "8"
    And uzytkownik kliknal w kafalek "2"
    And uzytkownik kliknal w kafalek "9"
    And uzytkownik kliknal w kafalek "3"
    And uzytkownik kliknal w kafalek "7"
    Then "krzyzyk" wygrywa
  Scenario: remis
    Given uzytkownik wlaczyl gre
    When uzytkownik kliknal w kafalek "5"
    And uzytkownik kliknal w kafalek "3"
    And uzytkownik kliknal w kafalek "7"
    And uzytkownik kliknal w kafalek "1"
    And uzytkownik kliknal w kafalek "2"
    And uzytkownik kliknal w kafalek "8"
    And uzytkownik kliknal w kafalek "9"
    And uzytkownik kliknal w kafalek "4"
    And uzytkownik kliknal w kafalek "6"
    Then remis
