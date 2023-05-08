import {Injectable} from '@angular/core';
import {IWord} from '../module/i-word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  iwords: IWord [] = [{
    word: 'New',
    mean: 'Mới'
  },
    {
      word: 'Pld',
      mean: 'Cũ'
    },
    {
      word: 'cloud',
      mean: 'Đám mây'
    },
    {
      word: 'Congratulation',
      mean: 'Chúc mừng'
    },
    {
      word: 'Good',
      mean: 'Tốt'
    },
    {
      word: 'Bad',
      mean: 'Xấu, không tốt'
    },
    {
      word: 'Feel',
      mean: 'Cảm giác, cảm nhận'
    }];

  constructor() {
  }

  findAll() {
    return this.iwords;
  }
}
