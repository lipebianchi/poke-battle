//IMPORTANDO OQUE SERÁ UTILIZADO

const readline = require('readline') // readline para a permissão interativa no prompt
const pokeAPI = require('./pokeAPI') // pokeAPI para manipulação de requisições.

// VÁRIAVEIS LOCAIS PARA HERANÇA

const Types = {
    grass: [
            {
                name: "grass",
                weakness: [
                    {
                        slot: 1,
                        type: "Ice",
                        damageTake: 2
                    },
                    {
                        slot: 2,
                        type: "Fire",
                        damageTake: 2
                    },
                    {
                        slot: 3,
                        type: "Poison",
                        damageTake: 2
                    },
                    {
                        slot: 4,
                        type: "Flying",
                        damageTake: 2
                    },
                    {
                        slot: 5,
                        type: "Bug",
                        damageTake: 2
                    }
                ],
                resistances: [
                    {
                        slot: 1,
                        type: "Ground",
                        damageTake: 0.5
                    },
                    {
                        slot: 2,
                        type: "Water",
                        damageTake: 0.5
                    },
                    {
                        slot: 3,
                        type: "Grass",
                        damageTake: 0.5
                    },
                    {
                        slot: 4,
                        type: "Electric",
                        damageTake: 0.5
                    }
                ]
            }
    ],
    fire: [
            {
                name: "fire",
                weakness: [
                    {
                        slot: 1,
                        type: "Water",
                        damageTake: 2
                    },
                    {
                        slot: 2,
                        type: "Rock",
                        damageTake: 2
                    },
                    {
                        slot: 3,
                        type: "Ground",
                        damageTake: 2
                    }
                ],
                resistances: [
                    {
                        slot: 1,
                        type: "Fire",
                        damageTake: 0.5
                    },
                    {
                        slot: 2,
                        type: "Ice",
                        damageTake: 0.5
                    },
                    {
                        slot: 3,
                        type: "Bug",
                        damageTake: 0.5
                    },
                    {
                        slot: 4,
                        type: "Steel",
                        damageTake: 0.5
                    },
                    {
                        slot: 5,
                        type: "Grass",
                        damageTake: 0.5
                    },
                    {
                        slot: 6,
                        type: "Fairy",
                        damageTake: 0.5
                    },
                ]
            }
    ],
    water: [
            {
                name: "water",
                weakness: [
                    {
                        slot: 1,
                        type: "Grass",
                        damageTake: 2
                    },
                    {
                        slot: 2,
                        type: "Electric",
                        damageTake: 2
                    },
                ],
                resistances: [
                    {
                        slot: 1,
                        type: "Water",
                        damageTake: 0.5
                    },
                    {
                        slot: 2,
                        type: "Steel",
                        damageTake: 0.5
                    },
                    {
                        slot: 3,
                        type: "Fire",
                        damageTake: 0.5
                    },
                    {
                        slot: 4,
                        type: "Ice",
                        damageTake: 0.5
                    },
                ]
            }
    ],
    electric: [
            {
                name: "electric",
                weakness: [
                    {
                        slot: 1,
                        type: "Ground",
                        damageTake: 2
                    },
                ],
                resistances: [
                    {
                        slot: 1,
                        type: "Electric",
                        damageTake: 0.5
                    },
                    {
                        slot: 2,
                        type: "Flying",
                        damageTake: 0.5
                    },
                    {
                        slot: 3,
                        type: "Steel",
                        damageTake: 0.5
                    },
                ]
            }
    ],
    normal: [
            {
                name: "normal",
                weakness: [
                    {
                        slot: 1,
                        type: "Fighting",
                        damageTake: 2
                    },
                ],
                resistances: null
            }
    ],
    fighting: [
            {
                name: "fighting",
                weakness: [
                    {
                        slot: 1,
                        type: "Flying",
                        damageTake: 2
                    },
                    {
                        slot: 2,
                        type: "Psychic",
                        damageTake: 2
                    },
                    {
                        slot: 3,
                        type: "Fairy",
                        damageTake: 2
                    },
                ],
                resistances: [
                    {
                        slot: 1,
                        type: "Rock",
                        damageTake: 0.5
                    },
                    {
                        slot: 2,
                        type: "Bug",
                        damageTake: 0.5
                    },
                    {
                        slot: 3,
                        type: "Dark",
                        damageTake: 0.5
                    },
                ]
            }
    ],
    flying: [
            {
                name: "flying",
                weakness: [
                    {
                        slot: 1,
                        type: "Rock",
                        damageTake: 2
                    },
                    {
                        slot: 2,
                        type: "Electric",
                        damageTake: 2
                    },
                    {
                        slot: 3,
                        type: "Ice",
                        damageTake: 2
                    },
                ],
                resistances: [
                    {
                        slot: 1,
                        type: "Fighting",
                        damageTake: 0.5
                    },
                    {
                        slot: 1,
                        type: "Bug",
                        damageTake: 0.5
                    },
                    {
                        slot: 1,
                        type: "Fighting",
                        damageTake: 0.5
                    }
                ]
            }
    ],
    poison: [
            {
                name: "poison",
                weakness: [
                    {
                        slot: 1,
                        type: "Ground",
                        damageTake: 2
                    },
                    {
                        slot: 2,
                        type: "Psychic",
                        damageTake: 2
                    },
                ],
                resistances: [
                    {
                        slot: 1,
                        type: "Fighting",
                        damageTake: 0.5
                    },
                    {
                        slot: 2,
                        type: "Poison",
                        damageTake: 0.5
                    },
                    {
                        slot: 3,
                        type: "Bug",
                        damageTake: 0.5
                    },
                    {
                        slot: 4,
                        type: "Grass",
                        damageTake: 0.5
                    },
                    {
                        slot: 5,
                        type: "Fairy",
                        damageTake: 0.5
                    },
                ]
            }
    ],
    ground: [
            {
                name: "ground",
                weakness: [
                    {
                        slot: 1,
                        type: "Water",
                        damageTake: 2
                    },
                    {
                        slot: 2,
                        type: "Grass",
                        damageTake: 2
                    },
                    {
                        slot: 3,
                        type: "Ice",
                        damageTake: 2
                    },
                ],
                resistances: [
                    {
                        slot: 1,
                        type: "Poison",
                        damageTake: 0.5
                    },
                    {
                        slot: 2,
                        type: "Rock",
                        damageTake: 0.5
                    },
                    {
                        slot: 3,
                        type: "Electric",
                        damageTake: 0
                    }
                ]
            }
    ],
    psychic: [
            {
                name: "psychic",
                weakness: [
                    {
                        slot: 1,
                        type: "Bug",
                        damageTake: 2
                    },
                    {
                        slot: 2,
                        type: "Ghost",
                        damageTake: 2
                    },
                    {
                        slot: 3,
                        type: "Dark",
                        damageTake: 2
                    },
                ],
                resistances: [
                    {
                        slot: 1,
                        type: "Fighting",
                        damageTake: 0.5
                    },
                    {
                        slot: 2,
                        type: "Psychic",
                        damageTake: 0.5
                    },
                ]
            }
    ],
    rock: [
            {
                name: "rock",
                weakness: [
                    {
                        slot: 1,
                        type: "Fighting",
                        damageTake: 2
                    },
                    {
                        slot: 2,
                        type: "Ground",
                        damageTake: 2
                    },
                    {
                        slot: 3,
                        type: "Water",
                        damageTake: 2
                    },
                    {
                        slot: 4,
                        type: "Grass",
                        damageTake: 2
                    },
                ],
                resistances: [
                    {
                        slot: 1,
                        type: "Normal",
                        damageTake: 0.5
                    },
                    {
                        slot: 2,
                        type: "Flying",
                        damageTake: 0.5
                    },
                    {
                        slot: 3,
                        type: "Poison",
                        damageTake: 0.5
                    },
                    {
                        slot: 4,
                        type: "Fire",
                        damageTake: 0.5
                    },
                ]
            }
    ],
    ice: [
            {
                name: "ice",
                weakness: [
                    {
                        slot: 1,
                        type: "Fighting",
                        damageTake: 2
                    },
                    {
                        slot: 2,
                        type: "Rock",
                        damageTake: 2
                    },
                    {
                        slot: 3,
                        type: "Fire",
                        damageTake: 2
                    },
                    {
                        slot: 4,
                        type: "Steel",
                        damageTake: 2
                    },
                ],
                resistances: [
                    {
                        slot: 1,
                        type: "Ice",
                        damageTake: 0.5
                    },
                ]
            }
    ],
    bug: [
            {
                name: "bug",
                weakness: [
                    {
                        slot: 1,
                        type: "Flying",
                        damageTake: 2
                    },
                    {
                        slot: 2,
                        type: "Rock",
                        damageTake: 2
                    },
                    {
                        slot: 3,
                        type: "Fire",
                        damageTake: 2
                    },
                ],
                resistances: [
                    {
                        slot: 1,
                        type: "Fighting",
                        damageTake: 0.5
                    },
                    {
                        slot: 2,
                        type: "Ground",
                        damageTake: 0.5
                    },
                    {
                        slot: 3,
                        type: "Grass",
                        damageTake: 0.5
                    },
                ]
            }
    ],
    dragon: [
            {
                name: "dragon",
                weakness: [
                    {
                        slot: 1,
                        type: "Ice",
                        damageTake: 2
                    },
                    {
                        slot: 2,
                        type: "Dragon",
                        damageTake: 2
                    },
                    {
                        slot: 3,
                        type: "Fairy",
                        damageTake: 2
                    },
                ],
                resistances: [
                    {
                        slot: 1,
                        type: "Fire",
                        damageTake: 0.5
                    },
                    {
                        slot: 2,
                        type: "Water",
                        damageTake: 0.5
                    },
                    {
                        slot: 3,
                        type: "Grass",
                        damageTake: 0.5
                    },
                    {
                        slot: 4,
                        type: "Electric",
                        damageTake: 0.5
                    },
                ]
            }
    ],
    ghost: [
            {
                name: "ghost",
                weakness: [
                    {
                        slot: 1,
                        type: "Ghost",
                        damageTake: 2
                    },
                ],
                resistances: [
                    {
                        slot: 1,
                        type: "Poison",
                        damageTake: 0.5
                    },
                    {
                        slot: 2,
                        type: "Bug",
                        damageTake: 0.5
                    },
                ]
            }
    ],
    dark: [
            {
                name: "dark",
                weakness: [
                    {
                        slot: 1,
                        type: "Fighting",
                        damageTake: 2
                    },
                    {
                        slot: 2,
                        type: "Bug",
                        damageTake: 2
                    },
                ],
                resistances: [
                    {
                        slot: 1,
                        type: "Ghost",
                        damageTake: 0.5
                    },
                    {
                        slot: 1,
                        type: "Dark",
                        damageTake: 0.5
                    },
                ]
            }
    ],
    steel: [
            {
                name: "steel",
                weakness: [
                    {
                        slot: 1,
                        type: "Fighting",
                        damageTake: 2
                    },
                    {
                        slot: 1,
                        type: "Ground",
                        damageTake: 2
                    },
                    {
                        slot: 1,
                        type: "Fire",
                        damageTake: 2
                    },
                ],
                resistances: [
                    {
                        slot: 1,
                        type: "Normal",
                        damageTake: 0.5
                    },
                    {
                        slot: 2,
                        type: "Flying",
                        damageTake: 0.5
                    },
                    {
                        slot: 3,
                        type: "Rock",
                        damageTake: 0.5
                    },
                    {
                        slot: 4,
                        type: "Bug",
                        damageTake: 0.5
                    },
                    {
                        slot: 5,
                        type: "Steel",
                        damageTake: 0.5
                    },
                    {
                        slot: 6,
                        type: "Grass",
                        damageTake: 0.5
                    },
                    {
                        slot: 7,
                        type: "Psychic",
                        damageTake: 0.5
                    },
                    {
                        slot: 8,
                        type: "Ice",
                        damageTake: 0.5
                    },
                    {
                        slot: 9,
                        type: "Dragon",
                        damageTake: 0.5
                    },
                    {
                        slot: 10,
                        type: "Fairy",
                        damageTake: 0.5
                    },
                ]
            }
    ],
    fairy: [
            {
                name: "fairy",
                weakness: [
                    {
                        slot: 1,
                        type: "Poison",
                        damageTake: 2
                    },
                    {
                        slot: 2,
                        type: "Steel",
                        damageTake: 2
                    },
                ],
                resistances: [
                    {
                        slot: 1,
                        type: "Fighting",
                        damageTake: 0.5
                    },
                    {
                        slot: 2,
                        type: "Bug",
                        damageTake: 0.5
                    },
                    {
                        slot: 3,
                        type: "Dark",
                        damageTake: 0.5
                    },
                ]
            }
    ]
}

