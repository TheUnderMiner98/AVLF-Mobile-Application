import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Components */
import { HomeComponent } from './components/home/home.component';
import { SecondaryHomeComponent } from './components/helper/secondary-home/secondary-home.component';
import { MoveOutHelperComponent } from './components/helper/move-out-helper/move-out-helper.component';
import { CourtHearingHelperComponent } from './components/helper/court-hearing-helper/court-hearing-helper.component';
import { AnswerFormHelperComponent } from './components/helper/answer-form-helper/answer-form-helper.component';
import { GettingStartedComponent } from './components/answer-form/getting-started/getting-started.component';
import { FileAnswerComponent } from './components/answer-form/file-answer/file-answer.component';
import { ExitComponent } from './components/answer-form/exit/exit.component';
import { TenancyComponent } from './components/answer-form/tenancy/tenancy.component';
import { DefensesComponent } from './components/answer-form/defenses/defenses.component';
import { FinalCheckComponent } from './components/answer-form/final-check/final-check.component';
import { NextStepComponent } from './components/answer-form/next-step/next-step.component';
import { EFileComponent } from './components/answer-form/e-file/e-file.component';

/* Material Imports */
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecondaryHomeComponent,
    MoveOutHelperComponent,
    CourtHearingHelperComponent,
    AnswerFormHelperComponent,
    GettingStartedComponent,
    FileAnswerComponent,
    ExitComponent,
    TenancyComponent,
    DefensesComponent,
    FinalCheckComponent,
    NextStepComponent,
    EFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
