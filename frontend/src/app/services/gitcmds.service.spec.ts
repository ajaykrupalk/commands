import { TestBed } from '@angular/core/testing';

import { GitcmdsService } from './gitcmds.service';

describe('GitcmdsService', () => {
  let service: GitcmdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitcmdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
