import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';
import { Funcionario } from './funcionario';

@Injectable()
export class FuncionarioService {
  constructor(private db: AngularFireDatabase) {}

  insert(funcionario: Funcionario) {
    this.db
      .list('funcionario')
      .push(funcionario)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update(funcionario: Funcionario, key: string) {
    this.db
      .list('funcionario')
      .update(key, funcionario)
      .catch((error: any) => console.error(error));
  }

  getAll() {
    return this.db
      .list('funcionario')
      .snapshotChanges()
      .pipe(
        map((changes) => {
          return changes.map((c: any) => ({
            key: c.payload.key,
            ...c.payload.val(),
          }));
        })
      );
  }

  delete(key: string) {
    this.db.object(`funcionario/${key}`).remove();
  }
}
