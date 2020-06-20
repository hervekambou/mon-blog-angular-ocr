import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postSubject = new Subject<Post[]>();
  posts = [
    {
      title: 'Mon premier post',
      content: 'votre AppComponent contiendra array des posts, et il le passera à un component PostListComponent',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'votre PostListComponent affichera un PostListItemComponent pour chaque post dans array qu il a reçu',
      loveIts: 0,
      created_at:  new Date()
    },
    {
      title: 'Mon troisième post',
      content: 'chaque PostListItemComponent affichera le titre, le contenu et la date de création du post dans le template',
      loveIts: 0,
      created_at:  new Date()
    },
    {
      title: 'Mon quatrième post',
      content: 'les PostListItemComponent auront des boutons qui permettent daugmenter et de diminuer le nombre de loveIts — cette modification aura uniquement un effet sur le component, et na pas besoin dêtre remontée au component parent',
      loveIts: 0,
      created_at:  new Date()
    }
  ];
  constructor() { }
}
