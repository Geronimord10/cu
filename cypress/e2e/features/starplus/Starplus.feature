Feature: test de la pagina de starplus

    Scenario: verificar que exista "series"
        Given que un usuario esta en la pagina de "starplus"
        When clickea la opcion "Contratá la oferta Combo+"
        Then verifica el titulo "Escribe tu correo electrónico" para la suscripcion