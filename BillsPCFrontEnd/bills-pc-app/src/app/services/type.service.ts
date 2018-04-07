import { Injectable } from '@angular/core';

@Injectable()
export class TypeService {
  readonly none = 'assets/img/types/none.png';
  readonly normal = 'assets/img/types/normal.png';
  readonly grass = 'assets/img/types/grass.png';
  readonly fire = 'assets/img/types/fire.png';
  readonly water = 'assets/img/types/water.png';
  readonly electric = 'assets/img/types/electric.png';
  readonly ice = 'assets/img/types/ice.png';
  readonly bug = 'assets/img/types/bug.png';
  readonly poison = 'assets/img/types/poison.png';
  readonly ground = 'assets/img/types/ground.png';
  readonly rock = 'assets/img/types/rock.png';
  readonly fight = 'assets/img/types/fight.png';
  readonly flying = 'assets/img/types/flying.png';
  readonly psychic = 'assets/img/types/psychic.png';
  readonly ghost = 'assets/img/types/ghost.png';
  readonly dragon = 'assets/img/types/dragon.png';
  readonly physical = 'assets/img/types/physical.png';
  readonly special = 'assets/img/types/special.png';
  readonly status = 'assets/img/types/status.png';

  readonly name = [
    'normal', 'psychic', 'electric', 'ice',
    'ground', 'rock', 'water', 'grass',
    'flying', 'fight', 'fire', 'bug',
    'poison', 'ghost', 'dragon'
  ];
  readonly img = [
    this.normal, this.psychic, this.electric, this.ice,
    this.ground, this.rock, this.water, this.grass,
    this.flying, this.fight, this.fire, this.bug,
    this.poison, this.ghost, this.dragon
  ];

  readonly chart = [ // ----------===== Defending type =====----------
  // nrm, psy, elc, ice, grd, rck, wtr, grs, fly, ftg, fir, bug, psn, gst, drg   // Attacking type
    [1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0], // normal.
    [1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 2.0, 1.0, 1.0], // psychic.
    [1.0, 1.0, 0.5, 1.0, 0.0, 1.0, 2.0, 0.5, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], // electric.
    [1.0, 1.0, 1.0, 0.5, 2.0, 1.0, 0.5, 2.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0], // ice.
    [1.0, 1.0, 2.0, 1.0, 1.0, 2.0, 1.0, 0.5, 0.0, 1.0, 2.0, 0.5, 2.0, 1.0, 1.0], // ground.
    [1.0, 1.0, 1.0, 2.0, 1.0, 0.5, 1.0, 1.0, 2.0, 0.5, 2.0, 2.0, 1.0, 1.0, 1.0], // rock.
    [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], // water
    [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], // grass
    [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], // flying
    [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], // fight
    [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], // fire
    [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], // bug
    [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], // poison
    [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], // ghost
    [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]  // dragon
  ];

  constructor() { }
}
