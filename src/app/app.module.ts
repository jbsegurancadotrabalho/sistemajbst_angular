import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSearchPipeModule } from 'ngx-search-pipe'; 
import { Routes, RouterModule } from '@angular/router';
import { PasswordAdminComponent } from './modulo-1-admin/usuario-admin/password-admin/password-admin.component';
import { LoginAdminComponent } from './modulo-1-admin/usuario-admin/login-admin/login-admin.component';
import { AppComponent } from './app.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import {DataTablesModule} from 'angular-datatables'
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './modulo-1-admin/dashboard/dashboard.component';
import { CadastrarEmpresaComponent } from './modulo-1-admin/empresa/cadastrar-empresa/cadastrar-empresa.component';
import { ConsultarEmpresaComponent } from './modulo-1-admin/empresa/consultar-empresa/consultar-empresa.component';
import { EditarEmpresaComponent } from './modulo-1-admin/empresa/editar-empresa/editar-empresa.component';
import { CadastrarFuncionarioComponent } from './modulo-1-admin/empresa/funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { ConsultarFuncionarioComponent } from './modulo-1-admin/empresa/funcionario/consultar-funcionario/consultar-funcionario.component';
import { EditarFuncionarioComponent } from './modulo-1-admin/empresa/funcionario/editar-funcionario/editar-funcionario.component';
import { CadastrarTurmasComponent } from './modulo-1-admin/turmas/cadastrar-turmas/cadastrar-turmas.component';
import { EditarTurmasComponent } from './modulo-1-admin/turmas/editar-turmas/editar-turmas.component';
import { CadastrarInstrutorComponent } from './modulo-1-admin/instrutor/cadastrar-instrutor/cadastrar-instrutor.component';
import { ConsultarInstrutorComponent } from './modulo-1-admin/instrutor/consultar-instrutor/consultar-instrutor.component';
import { EditarInstrutorComponent } from './modulo-1-admin/instrutor/editar-instrutor/editar-instrutor.component';
import { CadastrarEspecializacaoComponent } from './modulo-1-admin/instrutor/especializacao/cadastrar-especializacao/cadastrar-especializacao.component';
import { ConsultarEspecializacaoComponent } from './modulo-1-admin/instrutor/especializacao/consultar-especializacao/consultar-especializacao.component';
import { EditarEspecializacaoComponent } from './modulo-1-admin/instrutor/especializacao/editar-especializacao/editar-especializacao.component';
import { ConsultarEnderecoComponent } from './modulo-1-admin/endereco/consultar-endereco/consultar-endereco.component';
import { CadastrarEnderecoComponent } from './modulo-1-admin/endereco/cadastrar-endereco/cadastrar-endereco.component';
import { EditarEnderecoComponent } from './modulo-1-admin/endereco/editar-endereco/editar-endereco.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListadepresencaComponent } from './modulo-1-admin/turmas/listadepresenca/listadepresenca.component';
import { ConsultarCertificadoAlunosComponent } from './modulo-1-admin/certificado/consultar-certificado-alunos/consultar-certificado-alunos.component';
import { GerarAutorizacaoComponent } from './modulo-1-admin/certificado/autorizacao/gerar-autorizacao/gerar-autorizacao.component';
import { CadastrarUnidadeComponent } from './modulo-1-admin/turmas/unidade/cadastrar-unidade/cadastrar-unidade.component';
import { ConsultarUnidadeComponent } from './modulo-1-admin/turmas/unidade/consultar-unidade/consultar-unidade.component';
import { EditarUnidadeComponent } from './modulo-1-admin/turmas/unidade/editar-unidade/editar-unidade.component';
import { CadastrarFuncaoComponent } from './modulo-1-admin/empresa/funcionario/funcao/cadastrar-funcao/cadastrar-funcao.component';
import { ConsultarFuncaoComponent } from './modulo-1-admin/empresa/funcionario/funcao/consultar-funcao/consultar-funcao.component';
import { EditarFuncaoComponent } from './modulo-1-admin/empresa/funcionario/funcao/editar-funcao/editar-funcao.component';
import { CriarChamadoComponent } from './modulo-1-admin/comercial/chamados/criar-chamado/criar-chamado.component';
import { EditarChamadoComponent } from './modulo-1-admin/comercial/chamados/editar-chamado/editar-chamado.component';
import { ConsultarChamadoComponent } from './modulo-1-admin/comercial/chamados/consultar-chamado/consultar-chamado.component';
import { ConsultarTurmasAdmComponent } from './modulo-1-admin/turmas/adm/consultar-turmas-adm/consultar-turmas-adm.component';
import { CadastrarContratoComponent } from './modulo-1-admin/empresa/contrato/cadastrar-contrato/cadastrar-contrato.component';
import { ConsultarContratoComponent } from './modulo-1-admin/empresa/contrato/consultar-contrato/consultar-contrato.component';
import { EditarContratoComponent } from './modulo-1-admin/empresa/contrato/editar-contrato/editar-contrato.component';
import { CadastrarPedidoDeComprasComponent } from './modulo-1-admin/empresa/contrato/pedido-de-compras/cadastrar-pedido-de-compras/cadastrar-pedido-de-compras.component';
import { ConsultarPedidoDeComprasComponent } from './modulo-1-admin/empresa/contrato/pedido-de-compras/consultar-pedido-de-compras/consultar-pedido-de-compras.component';
import { EditarPedidoDeComprasComponent } from './modulo-1-admin/empresa/contrato/pedido-de-compras/editar-pedido-de-compras/editar-pedido-de-compras.component';
import { ConsultarContatosComponent } from './modulo-1-admin/empresa/consultar-contatos/consultar-contatos.component';
import { ConsultarCursosComponent } from './modulo-1-admin/turmas/cursos/consultar-cursos/consultar-cursos.component';
import { CadastrarCursoComponent } from './modulo-1-admin/turmas/cursos/cadastrar-curso/cadastrar-curso.component';
import { EditarCursoComponent } from './modulo-1-admin/turmas/cursos/editar-curso/editar-curso.component';
import { CriarProficienciaComponent } from './modulo-1-admin/instrutor/proficiencia/criar-proficiencia/criar-proficiencia.component';
import { EditarProficienciaComponent } from './modulo-1-admin/instrutor/proficiencia/editar-proficiencia/editar-proficiencia.component';
import { ConsultarProficienciaComponent } from './modulo-1-admin/instrutor/proficiencia/consultar-proficiencia/consultar-proficiencia.component';
import { ConsultarTurmasComponent } from './modulo-1-admin/turmas/consultar-turmas/consultar-turmas.component';
import { CadastrarPedidosDeComprasComponent } from './modulo-1-admin/financeiro/pedidos-de-compras/cadastrar-pedidos-de-compras/cadastrar-pedidos-de-compras.component';
import { EditarPedidosDeComprasComponent } from './modulo-1-admin/financeiro/pedidos-de-compras/editar-pedidos-de-compras/editar-pedidos-de-compras.component';
import { ConsultarPedidosDeComprasComponent } from './modulo-1-admin/financeiro/pedidos-de-compras/consultar-pedidos-de-compras/consultar-pedidos-de-compras.component';
import { CadastrarFaturamentoPjComponent } from './modulo-1-admin/financeiro/faturamento-pj/cadastrar-faturamento-pj/cadastrar-faturamento-pj.component';
import { EditarFaturamentoPjComponent } from './modulo-1-admin/financeiro/faturamento-pj/editar-faturamento-pj/editar-faturamento-pj.component';
import { ConsultarFaturamentoPjComponent } from './modulo-1-admin/financeiro/faturamento-pj/consultar-faturamento-pj/consultar-faturamento-pj.component';
import { CadastrarFaturamentoPfComponent } from './modulo-1-admin/financeiro/faturamento-pf/cadastrar-faturamento-pf/cadastrar-faturamento-pf.component';
import { EditarFaturamentoPfComponent } from './modulo-1-admin/financeiro/faturamento-pf/editar-faturamento-pf/editar-faturamento-pf.component';
import { ConsultarFaturamentoPfComponent } from './modulo-1-admin/financeiro/faturamento-pf/consultar-faturamento-pf/consultar-faturamento-pf.component';
import { CadastrarPessoaFisicaComponent } from './modulo-1-admin/pessoa-fisica/cadastrar-pessoa-fisica/cadastrar-pessoa-fisica.component';
import { EditarPessoaFisicaComponent } from './modulo-1-admin/pessoa-fisica/editar-pessoa-fisica/editar-pessoa-fisica.component';
import { ConsultarPessoaFisicaComponent } from './modulo-1-admin/pessoa-fisica/consultar-pessoa-fisica/consultar-pessoa-fisica.component';
import { CriarMatriculasFaturamentoPfComponent } from './modulo-1-admin/turmas/matricula/faturamento-pf/criar-matriculas-faturamento-pf/criar-matriculas-faturamento-pf.component';
import { ConsultarMatriculasFaturamentoPfComponent } from './modulo-1-admin/turmas/matricula/faturamento-pf/consultar-matriculas-faturamento-pf/consultar-matriculas-faturamento-pf.component';
import { CriarMatriculasFaturamentoPjComponent } from './modulo-1-admin/turmas/matricula/faturamento-pj/criar-matriculas-faturamento-pj/criar-matriculas-faturamento-pj.component';
import { ConsultarMatriculasFaturamentoPjComponent } from './modulo-1-admin/turmas/matricula/faturamento-pj/consultar-matriculas-faturamento-pj/consultar-matriculas-faturamento-pj.component';
import { CriarMatriculasPedidosComponent } from './modulo-1-admin/turmas/matricula/pedidos/criar-matriculas-pedidos/criar-matriculas-pedidos.component';
import { ConsultarMatriculasPedidosComponent } from './modulo-1-admin/turmas/matricula/pedidos/consultar-matriculas-pedidos/consultar-matriculas-pedidos.component';
import { GerarAutorizacaoPessoafisicaComponent } from './modulo-1-admin/certificado/pessoafisica/gerar-autorizacao-pessoafisica/gerar-autorizacao-pessoafisica.component';
import { GerarCertificadoPessoafisicaComponent } from './modulo-1-admin/certificado/pessoafisica/gerar-certificado-pessoafisica/gerar-certificado-pessoafisica.component';
import { GerarListaDePresencaPessoafisicaComponent } from './modulo-1-admin/certificado/pessoafisica/gerar-lista-de-presenca-pessoafisica/gerar-lista-de-presenca-pessoafisica.component';
import { MatriculasPessoaFisicaGerarDocumentosComponent } from './modulo-1-admin/certificado/matriculas/matriculas-pessoa-fisica-gerar-documentos/matriculas-pessoa-fisica-gerar-documentos.component';
import { MatriculasPessoaJuridicaGerarDocumentosComponent } from './modulo-1-admin/certificado/matriculas/matriculas-pessoa-juridica-gerar-documentos/matriculas-pessoa-juridica-gerar-documentos.component';
import { ListasPessoaFisicaPrimeiroDiaComponent } from './modulo-1-admin/certificado/listas-pessoa-fisica/listas-pessoa-fisica-primeiro-dia/listas-pessoa-fisica-primeiro-dia.component';
import { ListasPessoaFisicaSegundoDiaComponent } from './modulo-1-admin/certificado/listas-pessoa-fisica/listas-pessoa-fisica-segundo-dia/listas-pessoa-fisica-segundo-dia.component';
import { ListasPessoaFisicaTerceiroDiaComponent } from './modulo-1-admin/certificado/listas-pessoa-fisica/listas-pessoa-fisica-terceiro-dia/listas-pessoa-fisica-terceiro-dia.component';
import { ListasPessoaFisicaQuartoDiaComponent } from './modulo-1-admin/certificado/listas-pessoa-fisica/listas-pessoa-fisica-quarto-dia/listas-pessoa-fisica-quarto-dia.component';
import { ListasPessoaJuridicaPrimeiroDiaComponent } from './modulo-1-admin/certificado/listas-pessoa-juridica/listas-pessoa-juridica-primeiro-dia/listas-pessoa-juridica-primeiro-dia.component';
import { ListasPessoaJuridicaSegundoDiaComponent } from './modulo-1-admin/certificado/listas-pessoa-juridica/listas-pessoa-juridica-segundo-dia/listas-pessoa-juridica-segundo-dia.component';
import { ListasPessoaJuridicaTerceiroDiaComponent } from './modulo-1-admin/certificado/listas-pessoa-juridica/listas-pessoa-juridica-terceiro-dia/listas-pessoa-juridica-terceiro-dia.component';
import { ListasPessoaJuridicaQuartoDiaComponent } from './modulo-1-admin/certificado/listas-pessoa-juridica/listas-pessoa-juridica-quarto-dia/listas-pessoa-juridica-quarto-dia.component';
import { ListasPessoaJuridicaQuintoDiaComponent } from './modulo-1-admin/certificado/listas-pessoa-juridica/listas-pessoa-juridica-quinto-dia/listas-pessoa-juridica-quinto-dia.component';
import { ListasPessoaFisicaQuintoDiaComponent } from './modulo-1-admin/certificado/listas-pessoa-fisica/listas-pessoa-fisica-quinto-dia/listas-pessoa-fisica-quinto-dia.component';
import { GerarRelatorioPessoaFisicaComponent } from './modulo-1-admin/financeiro/faturamento-pf/gerar-relatorio-pessoa-fisica/gerar-relatorio-pessoa-fisica.component';
import { GerarRelatorioPessoaJuridicaComponent } from './modulo-1-admin/financeiro/faturamento-pj/gerar-relatorio-pessoa-juridica/gerar-relatorio-pessoa-juridica.component';
import { GerarRelatorioPedidosDeComprasComponent } from './modulo-1-admin/financeiro/pedidos-de-compras/gerar-relatorio-pedidos-de-compras/gerar-relatorio-pedidos-de-compras.component';
import { RegisterAdminComponent } from './modulo-1-admin/usuario-admin/register-admin/register-admin.component';
import { PerfilEmpresaComponent } from './perfil/perfil-empresa/perfil-empresa.component';
import { PerfilAlunoComponent } from './perfil/perfil-aluno/perfil-aluno.component';
import { PerfilMasterComponent } from './perfil/perfil-master/perfil-master.component';
import { NgSelectModule, NgSelectConfig } from '@ng-select/ng-select';
import { ConsultarMatriculasEmpresaComponent } from './perfil/perfil-empresa/matriculas-empresa/consultar-matriculas-empresa/consultar-matriculas-empresa.component';
import { ConsultarMatriculasAlunoComponent } from './perfil/perfil-aluno/matriculas-aluno/consultar-matriculas-aluno/consultar-matriculas-aluno.component';
import { GerarCertificadoPerfilEmpresaComponent } from './perfil/perfil-empresa/matriculas-empresa/gerar-certificado-perfil-empresa/gerar-certificado-perfil-empresa.component';
import { GerarAutorizacaoPerfilEmpresaComponent } from './perfil/perfil-empresa/matriculas-empresa/gerar-autorizacao-perfil-empresa/gerar-autorizacao-perfil-empresa.component';
import { ListaDePresencaPrimeiroDiaComponent } from './perfil/perfil-empresa/matriculas-empresa/listas-de-presenca/lista-de-presenca-primeiro-dia/lista-de-presenca-primeiro-dia.component';
import { ListaDePresencaSegundoDiaComponent } from './perfil/perfil-empresa/matriculas-empresa/listas-de-presenca/lista-de-presenca-segundo-dia/lista-de-presenca-segundo-dia.component';
import { ListaDePresencaTerceiroDiaComponent } from './perfil/perfil-empresa/matriculas-empresa/listas-de-presenca/lista-de-presenca-terceiro-dia/lista-de-presenca-terceiro-dia.component';
import { ListaDePresencaQuartoDiaComponent } from './perfil/perfil-empresa/matriculas-empresa/listas-de-presenca/lista-de-presenca-quarto-dia/lista-de-presenca-quarto-dia.component';
import { ListaDePresencaQuintoDiaComponent } from './perfil/perfil-empresa/matriculas-empresa/listas-de-presenca/lista-de-presenca-quinto-dia/lista-de-presenca-quinto-dia.component';
import { GerarCertificadoPerfilAlunoComponent } from './perfil/perfil-aluno/matriculas-aluno/gerar-certificado-perfil-aluno/gerar-certificado-perfil-aluno.component';
import { GerarAutorizacaoPerfilAlunoComponent } from './perfil/perfil-aluno/matriculas-aluno/gerar-autorizacao-perfil-aluno/gerar-autorizacao-perfil-aluno.component';
import { ListasAlunoParticularPrimeiroDiaComponent } from './perfil/perfil-aluno/matriculas-aluno/listas/listas-aluno-particular-primeiro-dia/listas-aluno-particular-primeiro-dia.component';
import { ListasAlunoParticularSegundoDiaComponent } from './perfil/perfil-aluno/matriculas-aluno/listas/listas-aluno-particular-segundo-dia/listas-aluno-particular-segundo-dia.component';
import { ListasAlunoParticularTerceiroDiaComponent } from './perfil/perfil-aluno/matriculas-aluno/listas/listas-aluno-particular-terceiro-dia/listas-aluno-particular-terceiro-dia.component';
import { ListasAlunoParticularQuartoDiaComponent } from './perfil/perfil-aluno/matriculas-aluno/listas/listas-aluno-particular-quarto-dia/listas-aluno-particular-quarto-dia.component';
import { ListasAlunoParticularQuintoDiaComponent } from './perfil/perfil-aluno/matriculas-aluno/listas/listas-aluno-particular-quinto-dia/listas-aluno-particular-quinto-dia.component';
import { EditarMatriculaComponent } from './modulo-1-admin/turmas/matricula/editar-matricula/editar-matricula.component';
import { CriarCobrancaEmpresaFaturamentoComponent } from './modulo-1-admin/financeiro/cobranca/empresa-faturamento/criar-cobranca-empresa-faturamento/criar-cobranca-empresa-faturamento.component';
import { CriarCobrancaEmpresaPedidosComponent } from './modulo-1-admin/financeiro/cobranca/empresa-pedidos/criar-cobranca-empresa-pedidos/criar-cobranca-empresa-pedidos.component';
import { CriarCobrancaPessoaFisicaFaturamentoComponent } from './modulo-1-admin/financeiro/cobranca/pessoa-fisica-faturamento/criar-cobranca-pessoa-fisica-faturamento/criar-cobranca-pessoa-fisica-faturamento.component';
import { ConsultarTurmasPerfilEmpresaComponent } from './perfil/perfil-empresa/turmas/consultar-turmas-perfil-empresa/consultar-turmas-perfil-empresa.component';
import { ConsultarInstrutorPerfilEmpresaComponent } from './perfil/perfil-empresa/instrutor/consultar-instrutor-perfil-empresa/consultar-instrutor-perfil-empresa.component';
import { ConsultarTurmasPerfilAlunoComponent } from './perfil/perfil-aluno/turmas/consultar-turmas-perfil-aluno/consultar-turmas-perfil-aluno.component';
import { ConsultarInstrutorPerfilAlunoComponent } from './perfil/perfil-aluno/instrutor/consultar-instrutor-perfil-aluno/consultar-instrutor-perfil-aluno.component';
import { ConsultarTurmasPorUnidadesComponent } from './modulo-1-admin/turmas/consultar-turmas-por-unidades/consultar-turmas-por-unidades.component';
import { ConsultarEmpresasComponent } from './perfil/perfil-empresa/empresa-cliente/consultar-empresas/consultar-empresas.component';
import { CadastrarFuncionarioPerfilempresaComponent } from './perfil/perfil-empresa/funcionariosempresa/cadastrar-funcionario-perfilempresa/cadastrar-funcionario-perfilempresa.component';
import { EditarFuncionarioPerfilempresaComponent } from './perfil/perfil-empresa/funcionariosempresa/editar-funcionario-perfilempresa/editar-funcionario-perfilempresa.component';
import { CadastrarFuncaoPerfilempresaComponent } from './perfil/perfil-empresa/funcionariosempresa/cadastrar-funcao-perfilempresa/cadastrar-funcao-perfilempresa.component';
import { ConsultarFuncaoPerfilempresaComponent } from './perfil/perfil-empresa/funcionariosempresa/consultar-funcao-perfilempresa/consultar-funcao-perfilempresa.component';
import { TurmasCriarMatriculaPerfilEmpresaComponent } from './perfil/perfil-empresa/turmas-criar-matricula-perfil-empresa/turmas-criar-matricula-perfil-empresa.component';
import { ConsultarFaturamentoPerfilEmpresaComponent } from './perfil/perfil-empresa/financeiro/consultar-faturamento-perfil-empresa/consultar-faturamento-perfil-empresa.component';
import { GerarRelatorioFaturamentoPerfilEmpresaComponent } from './perfil/perfil-empresa/financeiro/gerar-relatorio-faturamento-perfil-empresa/gerar-relatorio-faturamento-perfil-empresa.component';
import { PedidosDeComprasPerfilEmpresaComponent } from './perfil/perfil-empresa/financeiro/pedidos-de-compras-perfil-empresa/pedidos-de-compras-perfil-empresa.component';
import { GerarRelatoriosPedidosDeComprasPerfilEmpresaComponent } from './perfil/perfil-empresa/financeiro/gerar-relatorios-pedidos-de-compras-perfil-empresa/gerar-relatorios-pedidos-de-compras-perfil-empresa.component';
import { FazerMatriculasPedidosDeComprasPerfilEmpresaComponent } from './perfil/perfil-empresa/financeiro/fazer-matriculas-pedidos-de-compras-perfil-empresa/fazer-matriculas-pedidos-de-compras-perfil-empresa.component';
import { GerarAcessoClienteEmpresaComponent } from './modulo-1-admin/empresa/gerar-acesso-cliente-empresa/gerar-acesso-cliente-empresa.component';
import { GerarAcessoClientePessoafisicaComponent } from './modulo-1-admin/pessoa-fisica/gerar-acesso-cliente-pessoafisica/gerar-acesso-cliente-pessoafisica.component';
import { ConsultarDadosAlunoParticularComponent } from './perfil/perfil-aluno/dados-aluno/consultar-dados-aluno-particular/consultar-dados-aluno-particular.component';
import { ConsultarFaturamentoAlunoComponent } from './perfil/perfil-aluno/dados-aluno/consultar-faturamento-aluno/consultar-faturamento-aluno.component';
import { RelatorioFaturamentoAlunoComponent } from './perfil/perfil-aluno/dados-aluno/relatorio-faturamento-aluno/relatorio-faturamento-aluno.component';
import { CriarMatriculasAlunoParticularComponent } from './perfil/perfil-aluno/dados-aluno/criar-matriculas-aluno-particular/criar-matriculas-aluno-particular.component';
import { EditarMatriculasAlunoParticularComponent } from './perfil/perfil-aluno/dados-aluno/editar-matriculas-aluno-particular/editar-matriculas-aluno-particular.component';
import { GerarCertificadoSemSerAssinadoComponent } from './modulo-1-admin/certificado/gerar-certificado-sem-ser-assinado/gerar-certificado-sem-ser-assinado.component';
import { ConsultarCursosEmpresaComponent } from './perfil/perfil-empresa/consultar-cursos-empresa/consultar-cursos-empresa.component';
import { ConsultarCursosAlunoComponent } from './perfil/perfil-aluno/consultar-cursos-aluno/consultar-cursos-aluno.component';
import { GerarCertificadoSemAssinarPessoaFisicaComponent } from './modulo-1-admin/certificado/gerar-certificado-sem-assinar-pessoa-fisica/gerar-certificado-sem-assinar-pessoa-fisica.component';
import { CriarEmpresaDocComponent } from './modulo-2-relatorios/empresa-doc/criar-empresa-doc/criar-empresa-doc.component';
import { ConsultarEmpresadocComponent } from './modulo-2-relatorios/empresa-doc/consultar-empresadoc/consultar-empresadoc.component';
import { EditarEmpresadocComponent } from './modulo-2-relatorios/empresa-doc/editar-empresadoc/editar-empresadoc.component';
import { EditarUnidadedocComponent } from './modulo-2-relatorios/unidadedoc/editar-unidadedoc/editar-unidadedoc.component';
import { ConsultarUnidadedocComponent } from './modulo-2-relatorios/unidadedoc/consultar-unidadedoc/consultar-unidadedoc.component';
import { CriarUnidadedocComponent } from './modulo-2-relatorios/unidadedoc/criar-unidadedoc/criar-unidadedoc.component';
import { CriarFuncaodocComponent } from './modulo-2-relatorios/funcao-doc/criar-funcaodoc/criar-funcaodoc.component';
import { EditarFuncaodocComponent } from './modulo-2-relatorios/funcao-doc/editar-funcaodoc/editar-funcaodoc.component';
import { ConsultarFuncaodocComponent } from './modulo-2-relatorios/funcao-doc/consultar-funcaodoc/consultar-funcaodoc.component';
import { CriarRiscosComponent } from './modulo-2-relatorios/riscos/criar-riscos/criar-riscos.component';
import { EditarRiscosComponent } from './modulo-2-relatorios/riscos/editar-riscos/editar-riscos.component';
import { ConsultarRiscosComponent } from './modulo-2-relatorios/riscos/consultar-riscos/consultar-riscos.component';
import { CriarPerigoComponent } from './modulo-2-relatorios/perigo/criar-perigo/criar-perigo.component';
import { EditarPerigoComponent } from './modulo-2-relatorios/perigo/editar-perigo/editar-perigo.component';
import { ConsultarPerigoComponent } from './modulo-2-relatorios/perigo/consultar-perigo/consultar-perigo.component';
import { EditarCursoParaFuncoesComponent } from './modulo-2-relatorios/curso-para-funcoes/editar-curso-para-funcoes/editar-curso-para-funcoes.component';
import { ConsultarCursoParaFuncoesComponent } from './modulo-2-relatorios/curso-para-funcoes/consultar-curso-para-funcoes/consultar-curso-para-funcoes.component';
import { CriarCursoParaFuncoesComponent } from './modulo-2-relatorios/curso-para-funcoes/criar-curso-para-funcoes/criar-curso-para-funcoes.component';
import { CriarEpiComponent } from './modulo-2-relatorios/Epi/criar-epi/criar-epi.component';
import { EditarEpiComponent } from './modulo-2-relatorios/Epi/editar-epi/editar-epi.component';
import { ConsultarEpiComponent } from './modulo-2-relatorios/Epi/consultar-epi/consultar-epi.component';
import { CriarExamesGeralComponent } from './modulo-2-relatorios/Exames/exames-geral/criar-exames-geral/criar-exames-geral.component';
import { EditarExamesGeralComponent } from './modulo-2-relatorios/Exames/exames-geral/editar-exames-geral/editar-exames-geral.component';
import { ConsultarExamesGeralComponent } from './modulo-2-relatorios/Exames/exames-geral/consultar-exames-geral/consultar-exames-geral.component';
import { CriarMaquinasComponent } from './modulo-2-relatorios/maquinas/criar-maquinas/criar-maquinas.component';
import { EditarMaquinasComponent } from './modulo-2-relatorios/maquinas/editar-maquinas/editar-maquinas.component';
import { ConsultarMaquinasComponent } from './modulo-2-relatorios/maquinas/consultar-maquinas/consultar-maquinas.component';
import { CriarDanosComponent } from './modulo-2-relatorios/sms/danos/criar-danos/criar-danos.component';
import { EditarDanosComponent } from './modulo-2-relatorios/sms/danos/editar-danos/editar-danos.component';
import { ConsultarDanosComponent } from './modulo-2-relatorios/sms/danos/consultar-danos/consultar-danos.component';
import { CriarProbabilidadeDeOcorrenciaComponent } from './modulo-2-relatorios/sms/probabilidade-de-ocorrencia/criar-probabilidade-de-ocorrencia/criar-probabilidade-de-ocorrencia.component';
import { EditarProbabilidadeDeOcorrenciaComponent } from './modulo-2-relatorios/sms/probabilidade-de-ocorrencia/editar-probabilidade-de-ocorrencia/editar-probabilidade-de-ocorrencia.component';
import { ConsultarProbabilidadeDeOcorrenciaComponent } from './modulo-2-relatorios/sms/probabilidade-de-ocorrencia/consultar-probabilidade-de-ocorrencia/consultar-probabilidade-de-ocorrencia.component';
import { CriarNivelSeveridadeComponent } from './modulo-2-relatorios/sms/nivel_severidade/criar-nivel-severidade/criar-nivel-severidade.component'; 
import { EditarNivelSeveridadeComponent } from './modulo-2-relatorios/sms/nivel_severidade/editar-nivel-severidade/editar-nivel-severidade.component'; 
import { ConsultarNivelSeveridadeComponent } from './modulo-2-relatorios/sms/nivel_severidade/consultar-nivel-severidade/consultar-nivel-severidade.component';
import { CriarPotencialSeveridadeComponent } from './modulo-2-relatorios/sms/Potencial_Severidade/criar-potencial-severidade/criar-potencial-severidade.component';
import { EditarPotencialSeveridadeComponent } from './modulo-2-relatorios/sms/Potencial_Severidade/editar-potencial-severidade/editar-potencial-severidade.component';
import { ConsultarPotencialSeveridadeComponent } from './modulo-2-relatorios/sms/Potencial_Severidade/consultar-potencial-severidade/consultar-potencial-severidade.component';
import { CriarMedidasDeControleComponent } from './modulo-2-relatorios/sms/medidas_de_controle/criar-medidas-de-controle/criar-medidas-de-controle.component';
import { EditarMedidasDeControleComponent } from './modulo-2-relatorios/sms/medidas_de_controle/editar-medidas-de-controle/editar-medidas-de-controle.component';
import { ConsultarMedidasDeControleComponent } from './modulo-2-relatorios/sms/medidas_de_controle/consultar-medidas-de-controle/consultar-medidas-de-controle.component';
import { CriarDanosRiscosComponent } from './modulo-2-relatorios/sms-riscos/danos/criar-danos-riscos/criar-danos-riscos.component';
import { ConsultarDanosRiscosComponent } from './modulo-2-relatorios/sms-riscos/danos/consultar-danos-riscos/consultar-danos-riscos.component';
import { CriarProbabilidadeDeOcorrenciaRiscosComponent } from './modulo-2-relatorios/sms-riscos/probabilidade-de-ocorrencia/criar-probabilidade-de-ocorrencia-riscos/criar-probabilidade-de-ocorrencia-riscos.component';
import { ConsultarProbabilidadeDeOcorrenciaRiscosComponent } from './modulo-2-relatorios/sms-riscos/probabilidade-de-ocorrencia/consultar-probabilidade-de-ocorrencia-riscos/consultar-probabilidade-de-ocorrencia-riscos.component';
import { ConsultarNivelDeSeveridadeRiscosComponent } from './modulo-2-relatorios/sms-riscos/nivel-de-severidade/consultar-nivel-de-severidade-riscos/consultar-nivel-de-severidade-riscos.component';
import { CriarNivelDeSeveridadeRiscosComponent } from './modulo-2-relatorios/sms-riscos/nivel-de-severidade/criar-nivel-de-severidade-riscos/criar-nivel-de-severidade-riscos.component';
import { CriarPotencialDeSeveridadeRiscosComponent } from './modulo-2-relatorios/sms-riscos/potencial-de-severidade/criar-potencial-de-severidade-riscos/criar-potencial-de-severidade-riscos.component';
import { ConsultarPotencialDeSeveridadeRiscosComponent } from './modulo-2-relatorios/sms-riscos/potencial-de-severidade/consultar-potencial-de-severidade-riscos/consultar-potencial-de-severidade-riscos.component';
import { CriarMedidasDeControleRiscosComponent } from './modulo-2-relatorios/sms-riscos/medidas-de-controle/criar-medidas-de-controle-riscos/criar-medidas-de-controle-riscos.component';
import { ConsultarMedidasDeControleRiscosComponent } from './modulo-2-relatorios/sms-riscos/medidas-de-controle/consultar-medidas-de-controle-riscos/consultar-medidas-de-controle-riscos.component';
import { CriarExamesFuncaoDocComponent } from './modulo-2-relatorios/Exames/exames-funcao-doc/criar-exames-funcao-doc/criar-exames-funcao-doc.component';
import { EditarExamesFuncaoDocComponent } from './modulo-2-relatorios/Exames/exames-funcao-doc/editar-exames-funcao-doc/editar-exames-funcao-doc.component';
import { ConsultarExamesFuncaoDocComponent } from './modulo-2-relatorios/Exames/exames-funcao-doc/consultar-exames-funcao-doc/consultar-exames-funcao-doc.component';
import { CriarAvaliacaoFuncaodocComponent } from './modulo-2-relatorios/avaliacoes-ocupacionais/avaliacao-funcao/criar-avaliacao-funcaodoc/criar-avaliacao-funcaodoc.component';
import { EditarAvaliacaoFuncaodocComponent } from './modulo-2-relatorios/avaliacoes-ocupacionais/avaliacao-funcao/editar-avaliacao-funcaodoc/editar-avaliacao-funcaodoc.component';
import { ConsultarAvaliacaoFuncaodocComponent } from './modulo-2-relatorios/avaliacoes-ocupacionais/avaliacao-funcao/consultar-avaliacao-funcaodoc/consultar-avaliacao-funcaodoc.component';
import { CriarSetorComponent } from './modulo-2-relatorios/funcao-especifica/setor/criar-setor/criar-setor.component';
import { EditarSetorComponent } from './modulo-2-relatorios/funcao-especifica/setor/editar-setor/editar-setor.component';
import { ConsultarSetorComponent } from './modulo-2-relatorios/funcao-especifica/setor/consultar-setor/consultar-setor.component';
import { CriarCenarioComponent } from './modulo-2-relatorios/funcao-especifica/setor/cenario/criar-cenario/criar-cenario.component';
import { EditarCenarioComponent } from './modulo-2-relatorios/funcao-especifica/setor/cenario/editar-cenario/editar-cenario.component';
import { ConsultarCenarioComponent } from './modulo-2-relatorios/funcao-especifica/setor/cenario/consultar-cenario/consultar-cenario.component';
import { CriarEtapasComponent } from './modulo-2-relatorios/funcao-especifica/setor/cenario/etapas/criar-etapas/criar-etapas.component';
import { EditarEtapasComponent } from './modulo-2-relatorios/funcao-especifica/setor/cenario/etapas/editar-etapas/editar-etapas.component';
import { ConsultarEtapasComponent } from './modulo-2-relatorios/funcao-especifica/setor/cenario/etapas/consultar-etapas/consultar-etapas.component';
import { CriarFuncaoEspecificaUnidadedocComponent } from './modulo-2-relatorios/funcao-especifica/criar-funcao-especifica-unidadedoc/criar-funcao-especifica-unidadedoc.component';
import { EditarFuncaoEspecificaUnidadedocComponent } from './modulo-2-relatorios/funcao-especifica/editar-funcao-especifica-unidadedoc/editar-funcao-especifica-unidadedoc.component';
import { ConsultarFuncaoEspecificaUnidadedocComponent } from './modulo-2-relatorios/funcao-especifica/consultar-funcao-especifica-unidadedoc/consultar-funcao-especifica-unidadedoc.component';
import { CriarPerigoFuncaoEspecificaComponent } from './modulo-2-relatorios/perigo/perigo-funcao-especifica/criar-perigo-funcao-especifica/criar-perigo-funcao-especifica.component';
import { ConsultarPerigoFuncaoEspecificaComponent } from './modulo-2-relatorios/perigo/perigo-funcao-especifica/consultar-perigo-funcao-especifica/consultar-perigo-funcao-especifica.component';
import { CriarRiscosFuncaoEspecificaComponent } from './modulo-2-relatorios/riscos/riscos-funcao-especifica/criar-riscos-funcao-especifica/criar-riscos-funcao-especifica.component';
import { ConsultarRiscosFuncaoEspecificaComponent } from './modulo-2-relatorios/riscos/riscos-funcao-especifica/consultar-riscos-funcao-especifica/consultar-riscos-funcao-especifica.component';
import { ConsultarEpiFuncaoEspecificaComponent } from './modulo-2-relatorios/Epi/epi-funcao-especifica/consultar-epi-funcao-especifica/consultar-epi-funcao-especifica.component'; 
import { CriarEpiFuncaoEspecificaComponent } from './modulo-2-relatorios/Epi/epi-funcao-especifica/criar-epi-funcao-especifica/criar-epi-funcao-especifica.component';
import { CriarCursoDeNrsFuncoesEspecificaComponent } from './modulo-2-relatorios/curso-para-funcoes/curso-de-nrs/criar-curso-de-nrs-funcoes-especifica/criar-curso-de-nrs-funcoes-especifica.component';
import { ConsultarCursoDeNrsFuncoesEspecificaComponent } from './modulo-2-relatorios/curso-para-funcoes/curso-de-nrs/consultar-curso-de-nrs-funcoes-especifica/consultar-curso-de-nrs-funcoes-especifica.component';
import { CriarExamesFuncaoEspecificaComponent } from './modulo-2-relatorios/Exames/exames-funcao-especifica/criar-exames-funcao-especifica/criar-exames-funcao-especifica.component';
import { ConsultarExamesFuncaoEspecificaComponent } from './modulo-2-relatorios/Exames/exames-funcao-especifica/consultar-exames-funcao-especifica/consultar-exames-funcao-especifica.component';
import { CriarAvaliacaoFuncaoEspecificaComponent } from './modulo-2-relatorios/avaliacoes-ocupacionais/avaliacao-funcao-especifica/criar-avaliacao-funcao-especifica/criar-avaliacao-funcao-especifica.component';
import { ConsultarAvaliacaoFuncaoEspecificaComponent } from './modulo-2-relatorios/avaliacoes-ocupacionais/avaliacao-funcao-especifica/consultar-avaliacao-funcao-especifica/consultar-avaliacao-funcao-especifica.component';
import { CriarCnaeComponent } from './modulo-2-relatorios/empresa-doc/cnae/criar-cnae/criar-cnae.component';
import { EditarCnaeComponent } from './modulo-2-relatorios/empresa-doc/cnae/editar-cnae/editar-cnae.component';
import { ConsultarCnaeComponent } from './modulo-2-relatorios/empresa-doc/cnae/consultar-cnae/consultar-cnae.component';
import { CriarPosturaComponent } from './modulo-2-relatorios/funcao-especifica/setor/postura/criar-postura/criar-postura.component';
import { EditarPosturaComponent } from './modulo-2-relatorios/funcao-especifica/setor/postura/editar-postura/editar-postura.component';
import { ConsultarPosturaComponent } from './modulo-2-relatorios/funcao-especifica/setor/postura/consultar-postura/consultar-postura.component';
import { CriarAnaliseDePosturaComponent } from './modulo-2-relatorios/funcao-especifica/setor/postura/analise-de-postura/criar-analise-de-postura/criar-analise-de-postura.component';
import { EditarAnaliseDePosturaComponent } from './modulo-2-relatorios/funcao-especifica/setor/postura/analise-de-postura/editar-analise-de-postura/editar-analise-de-postura.component';
import { ConsultarAnaliseDePosturaComponent } from './modulo-2-relatorios/funcao-especifica/setor/postura/analise-de-postura/consultar-analise-de-postura/consultar-analise-de-postura.component';
import { CriarRelatoriosComponent } from './modulo-2-relatorios/relatorios/criar-relatorios/criar-relatorios.component';
import { EditarRelatoriosComponent } from './modulo-2-relatorios/relatorios/editar-relatorios/editar-relatorios.component';
import { ConsultarRelatoriosComponent } from './modulo-2-relatorios/relatorios/consultar-relatorios/consultar-relatorios.component';
import { CriarDocumentosComponent } from './modulo-2-relatorios/relatorios/documentos/criar-documentos/criar-documentos.component';
import { EditarDocumentosComponent } from './modulo-2-relatorios/relatorios/documentos/editar-documentos/editar-documentos.component';
import { ConsultarDocumentosComponent } from './modulo-2-relatorios/relatorios/documentos/consultar-documentos/consultar-documentos.component';
import { CriarDocumentosFuncionariosComponent } from './modulo-2-relatorios/relatorios/documentos/criar-documentos-funcionarios/criar-documentos-funcionarios.component';
import { CriarTodosEnderecosComponent } from './modulo-1-admin/endereco/todos-enderecos/criar-todos-enderecos/criar-todos-enderecos.component';
import { EditarTodosEnderecosComponent } from './modulo-1-admin/endereco/todos-enderecos/editar-todos-enderecos/editar-todos-enderecos.component';
import { GerarOrdemDeServicoComponent } from './modulo-3-documentos/documentos-colaborador/gerar-ordem-de-servico/gerar-ordem-de-servico.component';
import { GerarFichaDeEpiComponent } from './modulo-3-documentos/documentos-colaborador/gerar-ficha-de-epi/gerar-ficha-de-epi.component';
import { FilterPipe } from './filter.pipe';
import { GerarPgrFuncaodocComponent } from './modulo-3-documentos/documentos-unidades/PGR/gerar-pgr-funcaodoc/gerar-pgr-funcaodoc.component';
import { ConsultarDocumentosPorUnidadesComponent } from './modulo-2-relatorios/relatorios/documentos/documentos-por-unidades/consultar-documentos-por-unidades/consultar-documentos-por-unidades.component';
import { GerarPcmsoComponent } from './modulo-3-documentos/documentos-unidades/pcmso/gerar-pcmso/gerar-pcmso.component';
import { GerarLtcatComponent } from './modulo-3-documentos/documentos-unidades/ltcat/gerar-ltcat/gerar-ltcat.component';
import { CriarDocumentosCenariosComponent } from './modulo-2-relatorios/relatorios/documentos/criar-documentos-cenarios/criar-documentos-cenarios.component';
import { ConsultarDocumentosCenariosComponent } from './modulo-2-relatorios/relatorios/documentos/consultar-documentos-cenarios/consultar-documentos-cenarios.component';
import { GerarAprComponent } from './modulo-3-documentos/documentos-cenarios/gerar-apr/gerar-apr.component';
import { GerarPermissaoDeTrabalhoComponent } from './modulo-3-documentos/documentos-cenarios/gerar-permissao-de-trabalho/gerar-permissao-de-trabalho.component';
import { GerarPermissaoDeTrabalhoAlturaComponent } from './modulo-3-documentos/documentos-cenarios/gerar-permissao-de-trabalho-altura/gerar-permissao-de-trabalho-altura.component';
import { GerarPetComponent } from './modulo-3-documentos/documentos-cenarios/gerar-pet/gerar-pet.component';
import { CriarDocumentosFreeCenarioComponent } from './modulo-3-documentos/documentos-free-cenario/criar-documentos-free-cenario/criar-documentos-free-cenario.component';
import { EditarDocumentosFreeCenarioComponent } from './modulo-3-documentos/documentos-free-cenario/editar-documentos-free-cenario/editar-documentos-free-cenario.component';
import { ConsultarDocumentosFreeCenarioComponent } from './modulo-3-documentos/documentos-free-cenario/consultar-documentos-free-cenario/consultar-documentos-free-cenario.component';
import { GerarAprFreeComponent } from './modulo-3-documentos/documentos-free-cenario/gerar-documentos-free-cenario/gerar-apr-free/gerar-apr-free.component';
import { GerarPtFreeComponent } from './modulo-3-documentos/documentos-free-cenario/gerar-documentos-free-cenario/gerar-pt-free/gerar-pt-free.component';
import { GerarPtaFreeComponent } from './modulo-3-documentos/documentos-free-cenario/gerar-documentos-free-cenario/gerar-pta-free/gerar-pta-free.component';
import { GerarPetFreeComponent } from './modulo-3-documentos/documentos-free-cenario/gerar-documentos-free-cenario/gerar-pet-free/gerar-pet-free.component';
import { CriarEtapasDocumentosFreeComponent } from './modulo-2-relatorios/funcao-especifica/setor/cenario/etapas/criar-etapas-documentos-free/criar-etapas-documentos-free.component';
import { ConsultarEtapasDocumentosFreeComponent } from './modulo-2-relatorios/funcao-especifica/setor/cenario/etapas/consultar-etapas-documentos-free/consultar-etapas-documentos-free.component';
import { CriarDocumentosFreeFuncionarioComponent } from './modulo-3-documentos/documentos-free-funcionario/criar-documentos-free-funcionario/criar-documentos-free-funcionario.component';
import { EditarDocumentosFreeFuncionarioComponent } from './modulo-3-documentos/documentos-free-funcionario/editar-documentos-free-funcionario/editar-documentos-free-funcionario.component';
import { ConsultarDocumentosFreeFuncionarioComponent } from './modulo-3-documentos/documentos-free-funcionario/consultar-documentos-free-funcionario/consultar-documentos-free-funcionario.component';
import { GerarFichaDeEpiFreeComponent } from './modulo-3-documentos/documentos-free-funcionario/gerar-ficha-de-epi-free/gerar-ficha-de-epi-free.component';
import { GerarOrdemDeServicoFreeComponent } from './modulo-3-documentos/documentos-free-funcionario/gerar-ordem-de-servico-free/gerar-ordem-de-servico-free.component';
import { ConsultarUnidadesEmpresasComponent } from './modulo-1-admin/empresa/minhas-unidades/consultar-unidades-empresas/consultar-unidades-empresas.component';
import { CadastrarEmpresaClienteComponent } from './modulo-1-admin/empresa/cadastrar-empresa-cliente/cadastrar-empresa-cliente.component';
import { CriarContaClienteEmpresaComponent } from './modulo-1-admin/usuario-admin/criar-conta-cliente-empresa/criar-conta-cliente-empresa.component';
import { EsqueciMinhaSenhaClienteEmpresaComponent } from './modulo-1-admin/usuario-admin/esqueci-minha-senha-cliente-empresa/esqueci-minha-senha-cliente-empresa.component';
import { EditarEmpresaClienteComponent } from './modulo-1-admin/empresa/editar-empresa-cliente/editar-empresa-cliente.component';
import { EditarFuncionarioEmpresaComponent } from './modulo-1-admin/empresa/funcionario/editar-funcionario-empresa/editar-funcionario-empresa.component';
import { ConsultarFuncionarioPerfilEmpresaComponent } from './modulo-1-admin/empresa/funcionario/consultar-funcionario-perfil-empresa/consultar-funcionario-perfil-empresa.component';
import { ConsultarFuncaoDasUnidadesComponent } from './modulo-2-relatorios/unidadedoc/consultar-funcao-das-unidades/consultar-funcao-das-unidades.component';
import { GerarLaudoErgonomicoComponent } from './modulo-3-documentos/documentos-unidades/laudo_ergonomico/gerar-laudo-ergonomico/gerar-laudo-ergonomico.component';
import { PcaComponent } from './modulo-3-documentos/documentos-unidades/pca/pca.component';
import { PcrComponent } from './modulo-3-documentos/documentos-unidades/pcr/pcr.component';
import { EditarChamadosClientesComponent } from './modulo-1-admin/comercial/chamados-clientes/editar-chamados-clientes/editar-chamados-clientes.component';
import { ConsultarChamadosClientesComponent } from './modulo-1-admin/comercial/chamados-clientes/consultar-chamados-clientes/consultar-chamados-clientes.component';
import { CriarChamadosClientesComponent } from './modulo-1-admin/comercial/chamados-clientes/criar-chamados-clientes/criar-chamados-clientes.component';
import { ConsultarSuporteAoClienteComponent } from './modulo-1-admin/comercial/chamados-clientes/consultar-suporte-ao-cliente/consultar-suporte-ao-cliente.component';
import { RespostaSuporteAoClienteComponent } from './modulo-1-admin/comercial/chamados-clientes/resposta-suporte-ao-cliente/resposta-suporte-ao-cliente.component';