const Natures = [
    {
        name: "Adamant",
        attributes: {
            attack: 0.1,
            spAttack: -0.1
        }
    },
    {
        name: "Bashful",
        attributes: {
            spAttack: 0
        }
    },
    {
        name: "Bold",
        attributes: {
            defense: 0.1,
            attack: -0.1
        }
    },
    {
        name: "Brave",
        attributes: {
            attack: 0.1,
            speed: -0.1
        }
    },
    {
        name: "Calm",
        attributes: {
            spDefense: 0.1,
            attack: -0.1
        }
    },
    {
        name: "Careful",
        attributes: {
            spDefense: 0.1,
            spAttack: -0.1
        }
    },
    {
        name: "Docile",
        attributes: {
            defense: 0
        }
    },
    {
        name: "Gentle",
        attributes: {
            spDefense: 0.1,
            defense: -0.1
        }
    },
    {
        name: "Hardy",
        attributes: {
            attack: 0
        }
    },
    {
        name: "Hasty",
        attributes: {
            speed: 0.1,
            attack: -0.1
        }
    },
    {
        name: "Impish",
        attributes: {
            defense: 0.1,
            spAttack: -0.1
        }
    },
    {
        name: "Jolly",
        attributes: {
            speed: 0.1,
            spAttack: -0.1
        }
    },
    {
        name: "Lax",
        attributes: {
            defense: 0.1,
            spDefense: -0.1
        }
    },
    {
        name: "Lonely",
        attributes: {
            attack: 0.1,
            defense: -0.1
        }
    },
    {
        name: "Mild",
        attributes: {
            spAttack: 0.1,
            defense: -0.1
        }
    },
    {
        name: "Modest",
        attributes: {
            spAttack: 0.1,
            attack: -0.1
        }
    },
    {
        name: "Naive",
        attributes: {
            speed: 0.1,
            spDefense: -0.1
        }
    },
    {
        name: "Naughty",
        attributes: {
            attack: 0.1,
            spDefense: -0.1
        }
    },
    {
        name: "Quiet",
        attributes: {
            spAttack: 0.1,
            speed: -0.1
        }
    },
    {
        name: "Quirky",
        attributes: {
            speed: 0
        }
    },
    {
        name: "Rash",
        attributes: {
            spAttack: 0.1,
            spDefense: -0.1
        }
    },
    {
        name: "Relaxed",
        attributes: {
            defense: 0.1,
            speed: -0.1
        }
    },
    {
        name: "Sassy",
        attributes: {
            spDefense: 0.1,
            speed: -0.1
        }
    },
    {
        name: "Serious",
        attributes: {
            spDefense: 0
        }
    },
    {
        name: "Timid",
        attributes: {
            speed: 0.1,
            attack: -0.1
        }
    }
]

