Feature: ejemplo de uso de tablas

    Scenario: ejemplo de uso de hashes
        Then leo la siguiente tabla aplicando Hashes
            | num | mes     |
            | 1   | enero   |
            | 2   | febrero |

    Scenario: Ejemplo de Uso de rows
        Then leo la siguiente tabla aplicamdo rows
            | tech     | uso            |
            | cypress  | e2e, servicios |
            | selenium | varios         |

    Scenario: Ejemplo de Uso de raw
        Then leo la siguiente tabla aplicamdo raw
            | tech     | uso            |
            | cypress  | e2e, servicios |
            | selenium | varios         |

    Scenario: Ejemplo de Uso de rawTable
        Then leo la siguiente tabla aplicamdo rawTable
            | tech     | uso            |
            | cypress  | e2e, servicios |
            | selenium | varios         |

    Scenario: Ejemplo de Uso de RowHashes
        Then leo la siguiente tabla aplicando RowHashes
            | num | mes     |
            | 1   | enero   |
            | 2   | febrero |

    Scenario: Ejemplo de uso de flat
        Then leo la siguienta tabla con raw y aplico flat
            | tech     | uso            |
            | cypress  | e2e, servicios |
            | selenium | varios         |

    Scenario: Ejemplo de uso de flat en 1
        Then leo la siguienta tabla con raw en 1 y aplico flat
            | tech     | uso            |
            | cypress  | e2e, servicios |
            | selenium | varios         |