import { TestBed } from '@angular/core/testing';

import { TeaServiceService } from './tea.service';

describe('TeaServiceService', () => {
  let service: TeaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
