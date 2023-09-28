Feature: test de la pagina de Store automation

    Scenario: realizar login
        Given dado que un usuario está en la pagina de "Store"
        When el usuario presiona "login o register" en el menu principal
        And completa usuario y password "1"
        Then se verifica que el titulo principal es "My account"