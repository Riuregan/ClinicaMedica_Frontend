import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((mod) => mod.HomeModule),
  },
  {
    path: "agendamento",
    loadChildren: () =>
      import("./agendamento/about.module").then((mod) => mod.AboutModule),
  },
  {
    path: "novoEndereco",
    loadChildren: () =>
      import("./services/services.module").then((mod) => mod.ServicesModule),
  },
  {
    path: "logIn",
    loadChildren: () =>
      import("./testimonial/testimonial.module").then(
        (mod) => mod.TestimonialModule
      ),
  },
  {
    path: "gallery",
    loadChildren: () =>
      import("./gallery/gallery.module").then((mod) => mod.GalleryModule),
  },
  // {
  //   path: "novoFuncionario",
  //   loadChildren: () =>
  //     import("./restrito/novo-funcionario/novo-funcionario.module").then((mod) => mod.NovoFuncionarioModule),
  // },
  {
    path: "gallery",
    loadChildren: () =>
      import("./gallery/gallery.module").then((mod) => mod.GalleryModule),
  },
  {
    path: "novoFuncionario",
    loadChildren: () =>
      import("./restrito/novoFuncionarioFolder/novoFuncionario.module").then((mod) => mod.NovoFuncionarioModule),
  },

  {
    path: "novoPaciente",
    loadChildren: () =>
      import("./restrito/novoPacienteFolder/novoPaciente.module").then((mod) => mod.NovoPacienteModule),
  },
  {
    path: "listarFuncionarios",
    loadChildren: () =>
      import("./restrito/listarfuncionariosFolder/listarFuncionarios.module").then((mod) => mod.ListarFuncionariosModule),
  },
  {
    path: "listarPacientes",
    loadChildren: () =>
      import("./restrito/listarfPacientesFolder/listarPacientes.module").then((mod) => mod.ListarPacientesModule),
  },
  {
    path: "listarEnderecos",
    loadChildren: () =>
      import("./restrito/listarEnderecos/listarEnderecos.module").then((mod) => mod.ListarEnderecoModule),
  },
  {
    path: "listarTodosAgendamentos",
    loadChildren: () =>
      import("./restrito/listar-todos-agendamentos/listarTodosAgendamentos.module").then((mod) => mod.ListarTodosAgendamentosModule),
  },
  {
    path: "listarMeusAgendamentos",
    loadChildren: () =>
      import("./restrito/listar-meus-agendamentos/listarMeusAgendamentos-routing.module").then((mod) => mod.ListarMeusAgendamentosRouterModule),
  },

  {
    path: "404",
    loadChildren: () =>
      import("./notfound/notfound.module").then((mod) => mod.NotfoundModule),
  },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