const Moves = {
    normal: [
        { 
            name: "Tackle",
            category: "Physical", 
            power: 40, 
            accuracy: 100, 
            type: "Normal", 
            description: "A physical attack in which the user tackles the target." 
        },
        { 
            name: "Quick Attack", 
            category: "Physical", 
            power: 40, accuracy: 100, 
            type: "Normal", 
            description: "An attack that strikes first." 
        },
        { 
            name: "Hyper Beam", 
            category: "Special", 
            power: 150, 
            accuracy: 90, 
            type: "Normal", 
            description: "The target is attacked with a powerful beam." 
        },
        { 
            name: "Body Slam", 
            category: "Physical", 
            power: 85, 
            accuracy: 100, 
            type: "Normal", 
            description: "The user slams into the target with its whole body." 
        },
        { 
            name: "Sing", 
            category: "Status", 
            power: 0, 
            accuracy: 55, 
            type: "Normal", 
            description: "A soothing song that puts the target to sleep." 
        },
        { 
            name: "Double-Edge", 
            category: "Physical", 
            power: 120, 
            accuracy: 100, 
            type: "Normal", 
            description: "A reckless move that also damages the user." 
        }
    ],
    fire: [
        { 
            name: "Flamethrower", 
            category: "Special", 
            power: 90, 
            accuracy: 100, 
            type: "Fire", 
            description: "The target is scorched with an intense flame." 
        },
        { 
            name: "Ember", 
            category: "Special", 
            power: 40, 
            accuracy: 100, 
            type: "Fire", 
            description: "The user attacks with small flames." 
        },
        { 
            name: "Fire Spin", 
            category: "Special", 
            power: 35, 
            accuracy: 85, 
            type: "Fire", 
            description: "The target is trapped in a swirling vortex of fire." 

        },
        { 
            name: "Flare Blitz", 
            category: "Physical", 
            power: 120, 
            accuracy: 100, 
            type: "Fire", 
            description: "The user cloaks itself in fire and charges at the target." 

        },
        { 
            name: "Heat Wave", 
            category: "Special", 
            power: 95, 
            accuracy: 90, 
            type: "Fire", 
            description: "The user unleashes a hot wave that damages all nearby Pokémon." 

        },
        { 
            name: "Lava Plume", 
            category: "Special", 
            power: 80, 
            accuracy: 100, 
            type: "Fire", 
            description: "The user releases a shower of hot lava." 
        }
    ],
    water: [
        { 
            name: "Water Gun", 
            category: "Special", 
            power: 40, 
            accuracy: 100, 
            type: "Water", 
            description: "The target is blasted with a forceful water gun." 
        },
        { 
            name: "Surf", 
            category: "Special", 
            power: 90, 
            accuracy: 100, 
            type: "Water", 
            description: "The user attacks by swamping the target with a giant wave." 
        },
        { 
            name: "Hydro Pump", 
            category: "Special", 
            power: 110, 
            accuracy: 80, 
            type: "Water", 
            description: "The target is blasted by a huge volume of water." 
        },
        { 
            name: "Aqua Jet", 
            category: "Physical", 
            power: 40, 
            accuracy: 100, 
            type: "Water", 
            description: "The user strikes first with a quick attack of water." 
        },
        { 
            name: "Bubble Beam", 
            category: "Special", 
            power: 65, 
            accuracy: 100, 
            type: "Water", 
            description: "The user attacks with a barrage of bubbles." 
        },
        { 
            name: "Rain Dance", 
            category: "Status", 
            power: 0, 
            accuracy: 0, 
            type: "Water", 
            description: "The user summons a rainstorm that lasts for five turns." 
        }
    ],
    grass: [
        { 
            name: "Absorb", 
            category: "Special", 
            power: 20, 
            accuracy: 100, 
            type: "Grass", 
            description: "A nutrient-draining attack. The user's HP is restored by half the damage taken by the target." 
        },
        { 
            name: "Vine Whip", 
            category: "Physical", 
            power: 45, 
            accuracy: 100, 
            type: "Grass", 
            description: "The target is struck by slender, whip-like vines." 
        },
        { 
            name: "Razor Leaf", 
            category: "Special", 
            power: 55, 
            accuracy: 95, 
            type: "Grass", 
            description: "Sharp-edged leaves are launched at the target." 
        },
        { 
            name: "Solar Beam", 
            category: "Special", 
            power: 120, 
            accuracy: 100, 
            type: "Grass", 
            description: "A two-turn attack that absorbs sunlight." 
        },
        { 
            name: "Leech Seed", 
            category: "Status", 
            power: 0, 
            accuracy: 90, 
            type: "Grass", 
            description: "The user plants a seed on the target that saps HP." 
        },
        { 
            name: "Petal Dance", 
            category: "Special", 
            power: 120, 
            accuracy: 100, 
            type: "Grass", 
            description: "The user attacks the target for two to three turns." 
        }
    ],
    electric: [
        { 
            name: "Thunderbolt", 
            category: "Special", 
            power: 90, 
            accuracy: 100, 
            type: "Electric", 
            description: "A strong electric attack that may cause paralysis." 
        },
        { 
            name: "Thunder Wave", 
            category: "Status", 
            power: 0, 
            accuracy: 90, 
            type: "Electric", 
            description: "A wave of electricity that paralyzes the target." 
        },
        { 
            name: "Volt Tackle", 
            category: "Physical", 
            power: 120, 
            accuracy: 100, 
            type: "Electric", 
            description: "A reckless move that also damages the user." 
        },
        { 
            name: "Electro Ball", 
            category: "Special", 
            power: 60, 
            accuracy: 100, 
            type: "Electric", 
            description: "The faster the user is than the target, the greater the power." 
        },
        { 
            name: "Spark", 
            category: "Physical", 
            power: 65, 
            accuracy: 100, 
            type: "Electric", 
            description: "The user attacks with electricity and may cause paralysis." 
        },
        { 
            name: "Thunder", 
            category: "Special", 
            power: 110, 
            accuracy: 70, 
            type: "Electric", 
            description: "A powerful electric attack that may cause paralysis." 
        }
    ],
    poison: [
        { 
            name: "Poison Sting", 
            category: "Physical", 
            power: 15, 
            accuracy: 100, 
            type: "Poison", 
            description: "The target is stabbed with a poisonous stinger." },
        { 
            name: "Sludge Bomb", 
            category: "Special", 
            power: 90, 
            accuracy: 100, 
            type: "Poison", 
            description: "The target is bombarded with a sludge bomb." 
        },
        { 
            name: "Toxic", 
            category: "Status", 
            power: 0, 
            accuracy: 90, 
            type: "Poison", 
            description: "A move that badly poisons the target." 
        },
        { 
            name: "Acid", 
            category: "Special", 
            power: 40, 
            accuracy: 100, 
            type: "Poison", 
            description: "The user attacks the target with a spray of acidic liquid." 
        },
        { 
            name: "Gunk Shot", 
            category: "Physical", 
            power: 120, 
            accuracy: 80, 
            type: "Poison", 
            description: "The user attacks the target with a torrent of filthy garbage." 
        },
        { 
            name: "Venoshock", 
            category: "Special", 
            power: 65, 
            accuracy: 100, 
            type: "Poison", 
            description: "The power of this move is doubled if the target is poisoned." 
        }
    ],
    flying: [
        { 
            name: "Gust", 
            category: "Special", 
            power: 40, 
            accuracy: 100, 
            type: "Flying", 
            description: "A gust of wind is launched at the target." 
        },
        { 
            name: "Wing Attack", 
            category: "Physical", 
            power: 60, 
            accuracy: 100, 
            type: "Flying", 
            description: "The user attacks with its wings." 
        },
        { 
            name: "Air Slash", 
            category: "Special", 
            power: 75, 
            accuracy: 95, 
            type: "Flying", 
            description: "The user attacks with a blade of air that may cause flinching." 
        },
        { 
            name: "Hurricane", 
            category: "Special", 
            power: 110, 
            accuracy: 70, 
            type: "Flying", 
            description: "The user unleashes a vicious hurricane." 
        },
        { 
            name: "Brave Bird", 
            category: "Physical", 
            power: 120, 
            accuracy: 100, 
            type: "Flying", 
            description: "A reckless move that also damages the user." 
        },
        { 
            name: "Defog", 
            category: "Status", 
            power: 0, 
            accuracy: 0, 
            type: "Flying", 
            description: "The user removes hazards from the field." 
        }
    ],
    psychic: [
        { 
            name: "Confusion", 
            category: "Special", 
            power: 50, 
            accuracy: 100, 
            type: "Psychic", 
            description: "The target is hit with a peculiar telekinetic wave." 

        },
        { 
            name: "Psybeam", 
            category: "Special", 
            power: 65, 
            accuracy: 100, 
            type: "Psychic", 
            description: "A beam of psychic energy is shot at the target." 

        },
        { 
            name: "Psychic", 
            category: "Special", 
            power: 90, 
            accuracy: 100, 
            type: "Psychic", 
            description: "The target is hit with a strong psychic attack." 

        },
        { 
            name: "Psycho Cut", 
            category: "Physical", 
            power: 70, 
            accuracy: 100, 
            type: "Psychic", 
            description: "The user attacks with a sharp psychic blade." 

        },
        { 
            name: "Future Sight", 
            category: "Special", 
            power: 120, 
            accuracy: 100, 
            type: "Psychic", 
            description: "The user prepares an attack that strikes in two turns." 

        },
        { 
            name: "Calm Mind", 
            category: "Status", 
            power: 0, 
            accuracy: 0, 
            type: "Psychic", 
            description: "The user focuses its mind to boost its Special Attack and Special Defense." 

        }
    ],
    bug: [
        { 
            name: "Tackle", 
            category: "Physical", 
            power: 40, 
            accuracy: 100, 
            type: "Bug", 
            description: "A physical attack in which the user tackles the target." 
        },
        { 
            name: "Bug Bite", 
            category: "Physical", 
            power: 60, 
            accuracy: 100, 
            type: "Bug", 
            description: "The user bites the target with sharp fangs." 
        },
        { 
            name: "X-Scissor", 
            category: "Physical", 
            power: 80, 
            accuracy: 100, 
            type: "Bug", 
            description: "The user slashes the target with a sharp scissor-like appendage." 
        },
        { 
            name: "Signal Beam", 
            category: "Special", 
            power: 75, 
            accuracy: 100, 
            type: "Bug", 
            description: "A glittering, colorful beam is shot at the target." 
        },
        { 
            name: "U-turn", 
            category: "Physical", 
            power: 70, 
            accuracy: 100, 
            type: "Bug", 
            description: "The user attacks and immediately switches out." 
        },
        { 
            name: "Leech Life", 
            category: "Physical", 
            power: 80, 
            accuracy: 100, 
            type: "Bug", 
            description: "The user attacks and recovers half the HP it dealt." 
        }
    ],
    rock: [
        { 
            name: "Rock Throw", 
            category: "Physical", 
            power: 50, 
            accuracy: 90, 
            type: "Rock", 
            description: "The user throws a rock at the target." 
        },
        { 
            name: "Rock Slide", 
            category: "Physical", 
            power: 75, 
            accuracy: 90, 
            type: "Rock", 
            description: "Large boulders are hurled at the target." 
        },
        { 
            name: "Stone Edge", 
            category: "Physical", 
            power: 100, 
            accuracy: 80, 
            type: "Rock", 
            description: "The user attacks with sharp stones." 
        },
        { 
            name: "Ancient Power", 
            category: "Special", 
            power: 60, 
            accuracy: 100, 
            type: "Rock", 
            description: "The user attacks with ancient power." 
        },
        { 
            name: "Head Smash", 
            category: "Physical", 
            power: 150, 
            accuracy: 80, 
            type: "Rock", 
            description: "A reckless move that also damages the user." 
        },
        { 
            name: "Stealth Rock", 
            category: "Status", 
            power: 0, 
            accuracy: 0, 
            type: "Rock", 
            description: "The user sets up sharp rocks that damage incoming Pokémon." 
        }
    ],
    ground: [
        { 
            name: "Mud-Slap", 
            category: "Special", 
            power: 20, 
            accuracy: 100, 
            type: "Ground", 
            description: "The user hurls mud at the target." 
        },
        { 
            name: "Earthquake", 
            category: "Physical", 
            power: 100, 
            accuracy: 100, 
            type: "Ground", 
            description: "The user strikes the ground with power." 
        },
        { 
            name: "Dig", 
            category: "Physical", 
            power: 80, 
            accuracy: 100, 
            type: "Ground", 
            description: "The user burrows into the ground and strikes on the second turn." 
        },
        { 
            name: "Sand Tomb", 
            category: "Physical", 
            power: 35, 
            accuracy: 85, 
            type: "Ground", 
            description: "The target is trapped in a sandstorm." 
        },
        { 
            name: "Fissure", 
            category: "Physical", 
            power: 0, 
            accuracy: 30, 
            type: "Ground", 
            description: "A one-hit KO move that opens a fissure in the ground." 
        },
        { 
            name: "Bulldoze", 
            category: "Physical", 
            power: 60, 
            accuracy: 100, 
            type: "Ground", 
            description: "The user stomps down on the ground." 
        }
    ],
    ice: [
        { 
            name: "Powder Snow", 
            category: "Special", 
            power: 40, 
            accuracy: 100, 
            type: "Ice", 
            description: "The user attacks with a flurry of snow." 
        },
        { 
            name: "Ice Beam", 
            category: "Special", 
            power: 90, 
            accuracy: 100, 
            type: "Ice", 
            description: "A strong blast of ice is shot at the target." 
        },
        { 
            name: "Blizzard", 
            category: "Special", 
            power: 110, 
            accuracy: 70, 
            type: "Ice", 
            description: "The user unleashes a snowstorm." 
        },
        { 
            name: "Ice Shard", 
            category: "Physical", 
            power: 40, 
            accuracy: 100, 
            type: "Ice", 
            description: "A frigid shard of ice is launched at the target." 
        },
        { 
            name: "Hail", 
            category: "Status", 
            power: 0, 
            accuracy: 0, 
            type: "Ice", 
            description: "A hailstorm rages for five turns." 
        },
        { 
            name: "Frost Breath", 
            category: "Special", 
            power: 60, 
            accuracy: 100, 
            type: "Ice", 
            description: "The user attacks with a breath of cold air, always landing a critical hit." 
        }
    ],
    fighting: [
        { 
            name: "Low Kick", 
            category: "Physical", 
            power: 50, 
            accuracy: 100, 
            type: "Fighting", 
            description: "The heavier the target, the greater the power." 
        },
        { 
            name: "Karate Chop", 
            category: "Physical", 
            power: 50, 
            accuracy: 100, 
            type: "Fighting", 
            description: "A sharp chop is delivered." 
        },
        { 
            name: "Brick Break", 
            category: "Physical", 
            power: 75, 
            accuracy: 100, 
            type: "Fighting", 
            description: "The user attacks with a swift kick." 
        },
        { 
            name: "Close Combat", 
            category: "Physical", 
            power: 120, 
            accuracy: 100, 
            type: "Fighting", 
            description: "The user attacks in close quarters." 
        },
        { 
            name: "Focus Punch", 
            category: "Physical", 
            power: 150, 
            accuracy: 100, 
            type: "Fighting", 
            description: "The user charges up power and strikes." 
        },
        { 
            name: "Bulk Up", 
            category: "Status", 
            power: 0, 
            accuracy: 0, 
            type: "Fighting", 
            description: "The user boosts its Attack and Defense." 
        }
    ],
    ghost: [
        { 
            name: "Lick", 
            category: "Physical", 
            power: 30, 
            accuracy: 100, 
            type: "Ghost", 
            description: "The user licks the target, which may cause paralysis." 
        },
        { 
            name: "Night Shade", 
            category: "Special", 
            power: 0, 
            accuracy: 100, 
            type: "Ghost", 
            description: "The user attacks with a shadowy attack that does damage equal to its level." 
        },
        { 
            name: "Shadow Ball", 
            category: "Special", 
            power: 80, 
            accuracy: 100, 
            type: "Ghost", 
            description: "A black blob is launched at the target." 
        },
        { 
            name: "Hex", 
            category: "Special", 
            power: 65, 
            accuracy: 100, 
            type: "Ghost", 
            description: "The user attacks the target if it is affected by a status condition." 
        },
        { 
            name: "Curse", 
            category: "Status", 
            power: 0, 
            accuracy: 0, 
            type: "Ghost", 
            description: "The user sacrifices half of its HP to put a curse on the target." 
        },
        { 
            name: "Phantom Force", 
            category: "Physical", 
            power: 90, 
            accuracy: 100, 
            type: "Ghost", 
            description: "The user disappears and strikes on the second turn." 
        }
    ],
    dragon: [
        { 
            name: "Dragon Breath", 
            category: "Special", 
            power: 60, 
            accuracy: 100, 
            type: "Dragon", 
            description: "The user attacks with a powerful breath of energy." 
        },
        { 
            name: "Dragon Rage", 
            category: "Special", 
            power: 0, 
            accuracy: 100, 
            type: "Dragon", 
            description: "The user attacks with a fixed damage of 40." 
        },
        { 
            name: "Outrage", 
            category: "Physical", 
            power: 120, 
            accuracy: 100, 
            type: "Dragon", 
            description: "The user rampages for two to three turns." 
        },
        { 
            name: "Draco Meteor", 
            category: "Special", 
            power: 130, 
            accuracy: 90, 
            type: "Dragon", 
            description: "The user attacks with a meteor of dragon energy." 
        },
        { 
            name: "Dragon Claw", 
            category: "Physical", 
            power: 80, 
            accuracy: 100, 
            type: "Dragon", 
            description: "The user slashes the target with sharp claws." 
        },
        { 
            name: "Breakneck Blitz", 
            category: "Z-Move", 
            power: 0, 
            accuracy: 0, 
            type: "Dragon", 
            description: "A Z-Move that boosts power and strikes the target." 
        }
    ],
    dark: [
        { 
            name: "Bite", 
            category: "Physical", 
            power: 60, 
            accuracy: 100, 
            type: "Dark", 
            description: "The user bites the target." 
        },
        { 
            name: "Feint Attack", 
            category: "Physical", 
            power: 60, 
            accuracy: 100, 
            type: "Dark", 
            description: "The user attacks without fail." 
        },
        { 
            name: "Foul Play", 
            category: "Physical", 
            power: 95, 
            accuracy: 100, 
            type: "Dark", 
            description: "The user attacks using the target's Attack stat." 
        },
        { 
            name: "Dark Pulse", 
            category: "Special", 
            power: 80, 
            accuracy: 100, 
            type: "Dark", 
            description: "The user unleashes a sinister wave." 
        },
        { 
            name: "Crunch", 
            category: "Physical", 
            power: 80, 
            accuracy: 100, 
            type: "Dark", 
            description: "The user attacks the target with sharp fangs." 
        },
        { 
            name: "Nasty Plot", 
            category: "Status", 
            power: 0, 
            accuracy: 0, 
            type: "Dark", 
            description: "The user sharply boosts its Special Attack." 
        }
    ],
    steel: [
        { 
            name: "Metal Claw", 
            category: "Physical", 
            power: 50, 
            accuracy: 95, 
            type: "Steel", 
            description: "The user attacks with metal claws." 
        },
        { 
            name: "Iron Tail", 
            category: "Physical", 
            power: 100, 
            accuracy: 75, 
            type: "Steel", 
            description: "The user slams the target with its iron tail." 
        },
        { 
            name: "Steel Wing", 
            category: "Physical", 
            power: 70, 
            accuracy: 90, 
            type: "Steel", 
            description: "The user attacks with its wings made of steel." 
        },
        { 
            name: "Flash Cannon", 
            category: "Special", 
            power: 80, 
            accuracy: 100, 
            type: "Steel", 
            description: "The user attacks with a beam of steel." 
        },
        { 
            name: "Gyro Ball", 
            category: "Physical", 
            power: 0, 
            accuracy: 100, 
            type: "Steel", 
            description: "The slower the user is, the greater the power." 
        },
        { 
            name: "Metal Sound", 
            category: "Status", 
            power: 0, 
            accuracy: 85, 
            type: "Steel", 
            description: "The user emits a horrible sound that lowers the target's Special Defense." 
        }
    ],
    fairy: [
        { 
            name: "Fairy Wind", 
            category: "Special", 
            power: 40, 
            accuracy: 100, 
            type: "Fairy", 
            description: "The user attacks with a gentle breeze." 
        },
        { 
            name: "Moonblast", 
            category: "Special", 
            power: 95, 
            accuracy: 100, 
            type: "Fairy", 
            description: "The user attacks with a powerful blast of light." 
        },
        { 
            name: "Dazzling Gleam", 
            category: "Special", 
            power: 80, 
            accuracy: 100, 
            type: "Fairy", 
            description: "The user attacks with a brilliant flash of light." 
        },
        { 
            name: "Play Rough", 
            category: "Physical", 
            power: 90, 
            accuracy: 90, 
            type: "Fairy", 
            description: "The user attacks with a playful strike." 
        },
        { 
            name: "Fairy Lock", 
            category: "Status", 
            power: 0, 
            accuracy: 0, 
            type: "Fairy", 
            description: "Prevents Pokémon from escaping." 
        },
        { 
            name: "Draining Kiss", 
            category: "Special", 
            power: 50, 
            accuracy: 100, 
            type: "Fairy", 
            description: "The user kisses the target and restores HP." 
        }
    ]
}

