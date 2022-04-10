import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EverythingNewsComponent } from './everything-news.component';

describe('EverythingNewsComponent', () => {
  let component: EverythingNewsComponent;
  let fixture: ComponentFixture<EverythingNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EverythingNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EverythingNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
