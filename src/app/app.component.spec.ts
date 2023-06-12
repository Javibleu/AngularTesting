import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';



describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
    });
  });

  it('should create the app', () => {

    expect(component).toBeTruthy();
  });

  it('should render Links', () => {

    fixture.detectChanges();

    const spans = el.queryAll(By.css('span'));

    expect(spans[0].nativeElement.textContent).toContain('Courses');
    expect(spans[1].nativeElement.textContent).toContain('About');

  });
});
