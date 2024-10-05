import { TestBed } from '@angular/core/testing';

import { CutzVideoModuleService } from './cutz-video-module.service';

describe('CutzVideoModuleService', () => {
  let service: CutzVideoModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CutzVideoModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
