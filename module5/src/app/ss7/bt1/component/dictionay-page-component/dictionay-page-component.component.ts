import { Component, OnInit } from '@angular/core';
import {IWord} from '../../module/i-word';
import {DictionaryService} from '../../service/dictionary.service';

@Component({
  selector: 'app-dictionay-page-component',
  templateUrl: './dictionay-page-component.component.html',
  styleUrls: ['./dictionay-page-component.component.css']
})
export class DictionayPageComponentComponent implements OnInit {
  iwords: IWord [];
  constructor(private service: DictionaryService) { }

  ngOnInit(): void {
    this.iwords = this.service.findAll();
  }

}
