import { CatIdPipe } from './cat-id.pipe';

describe('CatIdPipe', () => {
  it('create an instance', () => {
    const pipe = new CatIdPipe();
    expect(pipe).toBeTruthy();
  });
});
