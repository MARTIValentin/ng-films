import { TestBed } from '@angular/core/testing';

import { PremierServiceService } from './premierService.service';

describe('SaisonsService', () => {
  let service: PremierServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PremierServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