@NgModule({
  declarations: [
    RegisterAdminComponent,
    LoginAdminComponent, 
    AppComponent,
    CadastrarEmpresaComponent,
    ConsultarEmpresaComponent,
    EditarEmpresaComponent,
    CadastrarFuncionarioComponent,
    ConsultarFuncionarioComponent,
    EditarFuncionarioComponent,
    CadastrarTurmasComponent,
    EditarTurmasComponent,
    CadastrarInstrutorComponent,
    ConsultarInstrutorComponent,
    EditarInstrutorComponent,
    CadastrarEspecializacaoComponent,
    ConsultarEspecializacaoComponent,
    EditarEspecializacaoComponent,
    ConsultarEnderecoComponent,
    CadastrarEnderecoComponent,
    EditarEnderecoComponent,
    NavbarComponent,
    ListadepresencaComponent,
    ConsultarCertificadoAlunosComponent,
    GerarAutorizacaoComponent,
    CadastrarUnidadeComponent,
    ConsultarUnidadeComponent,
    EditarUnidadeComponent,
    CadastrarFuncaoComponent,
    ConsultarFuncaoComponent,
    EditarFuncaoComponent,
    CriarChamadoComponent,
    EditarChamadoComponent,
    ConsultarChamadoComponent,
    ConsultarTurmasAdmComponent,
    CadastrarContratoComponent,
    ConsultarContratoComponent,
    EditarContratoComponent,
    CadastrarPedidoDeComprasComponent,
    ConsultarPedidoDeComprasComponent,
    EditarPedidoDeComprasComponent,
    ConsultarContatosComponent,
    ConsultarCursosComponent,
    CadastrarCursoComponent,
    EditarCursoComponent,
    CriarProficienciaComponent,
    EditarProficienciaComponent,
    ConsultarProficienciaComponent,
    ConsultarTurmasComponent,
    CadastrarPedidosDeComprasComponent,
    EditarPedidosDeComprasComponent,
    ConsultarPedidosDeComprasComponent,
    CadastrarFaturamentoPjComponent,
    EditarFaturamentoPjComponent,
    ConsultarFaturamentoPjComponent,
    CadastrarFaturamentoPfComponent,
    EditarFaturamentoPfComponent,
    ConsultarFaturamentoPfComponent,
    CadastrarPessoaFisicaComponent,
    EditarPessoaFisicaComponent,
    ConsultarPessoaFisicaComponent,
    CriarMatriculasFaturamentoPfComponent,
    ConsultarMatriculasFaturamentoPfComponent,
    CriarMatriculasFaturamentoPjComponent,
    ConsultarMatriculasFaturamentoPjComponent,
    CriarMatriculasPedidosComponent,
    ConsultarMatriculasPedidosComponent,
    GerarAutorizacaoPessoafisicaComponent,
    GerarCertificadoPessoafisicaComponent,
    GerarListaDePresencaPessoafisicaComponent,
    MatriculasPessoaFisicaGerarDocumentosComponent,
    MatriculasPessoaJuridicaGerarDocumentosComponent,
    ListasPessoaFisicaPrimeiroDiaComponent,
    ListasPessoaFisicaSegundoDiaComponent,
    ListasPessoaFisicaTerceiroDiaComponent,
    ListasPessoaFisicaQuartoDiaComponent,
    ListasPessoaJuridicaPrimeiroDiaComponent,
    ListasPessoaJuridicaSegundoDiaComponent,
    ListasPessoaJuridicaTerceiroDiaComponent,
    ListasPessoaJuridicaQuartoDiaComponent,
    ListasPessoaJuridicaQuintoDiaComponent,
    ListasPessoaFisicaQuintoDiaComponent,
    GerarRelatorioPessoaFisicaComponent,
    GerarRelatorioPessoaJuridicaComponent,
    GerarRelatorioPedidosDeComprasComponent,
    PerfilEmpresaComponent,
    PerfilAlunoComponent,
    PerfilMasterComponent,
    ConsultarMatriculasEmpresaComponent,
    ConsultarMatriculasAlunoComponent,
    GerarCertificadoPerfilEmpresaComponent,
    GerarAutorizacaoPerfilEmpresaComponent,
    ListaDePresencaPrimeiroDiaComponent,
    ListaDePresencaSegundoDiaComponent,
    ListaDePresencaTerceiroDiaComponent,
    ListaDePresencaQuartoDiaComponent,
    ListaDePresencaQuintoDiaComponent,
    GerarCertificadoPerfilAlunoComponent,
    GerarAutorizacaoPerfilAlunoComponent,
    ListasAlunoParticularPrimeiroDiaComponent,
    ListasAlunoParticularSegundoDiaComponent,
    ListasAlunoParticularTerceiroDiaComponent,
    ListasAlunoParticularQuartoDiaComponent,
    ListasAlunoParticularQuintoDiaComponent,
    EditarMatriculaComponent,
    CriarCobrancaEmpresaFaturamentoComponent,
    CriarCobrancaEmpresaPedidosComponent,
    CriarCobrancaPessoaFisicaFaturamentoComponent,
    ConsultarTurmasPerfilEmpresaComponent,
    ConsultarInstrutorPerfilEmpresaComponent,
    ConsultarTurmasPerfilAlunoComponent,
    ConsultarInstrutorPerfilAlunoComponent,
    ConsultarTurmasPorUnidadesComponent,
    ConsultarEmpresasComponent,
    CadastrarFuncionarioPerfilempresaComponent,
    EditarFuncionarioPerfilempresaComponent,
    CadastrarFuncaoPerfilempresaComponent,
    ConsultarFuncaoPerfilempresaComponent,
     TurmasCriarMatriculaPerfilEmpresaComponent,
     ConsultarFaturamentoPerfilEmpresaComponent,
     GerarRelatorioFaturamentoPerfilEmpresaComponent,
     PedidosDeComprasPerfilEmpresaComponent,
     GerarRelatoriosPedidosDeComprasPerfilEmpresaComponent,
     FazerMatriculasPedidosDeComprasPerfilEmpresaComponent,
     GerarAcessoClienteEmpresaComponent,
     GerarAcessoClientePessoafisicaComponent,
     ConsultarDadosAlunoParticularComponent,
     ConsultarFaturamentoAlunoComponent,
     RelatorioFaturamentoAlunoComponent,
     CriarMatriculasAlunoParticularComponent,
     EditarMatriculasAlunoParticularComponent,
     GerarCertificadoSemSerAssinadoComponent,
     ConsultarCursosEmpresaComponent,
     ConsultarCursosAlunoComponent,
     GerarCertificadoSemAssinarPessoaFisicaComponent,
     CriarEmpresaDocComponent,
     ConsultarEmpresadocComponent,
     EditarEmpresadocComponent,
     EditarUnidadedocComponent,
     ConsultarUnidadedocComponent,
     CriarUnidadedocComponent,
     CriarFuncaodocComponent,
     EditarFuncaodocComponent,
     ConsultarFuncaodocComponent,
     CriarRiscosComponent,
     EditarRiscosComponent,
     ConsultarRiscosComponent,
     CriarPerigoComponent,
     EditarPerigoComponent,
     ConsultarPerigoComponent,
     EditarCursoParaFuncoesComponent,
     ConsultarCursoParaFuncoesComponent,
     CriarCursoParaFuncoesComponent,
     CriarEpiComponent,
     EditarEpiComponent,
     ConsultarEpiComponent,
     CriarExamesGeralComponent,
     EditarExamesGeralComponent,
     ConsultarExamesGeralComponent,
     CriarMaquinasComponent,
     EditarMaquinasComponent,
     ConsultarMaquinasComponent,
     CriarDanosComponent,
     EditarDanosComponent,
     ConsultarDanosComponent,
     CriarProbabilidadeDeOcorrenciaComponent,
     EditarProbabilidadeDeOcorrenciaComponent,
     ConsultarProbabilidadeDeOcorrenciaComponent,
     CriarNivelSeveridadeComponent,
     EditarNivelSeveridadeComponent,
     ConsultarNivelSeveridadeComponent,
     CriarPotencialSeveridadeComponent,
     EditarPotencialSeveridadeComponent,
     ConsultarPotencialSeveridadeComponent,
     CriarMedidasDeControleComponent,
     EditarMedidasDeControleComponent,
     ConsultarMedidasDeControleComponent,
     CriarDanosRiscosComponent,
     ConsultarDanosRiscosComponent,
     CriarProbabilidadeDeOcorrenciaRiscosComponent,
     ConsultarProbabilidadeDeOcorrenciaRiscosComponent,
     ConsultarNivelDeSeveridadeRiscosComponent,
     CriarNivelDeSeveridadeRiscosComponent,
     CriarPotencialDeSeveridadeRiscosComponent,
     ConsultarPotencialDeSeveridadeRiscosComponent,
     CriarMedidasDeControleRiscosComponent,
     ConsultarMedidasDeControleRiscosComponent,
     CriarExamesFuncaoDocComponent,
     EditarExamesFuncaoDocComponent,
     ConsultarExamesFuncaoDocComponent,
     CriarAvaliacaoFuncaodocComponent,
     EditarAvaliacaoFuncaodocComponent,
     ConsultarAvaliacaoFuncaodocComponent,
     CriarSetorComponent,
     EditarSetorComponent,
     ConsultarSetorComponent,
     CriarCenarioComponent,
     EditarCenarioComponent,
     ConsultarCenarioComponent,
     CriarEtapasComponent,
     EditarEtapasComponent,
     ConsultarEtapasComponent,
     CriarFuncaoEspecificaUnidadedocComponent,
     EditarFuncaoEspecificaUnidadedocComponent,
     ConsultarFuncaoEspecificaUnidadedocComponent,
     CriarPerigoFuncaoEspecificaComponent,
     ConsultarPerigoFuncaoEspecificaComponent,
     CriarRiscosFuncaoEspecificaComponent,
     ConsultarRiscosFuncaoEspecificaComponent,
     ConsultarEpiFuncaoEspecificaComponent,
     CriarEpiFuncaoEspecificaComponent,
     CriarCursoDeNrsFuncoesEspecificaComponent,
     ConsultarCursoDeNrsFuncoesEspecificaComponent,
     CriarExamesFuncaoEspecificaComponent,
     ConsultarExamesFuncaoEspecificaComponent,
     CriarAvaliacaoFuncaoEspecificaComponent,
     ConsultarAvaliacaoFuncaoEspecificaComponent,
     CriarCnaeComponent,
     EditarCnaeComponent,
     ConsultarCnaeComponent,
     CriarPosturaComponent,
     EditarPosturaComponent,
     ConsultarPosturaComponent,
     CriarAnaliseDePosturaComponent,
     EditarAnaliseDePosturaComponent,
     ConsultarAnaliseDePosturaComponent,
     CriarRelatoriosComponent,
     EditarRelatoriosComponent,
     ConsultarRelatoriosComponent,
     CriarDocumentosComponent,
     EditarDocumentosComponent,
     ConsultarDocumentosComponent,
     CriarDocumentosFuncionariosComponent,
     CriarTodosEnderecosComponent,
     EditarTodosEnderecosComponent,
     GerarOrdemDeServicoComponent,
     GerarFichaDeEpiComponent,
     FilterPipe,
     GerarPgrFuncaodocComponent,
     ConsultarDocumentosPorUnidadesComponent,
     GerarPcmsoComponent,
     GerarLtcatComponent,
     CriarDocumentosCenariosComponent,
     ConsultarDocumentosCenariosComponent,
     GerarAprComponent,
     GerarPermissaoDeTrabalhoComponent,
     GerarPermissaoDeTrabalhoAlturaComponent,
     GerarPetComponent,
     CriarDocumentosFreeCenarioComponent,
     EditarDocumentosFreeCenarioComponent,
     ConsultarDocumentosFreeCenarioComponent,
     GerarAprFreeComponent,
     GerarPtFreeComponent,
     GerarPtaFreeComponent,
     GerarPetFreeComponent,
     CriarEtapasDocumentosFreeComponent,
     ConsultarEtapasDocumentosFreeComponent,
     CriarDocumentosFreeFuncionarioComponent,
     EditarDocumentosFreeFuncionarioComponent,
     ConsultarDocumentosFreeFuncionarioComponent,
     GerarFichaDeEpiFreeComponent,
     GerarOrdemDeServicoFreeComponent,
     ConsultarUnidadesEmpresasComponent,
     CadastrarEmpresaClienteComponent,
     CriarContaClienteEmpresaComponent,
     EsqueciMinhaSenhaClienteEmpresaComponent,
     EditarEmpresaClienteComponent,
     EditarFuncionarioEmpresaComponent,
     ConsultarFuncionarioPerfilEmpresaComponent,
     ConsultarFuncaoDasUnidadesComponent,
     GerarLaudoErgonomicoComponent,
     PcaComponent,
     PcrComponent,
     EditarChamadosClientesComponent,
     ConsultarChamadosClientesComponent,
     CriarChamadosClientesComponent,
     ConsultarSuporteAoClienteComponent,
     RespostaSuporteAoClienteComponent,

  ],
  imports: [
    NgSelectModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    NgxSearchPipeModule,
    CommonModule,
    DataTablesModule

  ],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [
    NgSelectConfig,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }




