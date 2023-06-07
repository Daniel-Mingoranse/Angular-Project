import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../funcionario';
import { FuncionarioDataService } from '../funcionario-data.service';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-crud-funcionario',
  templateUrl: './crud-funcionario.component.html',
  styleUrls: ['./crud-funcionario.component.css'],
})
export class CrudFuncionarioComponent implements OnInit {
  funcionario!: Funcionario;
  key: string = '';

  constructor(
    private funcionarioService: FuncionarioService,
    private funcionarioDataService: FuncionarioDataService
  ) {}

  ngOnInit() {
    this.funcionario = new Funcionario();
  }

  onSubmit() {
    if (this.key) {
    } else {
      this.funcionarioService.insert(this.funcionario);
    }

    this.funcionario = new Funcionario();
  }
}
