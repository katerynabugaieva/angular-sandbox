import { TestBed } from '@angular/core/testing';

import { MyAwesomeService } from './my-awesome.service';

describe('MyAwesomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyAwesomeService = TestBed.get(MyAwesomeService);
    expect(service).toBeTruthy();
  });
});
