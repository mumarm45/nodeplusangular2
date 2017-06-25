import { TaskIsDonePipe } from './task-is-done.pipe';

describe('TaskIsDonePipe', () => {
  it('create an instance', () => {
    const pipe = new TaskIsDonePipe();
    expect(pipe).toBeTruthy();
  });
});
