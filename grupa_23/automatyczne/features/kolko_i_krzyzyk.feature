Feature: Gra w kolko i krzyzyk

    Jest to gra dla dwoch osob

    Scenario: Uzytkownik rozpoczyna gre
        Given Gracz uruchomil gre
        When Gracz kliknal kafelek "lewy" "gorny"
        Then Kafelek "lewy" "gorny" jest "o"

    Scenario: Wygrywa kolko
        Given Gracz uruchomil gre
        When Gracz kliknal kafelek "srodkowy" "srodkowy"
        When Gracz kliknal kafelek "lewy" "dolny"
        When Gracz kliknal kafelek "prawy" "dolny"
        When Gracz kliknal kafelek "lewy" "srodkowy"
        When Gracz kliknal kafelek "lewy" "gorny"
        Then Wygywa "o"

    Scenario: Wygrywa krzyzyk
        Given Gracz uruchomil gre
        When Gracz kliknal kafelek "lewy" "gorny"
        When Gracz kliknal kafelek "srodkowy" "srodkowy"
        When Gracz kliknal kafelek "srodkowy" "gorny"
        When Gracz kliknal kafelek "prawy" "gorny"
        When Gracz kliknal kafelek "lewy" "srodkowy"
        When Gracz kliknal kafelek "lewy" "dolny"
        Then Wygywa "x"

    Scenario: Remis
        Given Gracz uruchomil gre
        When Gracz kliknal kafelek "lewy" "gorny"
        When Gracz kliknal kafelek "srodkowy" "srodkowy"
        When Gracz kliknal kafelek "srodkowy" "gorny"
        When Gracz kliknal kafelek "prawy" "gorny"
        When Gracz kliknal kafelek "lewy" "srodkowy"
        When Gracz kliknal kafelek "lewy" "dolny"
        Then Wygywa "x"


 