import { Colaborador } from './../../core/colaborador.model';
import { CopaService } from './../copa.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Title } from '@angular/platform-browser';
import { ErroHandlerService } from 'src/app/core/erro-handler.service';

@Component({
  selector: 'app-copa-cadastro',
  templateUrl: './copa-cadastro.component.html',
  styleUrls: ['./copa-cadastro.component.css']
})
export class CopaCadastroComponent implements OnInit {


colaborador = new Colaborador();

  constructor(
    private colaboradorService: CopaService,
    private router: Router,
    private messagemService: MessageService,
    private routes: ActivatedRoute,
    private title: Title,
    private erroHandler: ErroHandlerService,
  ) { }

  ngOnInit(): void {

    const codigoPessoa = this.routes.snapshot.params['codigo']

    this.title.setTitle('Nova Palpite')

    if(codigoPessoa && codigoPessoa !== 'novo') {
      this.carregarPessoa(codigoPessoa);
    }
  }


  get editando() {
    return Boolean(this.colaborador.codigo)
  }

  carregarPessoa(codigo: number)  {
    this.colaboradorService.buscarPorCodigo(codigo)
    .then((colaborador: Colaborador) => {
      this.colaborador = colaborador;

    })
    .catch(error => this.erroHandler.handler(error));

  }

  salverPessoa(form: NgForm) {
    if(this.editando) {
      this.atualizarPessoas(form);
    }else {
      this.adicionarLancamento(form)
    }
  }

  adicionarLancamento(form: NgForm) {
    this.colaboradorService.adicionarPessoa(this.colaborador)
    .then(() => {
      this.messagemService.add({ severity: 'success', detail: 'Palpite criado com sucesso!' });

      // this.lancamento = new Lancamento();
     this.router.navigate(['/pesquisa'])
    })
    .catch(error => this.erroHandler.handler(error));

  }

  atualizarPessoas(form: NgForm) {
    this.colaboradorService.atualizarPessoa(this.colaborador)
    .then((colaborador: Colaborador) => {
      this.colaborador = colaborador;


      this.messagemService.add({ severity: 'success', detail: 'Pessoa criado com sucesso!' });


    })
    .catch(error => this.erroHandler.handler(error));

  }

  novo(form: NgForm) {
    this.router.navigate(['/copa/novo'])

  setTimeout(() => {
    this.colaborador = new Colaborador();
  }, 1)
  }

}
