/*eslint-disable */

import { Component, Input, ViewChild } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-modal-bootsrap',
  templateUrl: './modal-bootsrap.component.html',
  styleUrls: ['./modal-bootsrap.component.scss'],
})
export class ModalBootsrapComponent {
  @ViewChild('content') content: any;

  character$?: Observable<Character>;

  constructor(private modalService: NgbModal, private characterService: CharacterService) {}

  set id(value: number) {
    this.character$ = this.character$ = this.characterService.getCharacter(value);
  }

  openVerticallyCentered(id: number): void {
    this.id = id;
    this.modalService.open(this.content, { centered: true });
  }
}