// FIM DAS VARIÁVEIS LOCAIS

// classe Pokemon

class Pokemon {
    static pokemonStats = {}

    constructor(name, types, level){
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        if(!Pokemon.pokemonStats[name]){
            throw new Error(`Não foram encontrados status base para o pokemon ${name}`)
        }
        this.name = name
        this.types = types
        this.level = level
        this.weakness = []
        this.resistances = []
        this.moves = []
        this.nature = this.getNatureRandomizer()
        this.IVs = {
            hp: this.getIVsRandomizer(),
            attack: this.getIVsRandomizer(),
            defense: this.getIVsRandomizer(),
            spAttack: this.getIVsRandomizer(),
            spDefense: this.getIVsRandomizer(),
            speed: this.getIVsRandomizer()
        }
        this.stats = Pokemon.pokemonStats[name]

        this.searchTypesAttributes()
        this.RemoveResistanceAndWeaknessSimular()
        this.getNatureRandomizer()
        this.getPokemonMoves()
        this.getIVsRandomizer()
        this.calculateStatus()
    }

    searchTypesAttributes (){
        this.types.map((type) => {
            this.weakness.push(Types[type].map((objeto) => objeto.weakness.map((weakness) => weakness.type)))
            this.resistances.push(Types[type].map((objeto) => objeto.resistances.map((resistances) => resistances.type)))
        })
        this.weakness = this.weakness.flat().flat()
        this.resistances = this.resistances.flat().flat()
    }

