import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(AboutComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;

      fixture.detectChanges();
    });

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show Welcome', () => {
    const header = el.query(By.css('h1'));
    expect(header.nativeElement.textContent).toContain('Welcome');
  });
});
