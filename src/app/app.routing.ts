import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PasswordAdminComponent } from "./modulo-1-admin/usuario-admin/password-admin/password-admin.component";
import { LoginAdminComponent } from "./modulo-1-admin/usuario-admin/login-admin/login-admin.component";
import { RegisterAdminComponent } from "./modulo-1-admin/usuario-admin/register-admin/register-admin.component";
import { DashboardComponent } from "./modulo-1-admin/dashboard/dashboard.component";
import { CadastrarEmpresaComponent } from "./modulo-1-admin/empresa/cadastrar-empresa/cadastrar-empresa.component";
import { CadastrarFuncionarioComponent } from "./modulo-1-admin/empresa/funcionario/cadastrar-funcionario/cadastrar-funcionario.component";
import { CadastrarTurmasComponent } from "./modulo-1-admin/turmas/cadastrar-turmas/cadastrar-turmas.component";
import { CadastrarInstrutorComponent } from "./modulo-1-admin/instrutor/cadastrar-instrutor/cadastrar-instrutor.component";
import { CadastrarEspecializacaoComponent } from "./modulo-1-admin/instrutor/especializacao/cadastrar-especializacao/cadastrar-especializacao.component";
import { CadastrarEnderecoComponent } from "./modulo-1-admin/endereco/cadastrar-endereco/cadastrar-endereco.component";
import { ConsultarEmpresaComponent } from "./modulo-1-admin/empresa/consultar-empresa/consultar-empresa.component";
import { ConsultarFuncionarioComponent } from "./modulo-1-admin/empresa/funcionario/consultar-funcionario/consultar-funcionario.component";
import { ConsultarInstrutorComponent } from "./modulo-1-admin/instrutor/consultar-instrutor/consultar-instrutor.component";
import { ConsultarEspecializacaoComponent } from "./modulo-1-admin/instrutor/especializacao/consultar-especializacao/consultar-especializacao.component";
import { ConsultarEnderecoComponent } from "./modulo-1-admin/endereco/consultar-endereco/consultar-endereco.component";
import { EditarEmpresaComponent } from "./modulo-1-admin/empresa/editar-empresa/editar-empresa.component";
import { EditarFuncionarioComponent } from "./modulo-1-admin/empresa/funcionario/editar-funcionario/editar-funcionario.component";
import { EditarTurmasComponent } from "./modulo-1-admin/turmas/editar-turmas/editar-turmas.component";
import { EditarInstrutorComponent } from "./modulo-1-admin/instrutor/editar-instrutor/editar-instrutor.component";
import { EditarEspecializacaoComponent } from "./modulo-1-admin/instrutor/especializacao/editar-especializacao/editar-especializacao.component";
import { EditarEnderecoComponent } from "./modulo-1-admin/endereco/editar-endereco/editar-endereco.component";
import { ListadepresencaComponent } from "./modulo-1-admin/turmas/listadepresenca/listadepresenca.component";
import { ConsultarCertificadoAlunosComponent } from "./modulo-1-admin/certificado/consultar-certificado-alunos/consultar-certificado-alunos.component";
import { CadastrarUnidadeComponent } from "./modulo-1-admin/turmas/unidade/cadastrar-unidade/cadastrar-unidade.component";
import { ConsultarUnidadeComponent } from "./modulo-1-admin/turmas/unidade/consultar-unidade/consultar-unidade.component";
import { CadastrarFuncaoComponent } from "./modulo-1-admin/empresa/funcionario/funcao/cadastrar-funcao/cadastrar-funcao.component";
import { ConsultarFuncaoComponent } from "./modulo-1-admin/empresa/funcionario/funcao/consultar-funcao/consultar-funcao.component";
import { CriarChamadoComponent } from "./modulo-1-admin/comercial/chamados/criar-chamado/criar-chamado.component";
import { EditarChamadoComponent } from "./modulo-1-admin/comercial/chamados/editar-chamado/editar-chamado.component";
import { ConsultarChamadoComponent } from "./modulo-1-admin/comercial/chamados/consultar-chamado/consultar-chamado.component";
import { ConsultarTurmasAdmComponent } from "./modulo-1-admin/turmas/adm/consultar-turmas-adm/consultar-turmas-adm.component";
import { CadastrarContratoComponent } from "./modulo-1-admin/empresa/contrato/cadastrar-contrato/cadastrar-contrato.component";
import { ConsultarContratoComponent } from "./modulo-1-admin/empresa/contrato/consultar-contrato/consultar-contrato.component";
import { CadastrarPedidoDeComprasComponent } from "./modulo-1-admin/empresa/contrato/pedido-de-compras/cadastrar-pedido-de-compras/cadastrar-pedido-de-compras.component";
import { EditarPedidoDeComprasComponent } from "./modulo-1-admin/empresa/contrato/pedido-de-compras/editar-pedido-de-compras/editar-pedido-de-compras.component";
import { ConsultarPedidoDeComprasComponent } from "./modulo-1-admin/empresa/contrato/pedido-de-compras/consultar-pedido-de-compras/consultar-pedido-de-compras.component";
import { EditarUnidadeComponent } from "./modulo-1-admin/turmas/unidade/editar-unidade/editar-unidade.component";
import { EditarFuncaoComponent } from "./modulo-1-admin/empresa/funcionario/funcao/editar-funcao/editar-funcao.component";
import { ConsultarContatosComponent } from "./modulo-1-admin/empresa/consultar-contatos/consultar-contatos.component";
import { ConsultarCursosComponent } from "./modulo-1-admin/turmas/cursos/consultar-cursos/consultar-cursos.component";
import { CadastrarCursoComponent } from "./modulo-1-admin/turmas/cursos/cadastrar-curso/cadastrar-curso.component";
import { EditarCursoComponent } from "./modulo-1-admin/turmas/cursos/editar-curso/editar-curso.component";
import { ConsultarProficienciaComponent } from "./modulo-1-admin/instrutor/proficiencia/consultar-proficiencia/consultar-proficiencia.component";
import { CriarProficienciaComponent } from "./modulo-1-admin/instrutor/proficiencia/criar-proficiencia/criar-proficiencia.component";
import { EditarProficienciaComponent } from "./modulo-1-admin/instrutor/proficiencia/editar-proficiencia/editar-proficiencia.component";
import { ConsultarTurmasComponent } from "./modulo-1-admin/turmas/consultar-turmas/consultar-turmas.component";
import { ConsultarPedidosDeComprasComponent } from "./modulo-1-admin/financeiro/pedidos-de-compras/consultar-pedidos-de-compras/consultar-pedidos-de-compras.component";
import { CadastrarPedidosDeComprasComponent } from "./modulo-1-admin/financeiro/pedidos-de-compras/cadastrar-pedidos-de-compras/cadastrar-pedidos-de-compras.component";
import { EditarPedidosDeComprasComponent } from "./modulo-1-admin/financeiro/pedidos-de-compras/editar-pedidos-de-compras/editar-pedidos-de-compras.component";
import { CadastrarFaturamentoPfComponent } from "./modulo-1-admin/financeiro/faturamento-pf/cadastrar-faturamento-pf/cadastrar-faturamento-pf.component";
import { EditarFaturamentoPfComponent } from "./modulo-1-admin/financeiro/faturamento-pf/editar-faturamento-pf/editar-faturamento-pf.component";
import { ConsultarFaturamentoPfComponent } from "./modulo-1-admin/financeiro/faturamento-pf/consultar-faturamento-pf/consultar-faturamento-pf.component";
import { ConsultarFaturamentoPjComponent } from "./modulo-1-admin/financeiro/faturamento-pj/consultar-faturamento-pj/consultar-faturamento-pj.component";
import { CadastrarFaturamentoPjComponent } from "./modulo-1-admin/financeiro/faturamento-pj/cadastrar-faturamento-pj/cadastrar-faturamento-pj.component";
import { EditarFaturamentoPjComponent } from "./modulo-1-admin/financeiro/faturamento-pj/editar-faturamento-pj/editar-faturamento-pj.component";
import { CadastrarPessoaFisicaComponent } from "./modulo-1-admin/pessoa-fisica/cadastrar-pessoa-fisica/cadastrar-pessoa-fisica.component";
import { EditarPessoaFisicaComponent } from "./modulo-1-admin/pessoa-fisica/editar-pessoa-fisica/editar-pessoa-fisica.component";
import { ConsultarPessoaFisicaComponent } from "./modulo-1-admin/pessoa-fisica/consultar-pessoa-fisica/consultar-pessoa-fisica.component";
import { CriarMatriculasFaturamentoPfComponent } from "./modulo-1-admin/turmas/matricula/faturamento-pf/criar-matriculas-faturamento-pf/criar-matriculas-faturamento-pf.component";
import { ConsultarMatriculasFaturamentoPfComponent } from "./modulo-1-admin/turmas/matricula/faturamento-pf/consultar-matriculas-faturamento-pf/consultar-matriculas-faturamento-pf.component";
import { ConsultarMatriculasFaturamentoPjComponent } from "./modulo-1-admin/turmas/matricula/faturamento-pj/consultar-matriculas-faturamento-pj/consultar-matriculas-faturamento-pj.component";
import { CriarMatriculasPedidosComponent } from "./modulo-1-admin/turmas/matricula/pedidos/criar-matriculas-pedidos/criar-matriculas-pedidos.component";
import { ConsultarMatriculasPedidosComponent } from "./modulo-1-admin/turmas/matricula/pedidos/consultar-matriculas-pedidos/consultar-matriculas-pedidos.component";
import { CriarMatriculasFaturamentoPjComponent } from "./modulo-1-admin/turmas/matricula/faturamento-pj/criar-matriculas-faturamento-pj/criar-matriculas-faturamento-pj.component";
import { GerarAutorizacaoComponent } from "./modulo-1-admin/certificado/autorizacao/gerar-autorizacao/gerar-autorizacao.component";
import { MatriculasPessoaFisicaGerarDocumentosComponent } from "./modulo-1-admin/certificado/matriculas/matriculas-pessoa-fisica-gerar-documentos/matriculas-pessoa-fisica-gerar-documentos.component";
import { MatriculasPessoaJuridicaGerarDocumentosComponent } from "./modulo-1-admin/certificado/matriculas/matriculas-pessoa-juridica-gerar-documentos/matriculas-pessoa-juridica-gerar-documentos.component";
import { GerarCertificadoPessoafisicaComponent } from "./modulo-1-admin/certificado/pessoafisica/gerar-certificado-pessoafisica/gerar-certificado-pessoafisica.component";
import { GerarAutorizacaoPessoafisicaComponent } from "./modulo-1-admin/certificado/pessoafisica/gerar-autorizacao-pessoafisica/gerar-autorizacao-pessoafisica.component";
import { ListasPessoaFisicaPrimeiroDiaComponent } from "./modulo-1-admin/certificado/listas-pessoa-fisica/listas-pessoa-fisica-primeiro-dia/listas-pessoa-fisica-primeiro-dia.component";
import { ListasPessoaFisicaSegundoDiaComponent } from "./modulo-1-admin/certificado/listas-pessoa-fisica/listas-pessoa-fisica-segundo-dia/listas-pessoa-fisica-segundo-dia.component";
import { ListasPessoaFisicaTerceiroDiaComponent } from "./modulo-1-admin/certificado/listas-pessoa-fisica/listas-pessoa-fisica-terceiro-dia/listas-pessoa-fisica-terceiro-dia.component";
import { ListasPessoaFisicaQuartoDiaComponent } from "./modulo-1-admin/certificado/listas-pessoa-fisica/listas-pessoa-fisica-quarto-dia/listas-pessoa-fisica-quarto-dia.component";
import { ListasPessoaFisicaQuintoDiaComponent } from "./modulo-1-admin/certificado/listas-pessoa-fisica/listas-pessoa-fisica-quinto-dia/listas-pessoa-fisica-quinto-dia.component";
import { ListasPessoaJuridicaPrimeiroDiaComponent } from "./modulo-1-admin/certificado/listas-pessoa-juridica/listas-pessoa-juridica-primeiro-dia/listas-pessoa-juridica-primeiro-dia.component";
import { ListasPessoaJuridicaSegundoDiaComponent } from "./modulo-1-admin/certificado/listas-pessoa-juridica/listas-pessoa-juridica-segundo-dia/listas-pessoa-juridica-segundo-dia.component";
import { ListasPessoaJuridicaTerceiroDiaComponent } from "./modulo-1-admin/certificado/listas-pessoa-juridica/listas-pessoa-juridica-terceiro-dia/listas-pessoa-juridica-terceiro-dia.component";
import { ListasPessoaJuridicaQuartoDiaComponent } from "./modulo-1-admin/certificado/listas-pessoa-juridica/listas-pessoa-juridica-quarto-dia/listas-pessoa-juridica-quarto-dia.component";
import { ListasPessoaJuridicaQuintoDiaComponent } from "./modulo-1-admin/certificado/listas-pessoa-juridica/listas-pessoa-juridica-quinto-dia/listas-pessoa-juridica-quinto-dia.component";
import { GerarRelatorioPessoaJuridicaComponent } from "./modulo-1-admin/financeiro/faturamento-pj/gerar-relatorio-pessoa-juridica/gerar-relatorio-pessoa-juridica.component";
import { GerarRelatorioPessoaFisicaComponent } from "./modulo-1-admin/financeiro/faturamento-pf/gerar-relatorio-pessoa-fisica/gerar-relatorio-pessoa-fisica.component";
import { GerarRelatorioPedidosDeComprasComponent } from "./modulo-1-admin/financeiro/pedidos-de-compras/gerar-relatorio-pedidos-de-compras/gerar-relatorio-pedidos-de-compras.component";
import { PerfilEmpresaComponent } from "./perfil/perfil-empresa/perfil-empresa.component";
import { PerfilAlunoComponent } from "./perfil/perfil-aluno/perfil-aluno.component";
import { PerfilMasterComponent } from "./perfil/perfil-master/perfil-master.component";
import { ConsultarMatriculasEmpresaComponent } from "./perfil/perfil-empresa/matriculas-empresa/consultar-matriculas-empresa/consultar-matriculas-empresa.component";
import { ConsultarMatriculasAlunoComponent } from "./perfil/perfil-aluno/matriculas-aluno/consultar-matriculas-aluno/consultar-matriculas-aluno.component";
import { AuthGuardsMaster } from "./guards/auth.guards.master";
import { AuthGuardsEmpresa } from "./guards/auth.guards.empresa";
import { AuthGuardsAluno } from "./guards/auth.guards.aluno";
import { GerarCertificadoPerfilEmpresaComponent } from "./perfil/perfil-empresa/matriculas-empresa/gerar-certificado-perfil-empresa/gerar-certificado-perfil-empresa.component";
import { GerarAutorizacaoPerfilEmpresaComponent } from "./perfil/perfil-empresa/matriculas-empresa/gerar-autorizacao-perfil-empresa/gerar-autorizacao-perfil-empresa.component";
import { ListaDePresencaPrimeiroDiaComponent } from "./perfil/perfil-empresa/matriculas-empresa/listas-de-presenca/lista-de-presenca-primeiro-dia/lista-de-presenca-primeiro-dia.component";
import { ListaDePresencaTerceiroDiaComponent } from "./perfil/perfil-empresa/matriculas-empresa/listas-de-presenca/lista-de-presenca-terceiro-dia/lista-de-presenca-terceiro-dia.component";
import { ListaDePresencaQuartoDiaComponent } from "./perfil/perfil-empresa/matriculas-empresa/listas-de-presenca/lista-de-presenca-quarto-dia/lista-de-presenca-quarto-dia.component";
import { GerarCertificadoPerfilAlunoComponent } from "./perfil/perfil-aluno/matriculas-aluno/gerar-certificado-perfil-aluno/gerar-certificado-perfil-aluno.component";
import { ListaDePresencaSegundoDiaComponent } from "./perfil/perfil-empresa/matriculas-empresa/listas-de-presenca/lista-de-presenca-segundo-dia/lista-de-presenca-segundo-dia.component";
import { ListaDePresencaQuintoDiaComponent } from "./perfil/perfil-empresa/matriculas-empresa/listas-de-presenca/lista-de-presenca-quinto-dia/lista-de-presenca-quinto-dia.component";
import { ListasAlunoParticularPrimeiroDiaComponent } from "./perfil/perfil-aluno/matriculas-aluno/listas/listas-aluno-particular-primeiro-dia/listas-aluno-particular-primeiro-dia.component";
import { ListasAlunoParticularSegundoDiaComponent } from "./perfil/perfil-aluno/matriculas-aluno/listas/listas-aluno-particular-segundo-dia/listas-aluno-particular-segundo-dia.component";
import { ListasAlunoParticularTerceiroDiaComponent } from "./perfil/perfil-aluno/matriculas-aluno/listas/listas-aluno-particular-terceiro-dia/listas-aluno-particular-terceiro-dia.component";
import { ListasAlunoParticularQuartoDiaComponent } from "./perfil/perfil-aluno/matriculas-aluno/listas/listas-aluno-particular-quarto-dia/listas-aluno-particular-quarto-dia.component";
import { ListasAlunoParticularQuintoDiaComponent } from "./perfil/perfil-aluno/matriculas-aluno/listas/listas-aluno-particular-quinto-dia/listas-aluno-particular-quinto-dia.component";
import { GerarAutorizacaoPerfilAlunoComponent } from "./perfil/perfil-aluno/matriculas-aluno/gerar-autorizacao-perfil-aluno/gerar-autorizacao-perfil-aluno.component";
import { EditarMatriculaComponent } from "./modulo-1-admin/turmas/matricula/editar-matricula/editar-matricula.component";
import { CriarCobrancaEmpresaPedidosComponent } from "./modulo-1-admin/financeiro/cobranca/empresa-pedidos/criar-cobranca-empresa-pedidos/criar-cobranca-empresa-pedidos.component";
import { CriarCobrancaEmpresaFaturamentoComponent } from "./modulo-1-admin/financeiro/cobranca/empresa-faturamento/criar-cobranca-empresa-faturamento/criar-cobranca-empresa-faturamento.component";
import { CriarCobrancaPessoaFisicaFaturamentoComponent } from "./modulo-1-admin/financeiro/cobranca/pessoa-fisica-faturamento/criar-cobranca-pessoa-fisica-faturamento/criar-cobranca-pessoa-fisica-faturamento.component";
import { ConsultarTurmasPerfilEmpresaComponent } from "./perfil/perfil-empresa/turmas/consultar-turmas-perfil-empresa/consultar-turmas-perfil-empresa.component";
import { ConsultarInstrutorPerfilEmpresaComponent } from "./perfil/perfil-empresa/instrutor/consultar-instrutor-perfil-empresa/consultar-instrutor-perfil-empresa.component";
import { ConsultarTurmasPerfilAlunoComponent } from "./perfil/perfil-aluno/turmas/consultar-turmas-perfil-aluno/consultar-turmas-perfil-aluno.component";
import { ConsultarInstrutorPerfilAlunoComponent } from "./perfil/perfil-aluno/instrutor/consultar-instrutor-perfil-aluno/consultar-instrutor-perfil-aluno.component";
import { ConsultarTurmasPorUnidadesComponent } from "./modulo-1-admin/turmas/consultar-turmas-por-unidades/consultar-turmas-por-unidades.component";
import { ConsultarEmpresasComponent } from "./perfil/perfil-empresa/empresa-cliente/consultar-empresas/consultar-empresas.component";
import { CadastrarFuncionarioPerfilempresaComponent } from "./perfil/perfil-empresa/funcionariosempresa/cadastrar-funcionario-perfilempresa/cadastrar-funcionario-perfilempresa.component";
import { EditarFuncionarioPerfilempresaComponent } from "./perfil/perfil-empresa/funcionariosempresa/editar-funcionario-perfilempresa/editar-funcionario-perfilempresa.component";
import { CadastrarFuncaoPerfilempresaComponent } from "./perfil/perfil-empresa/funcionariosempresa/cadastrar-funcao-perfilempresa/cadastrar-funcao-perfilempresa.component";
import { ConsultarFuncaoPerfilempresaComponent } from "./perfil/perfil-empresa/funcionariosempresa/consultar-funcao-perfilempresa/consultar-funcao-perfilempresa.component";
import { TurmasCriarMatriculaPerfilEmpresaComponent } from "./perfil/perfil-empresa/turmas-criar-matricula-perfil-empresa/turmas-criar-matricula-perfil-empresa.component";
import { ConsultarFaturamentoPerfilEmpresaComponent } from "./perfil/perfil-empresa/financeiro/consultar-faturamento-perfil-empresa/consultar-faturamento-perfil-empresa.component";
import { GerarRelatorioFaturamentoPerfilEmpresaComponent } from "./perfil/perfil-empresa/financeiro/gerar-relatorio-faturamento-perfil-empresa/gerar-relatorio-faturamento-perfil-empresa.component";
import { PedidosDeComprasPerfilEmpresaComponent } from "./perfil/perfil-empresa/financeiro/pedidos-de-compras-perfil-empresa/pedidos-de-compras-perfil-empresa.component";
import { GerarRelatoriosPedidosDeComprasPerfilEmpresaComponent } from "./perfil/perfil-empresa/financeiro/gerar-relatorios-pedidos-de-compras-perfil-empresa/gerar-relatorios-pedidos-de-compras-perfil-empresa.component";
import { FazerMatriculasPedidosDeComprasPerfilEmpresaComponent } from "./perfil/perfil-empresa/financeiro/fazer-matriculas-pedidos-de-compras-perfil-empresa/fazer-matriculas-pedidos-de-compras-perfil-empresa.component";
import { GerarAcessoClienteEmpresaComponent } from "./modulo-1-admin/empresa/gerar-acesso-cliente-empresa/gerar-acesso-cliente-empresa.component";
import { GerarAcessoClientePessoafisicaComponent } from "./modulo-1-admin/pessoa-fisica/gerar-acesso-cliente-pessoafisica/gerar-acesso-cliente-pessoafisica.component";
import { ConsultarDadosAlunoParticularComponent } from "./perfil/perfil-aluno/dados-aluno/consultar-dados-aluno-particular/consultar-dados-aluno-particular.component";
import { ConsultarFaturamentoAlunoComponent } from "./perfil/perfil-aluno/dados-aluno/consultar-faturamento-aluno/consultar-faturamento-aluno.component";
import { RelatorioFaturamentoAlunoComponent } from "./perfil/perfil-aluno/dados-aluno/relatorio-faturamento-aluno/relatorio-faturamento-aluno.component";
import { CriarMatriculasAlunoParticularComponent } from "./perfil/perfil-aluno/dados-aluno/criar-matriculas-aluno-particular/criar-matriculas-aluno-particular.component";
import { GerarCertificadoSemSerAssinadoComponent } from "./modulo-1-admin/certificado/gerar-certificado-sem-ser-assinado/gerar-certificado-sem-ser-assinado.component";
import { ConsultarCursosEmpresaComponent } from "./perfil/perfil-empresa/consultar-cursos-empresa/consultar-cursos-empresa.component";
import { ConsultarCursosAlunoComponent } from "./perfil/perfil-aluno/consultar-cursos-aluno/consultar-cursos-aluno.component";
import { GerarCertificadoSemAssinarPessoaFisicaComponent } from "./modulo-1-admin/certificado/gerar-certificado-sem-assinar-pessoa-fisica/gerar-certificado-sem-assinar-pessoa-fisica.component";
import { CriarEmpresaDocComponent } from "./modulo-2-relatorios/empresa-doc/criar-empresa-doc/criar-empresa-doc.component";
import { ConsultarEmpresadocComponent } from "./modulo-2-relatorios/empresa-doc/consultar-empresadoc/consultar-empresadoc.component";
import { EditarEmpresadocComponent } from "./modulo-2-relatorios/empresa-doc/editar-empresadoc/editar-empresadoc.component";
import { CriarUnidadedocComponent } from "./modulo-2-relatorios/unidadedoc/criar-unidadedoc/criar-unidadedoc.component";
import { ConsultarUnidadedocComponent } from "./modulo-2-relatorios/unidadedoc/consultar-unidadedoc/consultar-unidadedoc.component";
import { EditarUnidadedocComponent } from "./modulo-2-relatorios/unidadedoc/editar-unidadedoc/editar-unidadedoc.component";
import { CriarFuncaodocComponent } from "./modulo-2-relatorios/funcao-doc/criar-funcaodoc/criar-funcaodoc.component";
import { ConsultarFuncaodocComponent } from "./modulo-2-relatorios/funcao-doc/consultar-funcaodoc/consultar-funcaodoc.component";
import { EditarFuncaodocComponent } from "./modulo-2-relatorios/funcao-doc/editar-funcaodoc/editar-funcaodoc.component";
import { CriarRiscosComponent } from "./modulo-2-relatorios/riscos/criar-riscos/criar-riscos.component";
import { ConsultarRiscosComponent } from "./modulo-2-relatorios/riscos/consultar-riscos/consultar-riscos.component";
import { EditarRiscosComponent } from "./modulo-2-relatorios/riscos/editar-riscos/editar-riscos.component";
import { ConsultarPerigoComponent } from "./modulo-2-relatorios/perigo/consultar-perigo/consultar-perigo.component";
import { EditarPerigoComponent } from "./modulo-2-relatorios/perigo/editar-perigo/editar-perigo.component";
import { CriarPerigoComponent } from "./modulo-2-relatorios/perigo/criar-perigo/criar-perigo.component";
import { ConsultarCursoParaFuncoesComponent } from "./modulo-2-relatorios/curso-para-funcoes/consultar-curso-para-funcoes/consultar-curso-para-funcoes.component";
import { EditarCursoParaFuncoesComponent } from "./modulo-2-relatorios/curso-para-funcoes/editar-curso-para-funcoes/editar-curso-para-funcoes.component";
import { CriarCursoParaFuncoesComponent } from "./modulo-2-relatorios/curso-para-funcoes/criar-curso-para-funcoes/criar-curso-para-funcoes.component";
import { ConsultarEpiComponent } from "./modulo-2-relatorios/Epi/consultar-epi/consultar-epi.component";
import { CriarEpiComponent } from "./modulo-2-relatorios/Epi/criar-epi/criar-epi.component";
import { EditarEpiComponent } from "./modulo-2-relatorios/Epi/editar-epi/editar-epi.component";
import { EditarExamesGeralComponent } from "./modulo-2-relatorios/Exames/exames-geral/editar-exames-geral/editar-exames-geral.component";
import { ConsultarExamesGeralComponent } from "./modulo-2-relatorios/Exames/exames-geral/consultar-exames-geral/consultar-exames-geral.component";
import { CriarExamesGeralComponent } from "./modulo-2-relatorios/Exames/exames-geral/criar-exames-geral/criar-exames-geral.component";
import { ConsultarMaquinasComponent } from "./modulo-2-relatorios/maquinas/consultar-maquinas/consultar-maquinas.component";
import { EditarMaquinasComponent } from "./modulo-2-relatorios/maquinas/editar-maquinas/editar-maquinas.component";
import { CriarMaquinasComponent } from "./modulo-2-relatorios/maquinas/criar-maquinas/criar-maquinas.component";
import { EditarDanosComponent } from "./modulo-2-relatorios/sms/danos/editar-danos/editar-danos.component";
import { ConsultarDanosComponent } from "./modulo-2-relatorios/sms/danos/consultar-danos/consultar-danos.component";
import { CriarDanosComponent } from "./modulo-2-relatorios/sms/danos/criar-danos/criar-danos.component";
import { CriarProbabilidadeDeOcorrenciaComponent } from "./modulo-2-relatorios/sms/probabilidade-de-ocorrencia/criar-probabilidade-de-ocorrencia/criar-probabilidade-de-ocorrencia.component";
import { EditarProbabilidadeDeOcorrenciaComponent } from "./modulo-2-relatorios/sms/probabilidade-de-ocorrencia/editar-probabilidade-de-ocorrencia/editar-probabilidade-de-ocorrencia.component";
import { ConsultarProbabilidadeDeOcorrenciaComponent } from "./modulo-2-relatorios/sms/probabilidade-de-ocorrencia/consultar-probabilidade-de-ocorrencia/consultar-probabilidade-de-ocorrencia.component";
import { CriarNivelSeveridadeComponent } from "./modulo-2-relatorios/sms/nivel_severidade/criar-nivel-severidade/criar-nivel-severidade.component"; 
import { EditarNivelSeveridadeComponent } from "./modulo-2-relatorios/sms/nivel_severidade/editar-nivel-severidade/editar-nivel-severidade.component";
import { ConsultarNivelSeveridadeComponent } from "./modulo-2-relatorios/sms/nivel_severidade/consultar-nivel-severidade/consultar-nivel-severidade.component";
import { ConsultarPotencialSeveridadeComponent } from "./modulo-2-relatorios/sms/Potencial_Severidade/consultar-potencial-severidade/consultar-potencial-severidade.component";
import { EditarPotencialSeveridadeComponent } from "./modulo-2-relatorios/sms/Potencial_Severidade/editar-potencial-severidade/editar-potencial-severidade.component";
import { CriarPotencialSeveridadeComponent } from "./modulo-2-relatorios/sms/Potencial_Severidade/criar-potencial-severidade/criar-potencial-severidade.component";
import { CriarMedidasDeControleComponent } from "./modulo-2-relatorios/sms/medidas_de_controle/criar-medidas-de-controle/criar-medidas-de-controle.component";
import { EditarMedidasDeControleComponent } from "./modulo-2-relatorios/sms/medidas_de_controle/editar-medidas-de-controle/editar-medidas-de-controle.component";
import { ConsultarMedidasDeControleComponent } from "./modulo-2-relatorios/sms/medidas_de_controle/consultar-medidas-de-controle/consultar-medidas-de-controle.component";
import { CriarDanosRiscosComponent } from "./modulo-2-relatorios/sms-riscos/danos/criar-danos-riscos/criar-danos-riscos.component";
import { ConsultarDanosRiscosComponent } from "./modulo-2-relatorios/sms-riscos/danos/consultar-danos-riscos/consultar-danos-riscos.component";
import { CriarProbabilidadeDeOcorrenciaRiscosComponent } from "./modulo-2-relatorios/sms-riscos/probabilidade-de-ocorrencia/criar-probabilidade-de-ocorrencia-riscos/criar-probabilidade-de-ocorrencia-riscos.component";
import { ConsultarProbabilidadeDeOcorrenciaRiscosComponent } from "./modulo-2-relatorios/sms-riscos/probabilidade-de-ocorrencia/consultar-probabilidade-de-ocorrencia-riscos/consultar-probabilidade-de-ocorrencia-riscos.component";
import { CriarNivelDeSeveridadeRiscosComponent } from "./modulo-2-relatorios/sms-riscos/nivel-de-severidade/criar-nivel-de-severidade-riscos/criar-nivel-de-severidade-riscos.component";
import { ConsultarNivelDeSeveridadeRiscosComponent } from "./modulo-2-relatorios/sms-riscos/nivel-de-severidade/consultar-nivel-de-severidade-riscos/consultar-nivel-de-severidade-riscos.component";
import { CriarPotencialDeSeveridadeRiscosComponent } from "./modulo-2-relatorios/sms-riscos/potencial-de-severidade/criar-potencial-de-severidade-riscos/criar-potencial-de-severidade-riscos.component";
import { ConsultarPotencialDeSeveridadeRiscosComponent } from "./modulo-2-relatorios/sms-riscos/potencial-de-severidade/consultar-potencial-de-severidade-riscos/consultar-potencial-de-severidade-riscos.component";
import { ConsultarMedidasDeControleRiscosComponent } from "./modulo-2-relatorios/sms-riscos/medidas-de-controle/consultar-medidas-de-controle-riscos/consultar-medidas-de-controle-riscos.component";
import { CriarMedidasDeControleRiscosComponent } from "./modulo-2-relatorios/sms-riscos/medidas-de-controle/criar-medidas-de-controle-riscos/criar-medidas-de-controle-riscos.component";
import { CriarExamesFuncaoDocComponent } from "./modulo-2-relatorios/Exames/exames-funcao-doc/criar-exames-funcao-doc/criar-exames-funcao-doc.component";
import { EditarExamesFuncaoDocComponent } from "./modulo-2-relatorios/Exames/exames-funcao-doc/editar-exames-funcao-doc/editar-exames-funcao-doc.component";
import { ConsultarExamesFuncaoDocComponent } from "./modulo-2-relatorios/Exames/exames-funcao-doc/consultar-exames-funcao-doc/consultar-exames-funcao-doc.component";
import { CriarAvaliacaoFuncaodocComponent } from "./modulo-2-relatorios/avaliacoes-ocupacionais/avaliacao-funcao/criar-avaliacao-funcaodoc/criar-avaliacao-funcaodoc.component";
import { EditarAvaliacaoFuncaodocComponent } from "./modulo-2-relatorios/avaliacoes-ocupacionais/avaliacao-funcao/editar-avaliacao-funcaodoc/editar-avaliacao-funcaodoc.component";
import { ConsultarAvaliacaoFuncaodocComponent } from "./modulo-2-relatorios/avaliacoes-ocupacionais/avaliacao-funcao/consultar-avaliacao-funcaodoc/consultar-avaliacao-funcaodoc.component";
import { CriarSetorComponent } from "./modulo-2-relatorios/funcao-especifica/setor/criar-setor/criar-setor.component";
import { EditarSetorComponent } from "./modulo-2-relatorios/funcao-especifica/setor/editar-setor/editar-setor.component";
import { ConsultarSetorComponent } from "./modulo-2-relatorios/funcao-especifica/setor/consultar-setor/consultar-setor.component";
import { CriarCenarioComponent } from "./modulo-2-relatorios/funcao-especifica/setor/cenario/criar-cenario/criar-cenario.component";
import { EditarCenarioComponent } from "./modulo-2-relatorios/funcao-especifica/setor/cenario/editar-cenario/editar-cenario.component";
import { ConsultarCenarioComponent } from "./modulo-2-relatorios/funcao-especifica/setor/cenario/consultar-cenario/consultar-cenario.component";
import { CriarEtapasComponent } from "./modulo-2-relatorios/funcao-especifica/setor/cenario/etapas/criar-etapas/criar-etapas.component";
import { EditarEtapasComponent } from "./modulo-2-relatorios/funcao-especifica/setor/cenario/etapas/editar-etapas/editar-etapas.component";
import { ConsultarEtapasComponent } from "./modulo-2-relatorios/funcao-especifica/setor/cenario/etapas/consultar-etapas/consultar-etapas.component";
import { CriarFuncaoEspecificaUnidadedocComponent } from "./modulo-2-relatorios/funcao-especifica/criar-funcao-especifica-unidadedoc/criar-funcao-especifica-unidadedoc.component";
import { EditarFuncaoEspecificaUnidadedocComponent } from "./modulo-2-relatorios/funcao-especifica/editar-funcao-especifica-unidadedoc/editar-funcao-especifica-unidadedoc.component";
import { ConsultarFuncaoEspecificaUnidadedocComponent } from "./modulo-2-relatorios/funcao-especifica/consultar-funcao-especifica-unidadedoc/consultar-funcao-especifica-unidadedoc.component";
import { CriarPerigoFuncaoEspecificaComponent } from "./modulo-2-relatorios/perigo/perigo-funcao-especifica/criar-perigo-funcao-especifica/criar-perigo-funcao-especifica.component";
import { ConsultarPerigoFuncaoEspecificaComponent } from "./modulo-2-relatorios/perigo/perigo-funcao-especifica/consultar-perigo-funcao-especifica/consultar-perigo-funcao-especifica.component";
import { CriarRiscosFuncaoEspecificaComponent } from "./modulo-2-relatorios/riscos/riscos-funcao-especifica/criar-riscos-funcao-especifica/criar-riscos-funcao-especifica.component";
import { ConsultarRiscosFuncaoEspecificaComponent } from "./modulo-2-relatorios/riscos/riscos-funcao-especifica/consultar-riscos-funcao-especifica/consultar-riscos-funcao-especifica.component";
import { CriarEpiFuncaoEspecificaComponent } from "./modulo-2-relatorios/Epi/epi-funcao-especifica/criar-epi-funcao-especifica/criar-epi-funcao-especifica.component";
import { ConsultarEpiFuncaoEspecificaComponent } from "./modulo-2-relatorios/Epi/epi-funcao-especifica/consultar-epi-funcao-especifica/consultar-epi-funcao-especifica.component";
import { CriarCursoDeNrsFuncoesEspecificaComponent } from "./modulo-2-relatorios/curso-para-funcoes/curso-de-nrs/criar-curso-de-nrs-funcoes-especifica/criar-curso-de-nrs-funcoes-especifica.component";
import { ConsultarCursoDeNrsFuncoesEspecificaComponent } from "./modulo-2-relatorios/curso-para-funcoes/curso-de-nrs/consultar-curso-de-nrs-funcoes-especifica/consultar-curso-de-nrs-funcoes-especifica.component";
import { CriarExamesFuncaoEspecificaComponent } from "./modulo-2-relatorios/Exames/exames-funcao-especifica/criar-exames-funcao-especifica/criar-exames-funcao-especifica.component";
import { ConsultarExamesFuncaoEspecificaComponent } from "./modulo-2-relatorios/Exames/exames-funcao-especifica/consultar-exames-funcao-especifica/consultar-exames-funcao-especifica.component";
import { CriarAvaliacaoFuncaoEspecificaComponent } from "./modulo-2-relatorios/avaliacoes-ocupacionais/avaliacao-funcao-especifica/criar-avaliacao-funcao-especifica/criar-avaliacao-funcao-especifica.component";
import { ConsultarAvaliacaoFuncaoEspecificaComponent } from "./modulo-2-relatorios/avaliacoes-ocupacionais/avaliacao-funcao-especifica/consultar-avaliacao-funcao-especifica/consultar-avaliacao-funcao-especifica.component";
import { CriarCnaeComponent } from "./modulo-2-relatorios/empresa-doc/cnae/criar-cnae/criar-cnae.component";
import { ConsultarCnaeComponent } from "./modulo-2-relatorios/empresa-doc/cnae/consultar-cnae/consultar-cnae.component";
import { EditarCnaeComponent } from "./modulo-2-relatorios/empresa-doc/cnae/editar-cnae/editar-cnae.component";
import { CriarPosturaComponent } from "./modulo-2-relatorios/funcao-especifica/setor/postura/criar-postura/criar-postura.component";
import { EditarPosturaComponent } from "./modulo-2-relatorios/funcao-especifica/setor/postura/editar-postura/editar-postura.component";
import { ConsultarPosturaComponent } from "./modulo-2-relatorios/funcao-especifica/setor/postura/consultar-postura/consultar-postura.component";
import { CriarAnaliseDePosturaComponent } from "./modulo-2-relatorios/funcao-especifica/setor/postura/analise-de-postura/criar-analise-de-postura/criar-analise-de-postura.component";
import { EditarAnaliseDePosturaComponent } from "./modulo-2-relatorios/funcao-especifica/setor/postura/analise-de-postura/editar-analise-de-postura/editar-analise-de-postura.component";
import { ConsultarAnaliseDePosturaComponent } from "./modulo-2-relatorios/funcao-especifica/setor/postura/analise-de-postura/consultar-analise-de-postura/consultar-analise-de-postura.component";
import { CriarRelatoriosComponent } from "./modulo-2-relatorios/relatorios/criar-relatorios/criar-relatorios.component";
import { EditarRelatoriosComponent } from "./modulo-2-relatorios/relatorios/editar-relatorios/editar-relatorios.component";
import { ConsultarRelatoriosComponent } from "./modulo-2-relatorios/relatorios/consultar-relatorios/consultar-relatorios.component";
import { CriarDocumentosComponent } from "./modulo-2-relatorios/relatorios/documentos/criar-documentos/criar-documentos.component";
import { ConsultarDocumentosComponent } from "./modulo-2-relatorios/relatorios/documentos/consultar-documentos/consultar-documentos.component";
import { EditarDocumentosComponent } from "./modulo-2-relatorios/relatorios/documentos/editar-documentos/editar-documentos.component";
import { CriarDocumentosFuncionariosComponent } from "./modulo-2-relatorios/relatorios/documentos/criar-documentos-funcionarios/criar-documentos-funcionarios.component";
import { CriarTodosEnderecosComponent } from "./modulo-1-admin/endereco/todos-enderecos/criar-todos-enderecos/criar-todos-enderecos.component";
import { EditarTodosEnderecosComponent } from "./modulo-1-admin/endereco/todos-enderecos/editar-todos-enderecos/editar-todos-enderecos.component";
import { GerarOrdemDeServicoComponent } from "./modulo-3-documentos/documentos-colaborador/gerar-ordem-de-servico/gerar-ordem-de-servico.component";
import { GerarFichaDeEpiComponent } from "./modulo-3-documentos/documentos-colaborador/gerar-ficha-de-epi/gerar-ficha-de-epi.component";
import { ConsultarDocumentosPorUnidadesComponent } from "./modulo-2-relatorios/relatorios/documentos/documentos-por-unidades/consultar-documentos-por-unidades/consultar-documentos-por-unidades.component";
import { GerarPgrFuncaodocComponent } from "./modulo-3-documentos/documentos-unidades/PGR/gerar-pgr-funcaodoc/gerar-pgr-funcaodoc.component";
import { GerarPcmsoComponent } from "./modulo-3-documentos/documentos-unidades/pcmso/gerar-pcmso/gerar-pcmso.component";
import { GerarLtcatComponent } from "./modulo-3-documentos/documentos-unidades/ltcat/gerar-ltcat/gerar-ltcat.component";
import { CriarDocumentosCenariosComponent } from "./modulo-2-relatorios/relatorios/documentos/criar-documentos-cenarios/criar-documentos-cenarios.component";
import { ConsultarDocumentosCenariosComponent } from "./modulo-2-relatorios/relatorios/documentos/consultar-documentos-cenarios/consultar-documentos-cenarios.component";
import { GerarAprComponent } from "./modulo-3-documentos/documentos-cenarios/gerar-apr/gerar-apr.component";
import { GerarPermissaoDeTrabalhoAlturaComponent } from "./modulo-3-documentos/documentos-cenarios/gerar-permissao-de-trabalho-altura/gerar-permissao-de-trabalho-altura.component";
import { GerarPermissaoDeTrabalhoComponent } from "./modulo-3-documentos/documentos-cenarios/gerar-permissao-de-trabalho/gerar-permissao-de-trabalho.component";
import { GerarPetComponent } from "./modulo-3-documentos/documentos-cenarios/gerar-pet/gerar-pet.component";
import { CriarDocumentosFreeCenarioComponent } from "./modulo-3-documentos/documentos-free-cenario/criar-documentos-free-cenario/criar-documentos-free-cenario.component";
import { EditarDocumentosFreeCenarioComponent } from "./modulo-3-documentos/documentos-free-cenario/editar-documentos-free-cenario/editar-documentos-free-cenario.component";
import { ConsultarDocumentosFreeCenarioComponent } from "./modulo-3-documentos/documentos-free-cenario/consultar-documentos-free-cenario/consultar-documentos-free-cenario.component";
import { GerarAprFreeComponent } from "./modulo-3-documentos/documentos-free-cenario/gerar-documentos-free-cenario/gerar-apr-free/gerar-apr-free.component";
import { GerarPtFreeComponent } from "./modulo-3-documentos/documentos-free-cenario/gerar-documentos-free-cenario/gerar-pt-free/gerar-pt-free.component";
import { GerarPtaFreeComponent } from "./modulo-3-documentos/documentos-free-cenario/gerar-documentos-free-cenario/gerar-pta-free/gerar-pta-free.component";
import { GerarPetFreeComponent } from "./modulo-3-documentos/documentos-free-cenario/gerar-documentos-free-cenario/gerar-pet-free/gerar-pet-free.component";
import { CriarEtapasDocumentosFreeComponent } from "./modulo-2-relatorios/funcao-especifica/setor/cenario/etapas/criar-etapas-documentos-free/criar-etapas-documentos-free.component";
import { ConsultarEtapasDocumentosFreeComponent } from "./modulo-2-relatorios/funcao-especifica/setor/cenario/etapas/consultar-etapas-documentos-free/consultar-etapas-documentos-free.component";
import { CriarDocumentosFreeFuncionarioComponent } from "./modulo-3-documentos/documentos-free-funcionario/criar-documentos-free-funcionario/criar-documentos-free-funcionario.component";
import { ConsultarDocumentosFreeFuncionarioComponent } from "./modulo-3-documentos/documentos-free-funcionario/consultar-documentos-free-funcionario/consultar-documentos-free-funcionario.component";
import { EditarDocumentosFreeFuncionarioComponent } from "./modulo-3-documentos/documentos-free-funcionario/editar-documentos-free-funcionario/editar-documentos-free-funcionario.component";
import { GerarOrdemDeServicoFreeComponent } from "./modulo-3-documentos/documentos-free-funcionario/gerar-ordem-de-servico-free/gerar-ordem-de-servico-free.component";
import { GerarFichaDeEpiFreeComponent } from "./modulo-3-documentos/documentos-free-funcionario/gerar-ficha-de-epi-free/gerar-ficha-de-epi-free.component";
import { ConsultarUnidadesEmpresasComponent } from "./modulo-1-admin/empresa/minhas-unidades/consultar-unidades-empresas/consultar-unidades-empresas.component";
import { CadastrarEmpresaClienteComponent } from "./modulo-1-admin/empresa/cadastrar-empresa-cliente/cadastrar-empresa-cliente.component";
import { CriarContaClienteEmpresaComponent } from "./modulo-1-admin/usuario-admin/criar-conta-cliente-empresa/criar-conta-cliente-empresa.component";
import { EsqueciMinhaSenhaClienteEmpresaComponent } from "./modulo-1-admin/usuario-admin/esqueci-minha-senha-cliente-empresa/esqueci-minha-senha-cliente-empresa.component";
import { EditarEmpresaClienteComponent } from "./modulo-1-admin/empresa/editar-empresa-cliente/editar-empresa-cliente.component";
import { EditarFuncionarioEmpresaComponent } from "./modulo-1-admin/empresa/funcionario/editar-funcionario-empresa/editar-funcionario-empresa.component";
import { ConsultarFuncionarioPerfilEmpresaComponent } from "./modulo-1-admin/empresa/funcionario/consultar-funcionario-perfil-empresa/consultar-funcionario-perfil-empresa.component";
import { ConsultarFuncaoDasUnidadesComponent } from "./modulo-2-relatorios/unidadedoc/consultar-funcao-das-unidades/consultar-funcao-das-unidades.component";
import { GerarLaudoErgonomicoComponent } from "./modulo-3-documentos/documentos-unidades/laudo_ergonomico/gerar-laudo-ergonomico/gerar-laudo-ergonomico.component";

const routes: Routes = [

    { path: '', pathMatch: 'full', redirectTo: 'acessar-conta' }, /* rota raiz */
    { path: 'recuperar-senha', component: PasswordAdminComponent, canActivate: [AuthGuardsMaster]},
    { path: 'acessar-conta', component: LoginAdminComponent },
    { path: 'registrar-conta', component: RegisterAdminComponent , canActivate: [AuthGuardsMaster]},
    { path: 'criar-conta-empresa', component: CriarContaClienteEmpresaComponent},
    { path: 'esqueci-minha-senha', component: EsqueciMinhaSenhaClienteEmpresaComponent},


    { path: 'gerar-ordem-de-servico/:id', component: GerarOrdemDeServicoComponent},
    { path: 'gerar-ficha-de-epi/:id', component: GerarFichaDeEpiComponent},



    

    { path: 'criar-relatorios', component: CriarRelatoriosComponent , canActivate: [AuthGuardsMaster]},
    { path: 'editar-relatorios/:id', component: EditarRelatoriosComponent, canActivate: [AuthGuardsMaster]},
    { path: 'consultar-relatorios', component: ConsultarRelatoriosComponent, canActivate: [AuthGuardsMaster]},

    { path: 'criar-documentos/:id', component: CriarDocumentosComponent, canActivate: [AuthGuardsMaster]},
    { path: 'consultar-documentos', component: ConsultarDocumentosComponent, canActivate: [AuthGuardsMaster]},
    { path: 'editar-documentos/:id', component: EditarDocumentosComponent, canActivate: [AuthGuardsMaster]},
    { path: 'criar-documentos-funcionarios/:id', component: CriarDocumentosFuncionariosComponent, canActivate: [AuthGuardsMaster]},
    { path: 'documentos-desta-unidade/:id', component: ConsultarDocumentosPorUnidadesComponent},
    { path: 'criar-documentos-cenarios/:id', component: CriarDocumentosCenariosComponent, canActivate: [AuthGuardsMaster]},
    { path: 'documentos-deste-cenario/:id', component: ConsultarDocumentosCenariosComponent, canActivate: [AuthGuardsMaster]},
    { path: 'criar-etapas-documentosfree/:id', component: CriarEtapasDocumentosFreeComponent},
    { path: 'consultar-etapas-documentos-free/:id', component: ConsultarEtapasDocumentosFreeComponent},


    { path: 'gerar-ficha-de-epi-free/:id', component: GerarFichaDeEpiFreeComponent},  
    { path: 'gerar-ordem-de-servico-free/:id', component: GerarOrdemDeServicoFreeComponent},  
    { path: 'criar-documentos-free-funcionario/:id', component: CriarDocumentosFreeFuncionarioComponent},
    { path: 'consultar-documentos-free-funcionario/:id', component: ConsultarDocumentosFreeFuncionarioComponent},
    { path: 'editar-documentos-free-funcionario/:id', component: EditarDocumentosFreeFuncionarioComponent},


    { path: 'gerar-programa-de-gerenciamento-de-riscos-ocupacionais/:id', component: GerarPgrFuncaodocComponent},
    { path: 'gerar-programa-de-controle-medico-ocupacional/:id', component: GerarPcmsoComponent},
    { path: 'gerar-laudo-tecnico-das-condicoes-do-meio-ambiente/:id', component: GerarLtcatComponent},
    { path: 'gerar-laudo-ergonomico/:id', component: GerarLaudoErgonomicoComponent},

    { path: 'gerar-apr/:id', component: GerarAprComponent, canActivate: [AuthGuardsMaster]},
    { path: 'gerar-permissao-de-trabalho/:id', component: GerarPermissaoDeTrabalhoComponent, canActivate: [AuthGuardsMaster]},
    { path: 'gerar-permissao-de-trabalho-em-altura/:id', component: GerarPermissaoDeTrabalhoAlturaComponent, canActivate: [AuthGuardsMaster]},
    { path: 'gerar-pet/:id', component: GerarPetComponent, canActivate: [AuthGuardsMaster]},

// Documentos Free
{ path: 'gerar-apr-free/:id', component: GerarAprFreeComponent},
{ path: 'gerar-pt-free/:id', component: GerarPtFreeComponent},
{ path: 'gerar-pta-free/:id', component: GerarPtaFreeComponent},
{ path: 'gerar-pet-free/:id', component: GerarPetFreeComponent},



    { path: 'criar-documentosfree/:id', component: CriarDocumentosFreeCenarioComponent},
    { path: 'editar-documentosfree/:id', component: EditarDocumentosFreeCenarioComponent},
    { path: 'consultar-documentosfree/:id', component: ConsultarDocumentosFreeCenarioComponent},


    { path: 'criar-setor/:id', component: CriarSetorComponent , canActivate: [AuthGuardsMaster]},
    { path: 'editar-setor/:id', component: EditarSetorComponent, canActivate: [AuthGuardsMaster]},
    { path: 'consultar-setor/:id', component: ConsultarSetorComponent, canActivate: [AuthGuardsMaster]},

    { path: 'criar-postura/:id', component: CriarPosturaComponent , canActivate: [AuthGuardsMaster]},
    { path: 'editar-postura/:id', component: EditarPosturaComponent , canActivate: [AuthGuardsMaster]},
    { path: 'consultar-postura/:id', component: ConsultarPosturaComponent, canActivate: [AuthGuardsMaster]},

    { path: 'criar-analise-postura/:id', component: CriarAnaliseDePosturaComponent, canActivate: [AuthGuardsMaster]},
    { path: 'editar-analise-postura/:id', component: EditarAnaliseDePosturaComponent, canActivate: [AuthGuardsMaster]},
    { path: 'ver-analise-postura/:id', component: ConsultarAnaliseDePosturaComponent, canActivate: [AuthGuardsMaster]},

    { path: 'criar-cenario/:id', component: CriarCenarioComponent, canActivate: [AuthGuardsMaster]},
    { path: 'editar-cenario/:id', component: EditarCenarioComponent, canActivate: [AuthGuardsMaster]},
    { path: 'consultar-cenario/:id', component: ConsultarCenarioComponent, canActivate: [AuthGuardsMaster]},

    { path: 'criar-etapas/:id', component: CriarEtapasComponent, canActivate: [AuthGuardsMaster]},
    { path: 'editar-etapas/:id', component: EditarEtapasComponent},
    { path: 'consultar-etapas/:id', component: ConsultarEtapasComponent, canActivate: [AuthGuardsMaster]},

    { path: 'criar-funcao-unidade/:id', component: CriarFuncaoEspecificaUnidadedocComponent, canActivate: [AuthGuardsMaster]},
    { path: 'editar-funcao-unidade/:id', component: EditarFuncaoEspecificaUnidadedocComponent, canActivate: [AuthGuardsMaster]},
    { path: 'consultar-funcao-unidade/:id', component: ConsultarFuncaoEspecificaUnidadedocComponent, canActivate: [AuthGuardsMaster]},




    { path: 'criar-riscos/:id', component: CriarRiscosComponent , canActivate: [AuthGuardsMaster]},
    { path: 'consultar-riscos/:id', component: ConsultarRiscosComponent , canActivate: [AuthGuardsMaster]},
    { path: 'editar-riscos/:id', component: EditarRiscosComponent , canActivate: [AuthGuardsMaster]},
    { path: 'criar-riscos-funcao-especifica/:id', component: CriarRiscosFuncaoEspecificaComponent, canActivate: [AuthGuardsMaster]},
    { path: 'consultar-riscos-funcao-especifica/:id', component: ConsultarRiscosFuncaoEspecificaComponent, canActivate: [AuthGuardsMaster]},

    { path: 'consultar-perigo/:id', component: ConsultarPerigoComponent , canActivate: [AuthGuardsMaster]},
    { path: 'editar-perigo/:id', component: EditarPerigoComponent , canActivate: [AuthGuardsMaster]},
    { path: 'criar-perigo/:id', component: CriarPerigoComponent , canActivate: [AuthGuardsMaster]},
    { path: 'criar-perigo-funcao-especifica/:id', component: CriarPerigoFuncaoEspecificaComponent, canActivate: [AuthGuardsMaster]},
    { path: 'consultar-perigo-funcao-especifica/:id', component: ConsultarPerigoFuncaoEspecificaComponent, canActivate: [AuthGuardsMaster]},
    
    { path: 'consultar-cursos-para-funcoes/:id', component: ConsultarCursoParaFuncoesComponent , canActivate: [AuthGuardsMaster]},
    { path: 'editar-cursos-para-funcoes/:id', component: EditarCursoParaFuncoesComponent , canActivate: [AuthGuardsMaster]},
    { path: 'criar-cursos-para-funcoes/:id', component: CriarCursoParaFuncoesComponent , canActivate: [AuthGuardsMaster]},
    {path: 'criar-curso-para-funcao-especifica/:id', component: CriarCursoDeNrsFuncoesEspecificaComponent, canActivate: [AuthGuardsMaster]},
    {path: 'consultar-curso-para-funcao-especifica/:id', component: ConsultarCursoDeNrsFuncoesEspecificaComponent, canActivate: [AuthGuardsMaster]},

    { path: 'dashboard', component: DashboardComponent },

    { path: 'criar-unidadedoc/:id', component: CriarUnidadedocComponent, canActivate: [AuthGuardsMaster] },
    { path: 'consultar-unidadedoc', component: ConsultarUnidadedocComponent, canActivate: [AuthGuardsMaster] },
    { path: 'editar-unidadedoc/:id', component: EditarUnidadedocComponent, canActivate: [AuthGuardsMaster] },
    { path: 'consultar-unidades-desta-empresa/:id', component: ConsultarUnidadesEmpresasComponent},
    { path: 'consultar-funcao-desta-unidade/:id', component: ConsultarFuncaoDasUnidadesComponent},


    { path: 'cadastrar-minha-empresa/:id', component: CadastrarEmpresaClienteComponent, canActivate: [AuthGuardsEmpresa] },
    { path: 'cadastrar-empresa', component: CadastrarEmpresaComponent, canActivate: [AuthGuardsMaster] },
    { path: 'cadastrar-empresa-relatorios/:id', component: CriarEmpresaDocComponent, canActivate: [AuthGuardsMaster] },
    { path: 'consultar-empresa', component: ConsultarEmpresaComponent, canActivate: [AuthGuardsMaster]  },
    { path: 'consultar-empresa-relatorios', component: ConsultarEmpresadocComponent, canActivate: [AuthGuardsMaster]  },
    { path: 'consultar-contatos/:id', component: ConsultarContatosComponent , canActivate: [AuthGuardsMaster]},
    { path: 'editar-empresa/:id', component: EditarEmpresaComponent, canActivate: [AuthGuardsMaster] },
    { path: 'editar-empresa-cliente/:id', component: EditarEmpresaClienteComponent, canActivate: [AuthGuardsEmpresa] },
    { path: 'editar-empresa-relatorios/:id', component: EditarEmpresadocComponent, canActivate: [AuthGuardsMaster] },
    {path: 'cartao-de-acesso-cliente-empresa/:id', component: GerarAcessoClienteEmpresaComponent, canActivate: [AuthGuardsMaster]},




    { path: 'cadastrar-cnae/:id', component: CriarCnaeComponent, canActivate: [AuthGuardsMaster] },
    { path: 'consultar-cnae/:id', component: ConsultarCnaeComponent, canActivate: [AuthGuardsMaster] },
    { path: 'editar-cnae/:id', component: EditarCnaeComponent, canActivate: [AuthGuardsMaster] },




    { path: 'cadastrar-pessoa-fisica', component: CadastrarPessoaFisicaComponent, canActivate: [AuthGuardsMaster] },
    { path: 'editar-pessoa-fisica/:id', component: EditarPessoaFisicaComponent, canActivate: [AuthGuardsMaster] },
    { path: 'consultar-pessoa-fisica', component: ConsultarPessoaFisicaComponent , canActivate: [AuthGuardsMaster]},


    { path: 'consultar-epi/:id', component: ConsultarEpiComponent , canActivate: [AuthGuardsMaster]},
    { path: 'criar-epi/:id', component: CriarEpiComponent , canActivate: [AuthGuardsMaster]},
    { path: 'editar-epi/:id', component: EditarEpiComponent , canActivate: [AuthGuardsMaster]},
    {path: 'criar-epi-funcao-especifica/:id', component: CriarEpiFuncaoEspecificaComponent, canActivate: [AuthGuardsMaster]},
    {path: 'consultar-epi-funcao-especifica/:id', component: ConsultarEpiFuncaoEspecificaComponent, canActivate: [AuthGuardsMaster]},




    { path: 'editar-danos/:id', component: EditarDanosComponent, canActivate: [AuthGuardsMaster]},
    { path: 'consultar-danos/:id', component: ConsultarDanosComponent, canActivate: [AuthGuardsMaster]},
    { path: 'criar-danos/:id', component: CriarDanosComponent, canActivate: [AuthGuardsMaster]},

    { path: 'criar-probabilidade-de-ocorrencia/:id', component: CriarProbabilidadeDeOcorrenciaComponent, canActivate: [AuthGuardsMaster]},
    { path: 'editar-probabilidade-de-ocorrencia/:id', component: EditarProbabilidadeDeOcorrenciaComponent, canActivate: [AuthGuardsMaster]},
    { path: 'consultar-probabilidade-de-ocorrencia/:id', component: ConsultarProbabilidadeDeOcorrenciaComponent, canActivate: [AuthGuardsMaster]},


    { path: 'criar-probabilidade-de-ocorrencia-riscos/:id', component: CriarProbabilidadeDeOcorrenciaRiscosComponent, canActivate: [AuthGuardsMaster]},
    { path: 'consultar-probabilidade-de-ocorrencia-riscos/:id', component: ConsultarProbabilidadeDeOcorrenciaRiscosComponent, canActivate: [AuthGuardsMaster]},

    { path: 'criar-nivel-de-severidade-riscos/:id', component: CriarNivelDeSeveridadeRiscosComponent, canActivate: [AuthGuardsMaster]},
    { path: 'consultar-nivel-de-severidade-riscos/:id', component: ConsultarNivelDeSeveridadeRiscosComponent, canActivate: [AuthGuardsMaster]},

    { path: 'criar-potencial-de-severidade-riscos/:id', component: CriarPotencialDeSeveridadeRiscosComponent, canActivate: [AuthGuardsMaster]},
    { path: 'consultar-potencial-de-severidade-riscos/:id', component: ConsultarPotencialDeSeveridadeRiscosComponent, canActivate: [AuthGuardsMaster]},

    { path: 'consultar-medidas-de-controle-riscos/:id', component: ConsultarMedidasDeControleRiscosComponent, canActivate: [AuthGuardsMaster]},
    { path: 'criar-medidas-de-controle-riscos/:id', component: CriarMedidasDeControleRiscosComponent, canActivate: [AuthGuardsMaster]},


    { path: 'criar-nivel-de-severidade/:id', component: CriarNivelSeveridadeComponent, canActivate: [AuthGuardsMaster]},
    { path: 'editar-nivel-de-severidade/:id', component: EditarNivelSeveridadeComponent, canActivate: [AuthGuardsMaster]},
    { path: 'consultar-nivel-de-severidade/:id', component: ConsultarNivelSeveridadeComponent, canActivate: [AuthGuardsMaster]},

    { path: 'criar-potencial-de-severidade/:id', component: CriarPotencialSeveridadeComponent, canActivate: [AuthGuardsMaster]},
    { path: 'editar-potencial-de-severidade/:id', component: EditarPotencialSeveridadeComponent , canActivate: [AuthGuardsMaster]},
    { path: 'consultar-potencial-de-severidade/:id', component: ConsultarPotencialSeveridadeComponent, canActivate: [AuthGuardsMaster]},


    { path: 'criar-medidas-de-controle/:id', component: CriarMedidasDeControleComponent, canActivate: [AuthGuardsMaster]},
    { path: 'editar-medidas-de-controle/:id', component: EditarMedidasDeControleComponent, canActivate: [AuthGuardsMaster]},
    { path: 'consultar-medidas-de-controle/:id', component: ConsultarMedidasDeControleComponent, canActivate: [AuthGuardsMaster]},

    { path: 'criar-danos-riscos/:id', component: CriarDanosRiscosComponent, canActivate: [AuthGuardsMaster]},
    { path: 'consultar-danos-riscos/:id', component: ConsultarDanosRiscosComponent, canActivate: [AuthGuardsMaster]},


    { path: 'consultar-todos-exames', component: ConsultarExamesGeralComponent , canActivate: [AuthGuardsMaster]},
    { path: 'editar-exames-geral/:id', component: EditarExamesGeralComponent , canActivate: [AuthGuardsMaster]},
    { path: 'criar-exames-geral', component: CriarExamesGeralComponent, canActivate: [AuthGuardsMaster]},
    {path: 'criar-exames-funcao-especifica/:id', component: CriarExamesFuncaoEspecificaComponent, canActivate: [AuthGuardsMaster]},
    {path: 'consultar-exames-funcao-especifica/:id', component: ConsultarExamesFuncaoEspecificaComponent, canActivate: [AuthGuardsMaster]},



    { path: 'criar-exames-funcaodoc/:id', component: CriarExamesFuncaoDocComponent, canActivate: [AuthGuardsMaster]},
    { path: 'editar-exames-funcaodoc/:id', component: EditarExamesFuncaoDocComponent, canActivate: [AuthGuardsMaster]},
    { path: 'consultar-exames-funcaodoc/:id', component: ConsultarExamesFuncaoDocComponent, canActivate: [AuthGuardsMaster]},

 
    { path: 'criar-avaliacao-funcaodoc/:id', component: CriarAvaliacaoFuncaodocComponent, canActivate: [AuthGuardsMaster]},
    { path: 'editar-avaliacao-funcaodoc/:id', component: EditarAvaliacaoFuncaodocComponent, canActivate: [AuthGuardsMaster]},
    { path: 'consultar-avaliacao-funcaodoc/:id', component: ConsultarAvaliacaoFuncaodocComponent, canActivate: [AuthGuardsMaster]},
    { path: 'criar-avaliacao-funcao-especifica/:id', component: CriarAvaliacaoFuncaoEspecificaComponent, canActivate: [AuthGuardsMaster]},
    { path: 'consultar-avaliacao-funcao-especifica/:id', component: ConsultarAvaliacaoFuncaoEspecificaComponent, canActivate: [AuthGuardsMaster]},

 
 
    { path: 'consultar-maquinas', component: ConsultarMaquinasComponent , canActivate: [AuthGuardsMaster]},
    { path: 'editar-maquinas/:id', component: EditarMaquinasComponent, canActivate: [AuthGuardsMaster]},
    { path: 'criar-maquinas', component: CriarMaquinasComponent, canActivate: [AuthGuardsMaster]},





    { path: 'cadastrar-faturamento-pf', component: CadastrarFaturamentoPfComponent, canActivate: [AuthGuardsMaster]},
    { path: 'editar-faturamento-pf/:id', component: EditarFaturamentoPfComponent , canActivate: [AuthGuardsMaster]},
    { path: 'consultar-faturamento-pf', component: ConsultarFaturamentoPfComponent , canActivate: [AuthGuardsMaster]},
    { path: 'cadastrar-cobranca-empresa-faturamento/:id', component: CriarCobrancaEmpresaFaturamentoComponent, canActivate: [AuthGuardsMaster]},
    { path: 'cadastrar-cobranca-empresa-pedidos/:id', component: CriarCobrancaEmpresaPedidosComponent, canActivate: [AuthGuardsMaster]},
    { path: 'cadastrar-cobranca-pessoa-fisica-faturamento/:id', component: CriarCobrancaPessoaFisicaFaturamentoComponent, canActivate: [AuthGuardsMaster]},





    { path: 'gerar-certificado-pessoa-fisica', component: MatriculasPessoaFisicaGerarDocumentosComponent, canActivate: [AuthGuardsMaster] },
    { path: 'gerar-certificado-pessoa-juridica', component: MatriculasPessoaJuridicaGerarDocumentosComponent , canActivate: [AuthGuardsMaster]},
    { path: 'gerar-certificado-pessoa-juridica-sem-assinar/:id', component: GerarCertificadoSemSerAssinadoComponent  , canActivate: [AuthGuardsMaster]},





    { path: 'cadastrar-funcionario/:id', component: CadastrarFuncionarioComponent },
    { path: 'consultar-funcionario/:id', component: ConsultarFuncionarioComponent},
    { path: 'editar-funcionario/:id', component: EditarFuncionarioComponent},
    { path: 'editar-funcionario-empresa/:id', component: EditarFuncionarioEmpresaComponent, canActivate: [AuthGuardsEmpresa]},
    { path: 'consultar-meus-funcionarios/:id', component: ConsultarFuncionarioPerfilEmpresaComponent},



    { path: 'consultar-funcao', component: ConsultarFuncaoComponent , canActivate: [AuthGuardsMaster]},
    { path: 'editar-funcao/:id', component: EditarFuncaoComponent , canActivate: [AuthGuardsMaster]},


    { path: 'cadastrar-turmas', component: CadastrarTurmasComponent, canActivate: [AuthGuardsMaster] },
    { path: 'editar-turmas/:id', component: EditarTurmasComponent , canActivate: [AuthGuardsMaster]},
    { path: 'consultar-turmas', component: ConsultarTurmasComponent, canActivate: [AuthGuardsMaster]},
    { path: 'consultar-turmas-por-unidades', component: ConsultarTurmasPorUnidadesComponent, canActivate: [AuthGuardsMaster]},

    { path: 'consultar-turmas-empresa', component: ConsultarTurmasPerfilEmpresaComponent, canActivate: [AuthGuardsEmpresa]},
    { path: 'consultar-turmas-perfil-aluno', component: ConsultarTurmasPerfilAlunoComponent, canActivate: [AuthGuardsAluno]},





    { path: 'consultar-cursos', component: ConsultarCursosComponent, canActivate: [AuthGuardsMaster]},
    { path: 'cadastrar-curso', component: CadastrarCursoComponent , canActivate: [AuthGuardsMaster]},
    { path: 'editar-curso/:id', component: EditarCursoComponent, canActivate: [AuthGuardsMaster]},
    { path: 'consultar-instrutor-perfil-empresa', component: ConsultarInstrutorPerfilEmpresaComponent, canActivate: [AuthGuardsEmpresa]},
    { path: 'consultar-instrutor-perfil-aluno', component: ConsultarInstrutorPerfilAlunoComponent, canActivate: [AuthGuardsAluno]},


    { path: 'cadastrar-instrutor', component: CadastrarInstrutorComponent, canActivate: [AuthGuardsMaster]},
    { path: 'consultar-instrutores', component: ConsultarInstrutorComponent, canActivate: [AuthGuardsMaster] },
    { path: 'editar-instrutor/:id', component: EditarInstrutorComponent, canActivate: [AuthGuardsMaster] },

    {path: 'cadastrar-proficiencia', component: CriarProficienciaComponent, canActivate: [AuthGuardsMaster]},
    { path: 'consultar-proficiencia', component: ConsultarProficienciaComponent, canActivate: [AuthGuardsMaster]},
    { path: 'editar-proficiencia', component: EditarProficienciaComponent, canActivate: [AuthGuardsMaster]},


    { path: 'cadastro-de-especializacao', component: CadastrarEspecializacaoComponent, canActivate: [AuthGuardsMaster] },
    { path: 'consultar-especializacao', component: ConsultarEspecializacaoComponent, canActivate: [AuthGuardsMaster] },
    { path: 'editar-especializacao', component: EditarEspecializacaoComponent, canActivate: [AuthGuardsMaster] },



    { path: 'cadastrar-endereco', component: CadastrarEnderecoComponent, canActivate: [AuthGuardsMaster] },
    { path: 'consultar-endereco', component: ConsultarEnderecoComponent, canActivate: [AuthGuardsMaster] },
    { path: 'editar-endereco/:id', component: EditarEnderecoComponent, canActivate: [AuthGuardsMaster]},

    { path: 'cadastrar-todos-enderecos', component: CriarTodosEnderecosComponent, canActivate: [AuthGuardsMaster]},
    { path: 'editar-todos-enderecos/:id', component: EditarTodosEnderecosComponent, canActivate: [AuthGuardsMaster]},


    { path: 'cadastrar-pedidos-de-compras', component: CadastrarPedidoDeComprasComponent, canActivate: [AuthGuardsMaster] },
    { path: 'editar-pedidos-de-compras/:id', component: EditarPedidosDeComprasComponent, canActivate: [AuthGuardsMaster] },
    { path: 'consultar-pedidos-de-compras', component: ConsultarPedidosDeComprasComponent },


    { path: 'cadastrar-matriculas-faturamentopf/:id', component: CriarMatriculasFaturamentoPfComponent, canActivate: [AuthGuardsMaster] },
    { path: 'consultar-matriculas-faturamentopf', component: ConsultarMatriculasFaturamentoPfComponent, canActivate: [AuthGuardsMaster] },
    { path: 'editar-matricula/:id', component: EditarMatriculaComponent, canActivate: [AuthGuardsMaster] },

    
    { path: 'cadastrar-matriculas-faturamentopj/:id', component: CriarMatriculasFaturamentoPjComponent, canActivate: [AuthGuardsMaster]},
    { path: 'consultar-todas-matriculas', component: ConsultarMatriculasFaturamentoPjComponent, canActivate: [AuthGuardsMaster]},

        
    { path: 'cadastrar-matriculas-pedidos/:id', component: CriarMatriculasPedidosComponent, canActivate: [AuthGuardsMaster]},
    { path: 'consultar-matriculas-pedidos', component: ConsultarMatriculasPedidosComponent, canActivate: [AuthGuardsMaster]},

    { path: 'cadastrar-faturamentopf', component:CadastrarFaturamentoPfComponent, canActivate: [AuthGuardsMaster]},
    { path: 'editar-faturamentopf/:id', component: EditarFaturamentoPfComponent, canActivate: [AuthGuardsMaster]},
    { path: 'consultar-faturamentopf', component: ConsultarFaturamentoPfComponent , canActivate: [AuthGuardsMaster]},

    { path: 'cadastrar-faturamentopj', component:CadastrarFaturamentoPjComponent, canActivate: [AuthGuardsMaster]},
    { path: 'consultar-faturamentopj', component:ConsultarFaturamentoPjComponent, canActivate: [AuthGuardsMaster]},
    { path: 'editar-faturamentopj/:id', component:EditarFaturamentoPjComponent, canActivate: [AuthGuardsMaster]},



    { path: 'editar-local-do-curso', component: EditarEnderecoComponent , canActivate: [AuthGuardsMaster]},
    { path: 'lista-de-presenca', component: ListadepresencaComponent , canActivate: [AuthGuardsMaster]},




    { path: 'gerar-certificado/:id', component: ConsultarCertificadoAlunosComponent, canActivate: [AuthGuardsMaster] },
    { path: 'gerar-lista-de-presenca/:id', component: ListadepresencaComponent, canActivate: [AuthGuardsMaster] },
    { path: 'gerar-autorizacao/:id', component: GerarAutorizacaoComponent, canActivate: [AuthGuardsMaster] },


    {path: 'cadastrar-unidade-de-treinamento', component: CadastrarUnidadeComponent, canActivate: [AuthGuardsMaster]},
    {path: 'consultar-unidade-de-treinamento', component: ConsultarUnidadeComponent, canActivate: [AuthGuardsMaster]},
    {path: 'editar-unidade-de-treinamento/:id', component: EditarUnidadeComponent, canActivate: [AuthGuardsMaster]},

    {path: 'cadastrar-funcaodoc/:id', component: CriarFuncaodocComponent, canActivate: [AuthGuardsMaster]},
    {path: 'consultar-funcaodoc', component: ConsultarFuncaodocComponent, canActivate: [AuthGuardsMaster]},
    {path: 'editar-funcaodoc/:id', component: EditarFuncaodocComponent, canActivate: [AuthGuardsMaster]},


    {path: 'cadastrar-funcao', component: CadastrarFuncaoComponent, canActivate: [AuthGuardsMaster]},
    {path: 'consultar-funcao', component: ConsultarFuncaoComponent, canActivate: [AuthGuardsMaster]},
    {path: 'editar-funcao/:id', component: EditarFuncaoComponent, canActivate: [AuthGuardsMaster]},
 
    {path: 'criar-chamado', component: CriarChamadoComponent, canActivate: [AuthGuardsMaster]},
    {path: 'editar-chamado/:id', component: EditarChamadoComponent, canActivate: [AuthGuardsMaster]},
    {path: 'consultar-chamado', component: ConsultarChamadoComponent, canActivate: [AuthGuardsMaster]},

    {path: 'consultar-turmas-adm', component: ConsultarTurmasAdmComponent, canActivate: [AuthGuardsMaster]},

    {path: 'cadastrar-contrato', component: CadastrarContratoComponent, canActivate: [AuthGuardsMaster]},
    {path: 'editar-contrato', component: EditarChamadoComponent, canActivate: [AuthGuardsMaster]},
    {path: 'consultar-contrato', component: ConsultarContratoComponent, canActivate: [AuthGuardsMaster]},


    {path: 'gerar-certificado-pessoa-fisica/:id', component: GerarCertificadoPessoafisicaComponent, canActivate: [AuthGuardsMaster]},
    {path: 'gerar-certificado-pessoa-fisica-sem-ser-assinado/:id', component: GerarCertificadoSemAssinarPessoaFisicaComponent, canActivate: [AuthGuardsMaster]},

    {path: 'gerar-autorizacao-pessoa-fisica/:id', component: GerarAutorizacaoPessoafisicaComponent, canActivate: [AuthGuardsMaster]},





    {path: 'cadastrar-pedido-de-compras', component: CadastrarPedidosDeComprasComponent, canActivate: [AuthGuardsMaster]},
    {path: 'editar-pedido-de-compras', component: EditarPedidoDeComprasComponent, canActivate: [AuthGuardsMaster]},
    {path: 'consultar-pedido-de-compras', component: ConsultarPedidosDeComprasComponent, canActivate: [AuthGuardsMaster]},

    //listas de Presença Pessoa Fisica
    {path: 'lista-de-presenca-primeiro-dia-pessoa-fisica/:id', component: ListasPessoaFisicaPrimeiroDiaComponent, canActivate: [AuthGuardsMaster]},
    {path: 'lista-de-presenca-segundo-dia-pessoa-fisica/:id', component: ListasPessoaFisicaSegundoDiaComponent, canActivate: [AuthGuardsMaster]},
    {path: 'lista-de-presenca-terceiro-dia-pessoa-fisica/:id', component: ListasPessoaFisicaTerceiroDiaComponent, canActivate: [AuthGuardsMaster]},
    {path: 'lista-de-presenca-quarto-dia-pessoa-fisica/:id', component: ListasPessoaFisicaQuartoDiaComponent, canActivate: [AuthGuardsMaster]},
    {path: 'lista-de-presenca-quinto-dia-pessoa-fisica/:id', component: ListasPessoaFisicaQuintoDiaComponent, canActivate: [AuthGuardsMaster]},


    //listas de Presença Pessoa Juridica
{path: 'lista-de-presenca-primeiro-dia-pessoa-juridica/:id', component: ListasPessoaJuridicaPrimeiroDiaComponent, canActivate: [AuthGuardsMaster]},
{path: 'lista-de-presenca-segundo-dia-pessoa-juridica/:id', component: ListasPessoaJuridicaSegundoDiaComponent, canActivate: [AuthGuardsMaster]},
{path: 'lista-de-presenca-terceiro-dia-pessoa-juridica/:id', component: ListasPessoaJuridicaTerceiroDiaComponent, canActivate: [AuthGuardsMaster]},
{path: 'lista-de-presenca-quarto-dia-pessoa-juridica/:id', component: ListasPessoaJuridicaQuartoDiaComponent, canActivate: [AuthGuardsMaster]},
{path: 'lista-de-presenca-quinto-dia-pessoa-juridica/:id', component: ListasPessoaJuridicaQuintoDiaComponent, canActivate: [AuthGuardsMaster]},


{path: 'gerar-relatorio-pessoa-juridica/:id', component: GerarRelatorioPessoaJuridicaComponent, canActivate: [AuthGuardsMaster]},
{path: 'gerar-relatorio-pessoa-fisica/:id', component: GerarRelatorioPessoaFisicaComponent, canActivate: [AuthGuardsMaster]},
{path: 'gerar-relatorio-pedidos-de-compras/:id', component: GerarRelatorioPedidosDeComprasComponent, canActivate: [AuthGuardsMaster]},


{path: 'perfil-empresa', component: PerfilEmpresaComponent, canActivate: [AuthGuardsEmpresa]},
{path: 'consultar-matriculas-empresa', component: ConsultarMatriculasEmpresaComponent, canActivate: [AuthGuardsEmpresa]},
{path: 'gerar-certificado-funcionario/:id', component: GerarCertificadoPerfilEmpresaComponent, canActivate: [AuthGuardsEmpresa]},
{path: 'gerar-autorizacao-funcionario/:id', component: GerarAutorizacaoPerfilEmpresaComponent, canActivate: [AuthGuardsEmpresa]},
{path: 'minha-empresa', component: ConsultarEmpresasComponent, canActivate: [AuthGuardsEmpresa]},
{path: 'cadastro-funcionario-minha-empresa/:id', component: CadastrarFuncionarioPerfilempresaComponent, canActivate: [AuthGuardsEmpresa]},
{path: 'editar-funcionario-minha-empresa/:id', component: EditarFuncionarioPerfilempresaComponent, canActivate: [AuthGuardsEmpresa]},
{path: 'cadastrar-funcao-minha-empresa', component: CadastrarFuncaoPerfilempresaComponent, canActivate: [AuthGuardsEmpresa]},
{path: 'consultar-funcao-minha-empresa', component: ConsultarFuncaoPerfilempresaComponent, canActivate: [AuthGuardsEmpresa]},
{path: 'criar-matricula-meu-funcionario/:id', component: TurmasCriarMatriculaPerfilEmpresaComponent, canActivate: [AuthGuardsEmpresa]},
{path: 'faturamentos-da-minha-empresa', component: ConsultarFaturamentoPerfilEmpresaComponent, canActivate: [AuthGuardsEmpresa]},
{path: 'gerar-relatorio-faturamento-minha-empresa/:id', component: GerarRelatorioFaturamentoPerfilEmpresaComponent, canActivate: [AuthGuardsEmpresa]},
{path: 'pedidos-de-compras-minha-empresa', component: PedidosDeComprasPerfilEmpresaComponent, canActivate: [AuthGuardsEmpresa]},
{path: 'gerar-relatorio-pedidos-minha-empresa/:id', component: GerarRelatoriosPedidosDeComprasPerfilEmpresaComponent, canActivate: [AuthGuardsEmpresa]},
{path: 'fazer-matriculas-pedidos-minha-empresa/:id', component: FazerMatriculasPedidosDeComprasPerfilEmpresaComponent, canActivate: [AuthGuardsEmpresa]},
{path: 'consultar-cursos-empresa', component: ConsultarCursosEmpresaComponent, canActivate: [AuthGuardsEmpresa]},

//listas de Presença Pessoa Juridica
{path: 'lista-de-presenca-primeiro-dia-funcionario/:id', component: ListaDePresencaPrimeiroDiaComponent, canActivate: [AuthGuardsEmpresa]},
{path: 'lista-de-presenca-segundo-dia-funcionario/:id', component: ListaDePresencaSegundoDiaComponent, canActivate: [AuthGuardsEmpresa]},
{path: 'lista-de-presenca-terceiro-dia-funcionario/:id', component: ListaDePresencaTerceiroDiaComponent, canActivate: [AuthGuardsEmpresa]},
{path: 'lista-de-presenca-quarto-dia-funcionario/:id', component: ListaDePresencaQuartoDiaComponent, canActivate: [AuthGuardsEmpresa]},
{path: 'lista-de-presenca-quinto-dia-funcionario/:id', component: ListaDePresencaQuintoDiaComponent, canActivate: [AuthGuardsEmpresa]},
   





{path: 'perfil-aluno', component: PerfilAlunoComponent, canActivate: [AuthGuardsAluno]},
{path: 'consultar-matriculas-aluno', component: ConsultarMatriculasAlunoComponent, canActivate: [AuthGuardsAluno]},
{path: 'gerar-certificado-aluno/:id', component: GerarCertificadoPerfilAlunoComponent, canActivate: [AuthGuardsAluno]},
{path: 'gerar-autorizacao-aluno/:id', component: GerarAutorizacaoPerfilAlunoComponent, canActivate: [AuthGuardsAluno]},
 //listas de Presença Aluno
 {path: 'lista-de-presenca-primeiro-dia-aluno/:id', component: ListasAlunoParticularPrimeiroDiaComponent, canActivate: [AuthGuardsAluno]},
 {path: 'lista-de-presenca-segundo-dia-aluno/:id', component: ListasAlunoParticularSegundoDiaComponent, canActivate: [AuthGuardsAluno]},
 {path: 'lista-de-presenca-terceiro-dia-aluno/:id', component: ListasAlunoParticularTerceiroDiaComponent, canActivate: [AuthGuardsAluno]},
 {path: 'lista-de-presenca-quarto-dia-aluno/:id', component: ListasAlunoParticularQuartoDiaComponent, canActivate: [AuthGuardsAluno]},
 {path: 'lista-de-presenca-quinto-dia-aluno/:id', component: ListasAlunoParticularQuintoDiaComponent , canActivate: [AuthGuardsAluno]},
 {path: 'cartao-de-acesso-cliente-pessoafisica/:id', component: GerarAcessoClientePessoafisicaComponent, canActivate: [AuthGuardsMaster]},
 {path: 'dados-aluno', component: ConsultarDadosAlunoParticularComponent, canActivate: [AuthGuardsAluno]},
 {path: 'consultar-faturamento-aluno', component: ConsultarFaturamentoAlunoComponent, canActivate: [AuthGuardsAluno]},
 {path: 'relatorio-faturamento-aluno/:id', component: RelatorioFaturamentoAlunoComponent, canActivate: [AuthGuardsAluno]},
 {path: 'criar-matriculas-aluno-particular/:id', component: CriarMatriculasAlunoParticularComponent, canActivate: [AuthGuardsAluno]},
 {path: 'consultar-cursos-aluno', component: ConsultarCursosAlunoComponent, canActivate: [AuthGuardsAluno]},



{path: 'perfil-master', component: PerfilMasterComponent, canActivate: [AuthGuardsMaster]}



];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }