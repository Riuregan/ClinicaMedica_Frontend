import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { ReactiveFormsModule } from "@angular/forms";

// Components
import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { NavmenuComponent } from "./navmenu/navmenu.component";
import { NavigationComponent } from './navigation/navigation.component';
import { SocialComponent } from './social/social.component';

// Modules
import { AppRoutingModule } from "./app-routing.module";
import { AboutModule } from "./agendamento/about.module";
import { GalleryModule } from "./gallery/gallery.module";
import { HomeModule } from "./home/home.module";
import { NotfoundModule } from "./notfound/notfound.module";
import { ServicesModule } from "./services/services.module";
import { CommonModule } from "@angular/common";

// Services
import { ConfigService } from "./shared/services/config.service";

import { NovoPacienteComponent } from './restrito/novoPacienteFolder/novo-paciente/novo-paciente.component';
import { ListarFuncionariosComponent } from './restrito/listarfuncionariosFolder/listar-funcionarios/listar-funcionarios.component';
import { NovoFuncionarioComponent } from './restrito/novoFuncionarioFolder/novo-funcionario/novo-funcionario.component';
import { ListarMeusAgendamentosModule } from "./restrito/listar-meus-agendamentos/listarMeusAgendamentos.module";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    NavmenuComponent,
    SocialComponent,
  ],
  imports: [
    AboutModule,
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    GalleryModule,
    HomeModule,
    HttpClientModule,
    NotfoundModule,
    ReactiveFormsModule,
    ServicesModule,
    ListarMeusAgendamentosModule,
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent],
})
export class AppModule { }