    RemoveResistanceAndWeaknessSimular() {
       let newWeakness = []
       let newResistances = []

       for(const weakness of this.weakness){
            if(!this.resistances.includes(weakness)){
                newWeakness.push(weakness)
            }
       }

       for(const resistance of this.resistances){
            if(!this.weakness.includes(resistance)){
            newResistances.push(resistance)
        }
       }
       newWeakness = new Set(newWeakness)
       newResistances = new Set(newResistances)
       this.weakness = newWeakness
       this.resistances = newResistances
    }

    getNatureRandomizer(){
        const randomIndex = Math.floor(Math.random() * Natures.length)
        return Natures[randomIndex]
    }

    getPokemonMoves(){
        if(this.types.length == 2){
            for(let i = 0; i < 2; i++){
                this.types.forEach(type => {
                    let randomIndex = Math.floor(Math.random() * Moves[type].length)
                    let move = Moves[type][randomIndex]
                    let moveName = move.name
                    if(this.moves.map((move) => move.name).includes(moveName)){
                        while(this.moves.includes(move)){
                            randomIndex = Math.floor(Math.random() * Moves[type].length)
                            move = Moves[type][randomIndex]
                        }
                        this.moves.push(move)
                    }else {
                        this.moves.push(move)
                    }
                });
            }
        }else {
            for(let i = 0; i < 4; i++){
                this.types.forEach(type => {
                    let randomIndex = Math.floor(Math.random() * Moves[type].length)
                    let move = Moves[type][randomIndex]
                    let moveName = move.name
                    if(this.moves.map((move) => move.name).includes(moveName)){
                        while(this.moves.includes(move)){
                            randomIndex = Math.floor(Math.random() * Moves[type].length)
                            move = Moves[type][randomIndex]
                        }
                        this.moves.push(move)
                    }else {
                        this.moves.push(move)
                    }
                });
            }
            this.moves.flat()
        }
    }

    getIVsRandomizer(){
        const randomNumber = Math.floor(Math.random() * 32)
        return randomNumber
    }

    static async initializeStats() {
        const pokemons = await pokeAPI.getPokemonsStats(0,649)
        pokemons.forEach(pokemon => {
            Pokemon.pokemonStats[pokemon.name] = {
                [pokemon.stats[0].stat.name]: pokemon.stats[0].base_stat,
                [pokemon.stats[1].stat.name]: pokemon.stats[1].base_stat,
                [pokemon.stats[2].stat.name]: pokemon.stats[2].base_stat,
                [pokemon.stats[3].stat.name]: pokemon.stats[3].base_stat,
                [pokemon.stats[4].stat.name]: pokemon.stats[4].base_stat,
                [pokemon.stats[5].stat.name]: pokemon.stats[5].base_stat,
            }
        });
    }
    
    calculateStatus() {
        this.stats.hp = ((this.IVs.hp + 2 * this.stats.hp) * this.level/100) + 10 + this.level
        if(this.nature.attributes.attack){
            this.stats.attack = ((this.IVs.attack + 2 * this.stats.attack + 5) * this.level/100) + ((this.IVs.attack + 2 * this.stats.attack + 5) * this.level/100) * this.nature.attributes.attack
        }else {
            this.stats.attack = ((this.IVs.attack + 2 * this.stats.attack + 5) * this.level/100)
        }
        if(this.nature.attributes.defense){
            this.stats.defense = ((this.IVs.defense + 2 * this.stats.defense + 5) * this.level/100) + ((this.IVs.defense + 2 * this.stats.defense + 5) * this.level/100) * this.nature.attributes.defense
        } else {
            this.stats.defense = ((this.IVs.defense + 2 * this.stats.defense + 5) * this.level/100)
        }
        if(this.nature.attributes.spAttack){
            this.stats["special-attack"] = ((this.IVs.spAttack + 2 * this.stats["special-attack"] + 5) * this.level/100) + ((this.IVs.spAttack + 2 * this.stats["special-attack"] + 5) * this.level/100) * this.nature.attributes.spAttack
        }else{
            this.stats["special-attack"] = ((this.IVs.spAttack + 2 * this.stats["special-attack"] + 5) * this.level/100)
        }
        if(this.nature.attributes.spDefense){
            this.stats["special-defense"] = ((this.IVs.spDefense + 2 * this.stats["special-defense"] + 5) * this.level/100) + ((this.IVs.spDefense + 2 * this.stats["special-defense"] + 5) * this.level/100) * this.nature.attributes.spDefense
        }else{
            this.stats["special-defense"] = ((this.IVs.spDefense + 2 * this.stats["special-defense"] + 5) * this.level/100)
        }
        if(this.nature.attributes.speed){
            this.stats.speed = ((this.IVs.speed + 2 * this.stats.speed + 5) * this.level/100) + ((this.IVs.speed + 2 * this.stats.speed + 5) * this.level/100) * this.nature.attributes.speed
        }else{
            this.stats.speed = ((this.IVs.speed + 2 * this.stats.speed + 5) * this.level/100)
        }

        this.stats.hp = Math.round(this.stats.hp)
        this.stats.attack = Math.round(this.stats.attack)
        this.stats.defense = Math.round(this.stats.defense)
        this.stats["special-attack"] = Math.round(this.stats["special-attack"])
        this.stats["special-defense"] = Math.round(this.stats["special-defense"])
        this.stats.speed = Math.round(this.stats.speed)
    }

    attack(pokemon, isEnemy){
        return new Promise((resolve) => {
            let i = 1;
            if(!isEnemy){
                this.moves.forEach(move => {
                    console.log(`[${i}]: Nome: ${move.name} | Tipo: ${move.type} | Dano: ${move.power} | Precisão: ${move.accuracy}\n`)
                    i++
                });
            }

            let move
            let accuracy
            let superEffective = false
            let notVeryEffective = false
            let randomNumber
            let multiplierType
            let attackType
            let attackStat
            let defenseStat
            let baseDmg
            let margin
            let dmg

            if(!isEnemy){
                this.rl.question("Escolha um dos moves: (1-4)", (s) => {
                    console.log("\n")
                    let n = parseInt(s)
                    move = this.moves[n-1]

                    
                    randomNumber = Math.round(Math.random() * 100)
                    accuracy = move.accuracy

                    if(accuracy < randomNumber){
                        console.log("Você errou o ataque!!")
                        resolve(0)
                        return
                    }

                    if(move.category == "Status"){
                        console.log(`${this.name} usou ${move.name}! Um ataque de status foi utilizado.`)
                        resolve(0)
                        return
                    }
            
                    attackType = move.type
                    
                    multiplierType = 1
            
                    if(pokemon.weakness.has(attackType)){
                        multiplierType = 2
                        superEffective = true
                    } else if (pokemon.resistances.has(attackType)){
                        multiplierType = 0.5
                        notVeryEffective = true
                    }
            
                    attackStat = move.category === "Special" ? this.stats['special-attack'] : this.stats.attack
                    defenseStat = move.category === "Special" ? this.stats['special-defense'] : this.stats.defense
            
                    baseDmg = move.power
            
                    margin = Math.round(Math.random() * 20) + 80
            
                    dmg = ((((2 * this.level / 5 + 2) * attackStat * baseDmg / defenseStat) / 50) + 2) * 1.5 * multiplierType * (margin/100)
            
                    if(superEffective){
                        console.log(`${this.name} atacou ${pokemon.name} usando ${move.name}, foi SUPER EFETIVO e causou ${Math.round(dmg)} de dano!`)
                    }else if(notVeryEffective){
                        console.log(`${this.name} atacou ${pokemon.name} usando ${move.name}, não foi muito efetivo e causou ${Math.round(dmg)} de dano!`)
                    }else{
                        console.log(`${this.name} atacou ${pokemon.name} usando ${move.name} e causou ${Math.round(dmg)} de dano!`)
                    }
                    resolve(Math.round(dmg))
                })
            }else {
                randomNumber = Math.round(Math.random() * this.moves.length)

                move = this.moves[randomNumber]

                randomNumber = Math.round(Math.random() * 100)
                accuracy = move.accuracy

                if(accuracy < randomNumber){
                    console.log(`${this.name} usou ${move} e errou o ataque`)
                    resolve(0)
                    return
                }

                if(move.category == "Status"){
                    console.log(`${this.name} usou ${move.name}! Um ataque de status foi utilizado.`)
                    resolve(0)
                    return
                }
        
                attackType = move.type
                
                multiplierType = 1
        
                if(pokemon.weakness.has(attackType)){
                    multiplierType = 2
                    superEffective = true
                } else if (pokemon.resistances.has(attackType)){
                    multiplierType = 0.5
                    notVeryEffective = true
                }
        
                attackStat = move.category === "Special" ? this.stats['special-attack'] : this.stats.attack
                defenseStat = move.category === "Special" ? this.stats['special-defense'] : this.stats.defense
        
                baseDmg = move.power
        
                margin = Math.round(Math.random() * 20) + 80
        
                dmg = ((((2 * this.level / 5 + 2) * attackStat * baseDmg / defenseStat) / 50) + 2) * 1.5 * multiplierType * (margin/100)
        
        
                if(superEffective){
                    console.log(`${this.name} atacou ${pokemon.name} usando ${move.name}, foi SUPER EFETIVO e causou ${Math.round(dmg)} de dano!`)
                }else if(notVeryEffective){
                    console.log(`${this.name} atacou ${pokemon.name} usando ${move.name}, não foi muito efetivo e causou ${Math.round(dmg)} de dano!`)
                }else{
                    console.log(`${this.name} atacou ${pokemon.name} usando ${move.name} e causou ${Math.round(dmg)} de dano!`)
                }
                resolve(Math.round(dmg))
            }
        })
    }

