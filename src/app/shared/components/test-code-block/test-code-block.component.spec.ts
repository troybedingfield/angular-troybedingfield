import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCodeBlockComponent } from './test-code-block.component';

describe('TestCodeBlockComponent', () => {
  let component: TestCodeBlockComponent;
  let fixture: ComponentFixture<TestCodeBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestCodeBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestCodeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
