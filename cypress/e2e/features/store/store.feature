Feature: test de la pagina de Store automation

    Scenario: realizar login
        Given que un usuario esta en la pagina de "Store"
        When el usuario presiona "login o register" en el menu principal
        And completa usuario y password "1"
        Then se verifica que el título principal es "My account"

    Scenario: Realizar Login
        When el usuario realiza hover "welcome back"
        And clickea la opción "logoff"
        Then se verifica que el título principal es "Account logout"

    Scenario: Realizar Login & LOgout - Ejemplo 2
        When el usuario realiza logout
        Then se verifica que el título principal es "Account Logout"

    Scenario: Test visual del header
        Given que un usuario esta en la pagina de "Store"
        Then se verifica que el elemento ".headerstrip" posee los atributos
            | css-attribute    | valor            | log                    |
            | background-color | rgb(0, 161, 203) | fondo de color celeste |