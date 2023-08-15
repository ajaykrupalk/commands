import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitcmdComponent } from './gitcmd.component';

describe('GitcmdComponent', () => {
  let component: GitcmdComponent;
  let fixture: ComponentFixture<GitcmdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GitcmdComponent]
    });
    fixture = TestBed.createComponent(GitcmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
