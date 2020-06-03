import { TestBed } from '@angular/core/testing';

import { MeserosService } from './meseros.service';

describe('MeserosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeserosService = TestBed.get(MeserosService);
    expect(service).toBeTruthy();
  });
});
