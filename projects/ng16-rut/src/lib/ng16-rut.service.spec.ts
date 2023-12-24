import { TestBed } from '@angular/core/testing';

import { Ng16RutService } from './ng16-rut.service';

describe('Ng16RutService', () => {
  let service: Ng16RutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ng16RutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
