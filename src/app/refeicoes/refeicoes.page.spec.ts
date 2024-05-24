import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RefeicoesPage } from './refeicoes.page';

describe('RefeicoesPage', () => {
  let component: RefeicoesPage;
  let fixture: ComponentFixture<RefeicoesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RefeicoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
