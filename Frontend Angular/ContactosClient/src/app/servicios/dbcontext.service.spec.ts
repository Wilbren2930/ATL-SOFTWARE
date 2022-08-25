import { TestBed } from '@angular/core/testing';

import { DbcontextService } from './dbcontext.service';

describe('DbcontextService', () => {
  let service: DbcontextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbcontextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