    async startBattle(pokemon) {
        let hpAlly = this.stats.hp
        let hpEnemy = pokemon.stats.hp
        let dmgTake;

        do {
            if(this.stats.speed >= pokemon.stats.speed){
                dmgTake = await this.attack(pokemon, false)  
                hpEnemy -= dmgTake
                console.log(`HP ${pokemon.name}: ${hpEnemy}`)
                if(hpEnemy < 0){
                    console.log(`A batalha acabou! ${this.name} venceu ${pokemon.name}`)
                    this.rl.close()
                    break
                } else {
                    dmgTake = await pokemon.attack(this, true)
                    hpAlly -= dmgTake
                    console.log(`HP do ${this.name}: ${hpAlly}`)

                    if(hpAlly < 0) {
                        console.log(`A batalha acabou! ${pokemon.name} venceu ${this.name}`)
                        this.rl.close()
                        break
                    }
                }
            } else {
                dmgTake = await pokemon.attack(this, true)
                hpAlly -= dmgTake
                console.log(`HP ${this.name}: ${hpAlly}`)
                if(hpAlly < 0){
                    console.log(`A batalha acabou! ${pokemon.name} venceu ${this.name}`)
                    this.rl.close()
                    break
                } else {
                    dmgTake = await this.attack(pokemon, false)
                    hpEnemy -= dmgTake
                    console.log(`HP ${pokemon.name}: ${hpEnemy}`)
                    if(hpEnemy < 0) {
                        console.log(`A batalha acabou! ${this.name} venceu ${pokemon.name}`)
                        this.rl.close()
                        break
                    }
                }
            }
        }while(hpAlly > 0 || hpEnemy > 0)
    }
}   

// Função assíncrona de criação do Pokemon

const createPokemon = async (pokemon_name, pokemon_types, level) => {
    await Pokemon.initializeStats()
    const pokemon = new Pokemon(pokemon_name, pokemon_types, level)

    return pokemon
}

// Função para utilização do Pokemon.

const usePokemon = async () => {
    const venusaur = await createPokemon('venusaur', ['grass', 'poison'], 100)
    const charizard = await createPokemon('charizard', ['fire', 'flying'], 100)

    venusaur.startBattle(charizard)
}

usePokemon()