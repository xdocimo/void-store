import { TestBed } from '@angular/core/testing';

import { productService } from './productsservice.service';

describe('ProductsService', () => {
  let service: productService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(productService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
