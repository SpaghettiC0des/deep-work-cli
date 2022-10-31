import {test} from '@oclif/test';
import {expect} from 'chai';
import * as utils from '../../src/utils/file';

describe('unblock', () => {
  test
  .stub(utils, 'removeAllBlockedWebsites', () => Promise.resolve())
  .stderr()
  .command(['unblock'])
  .exit(200)
  .it('should fail with exit 200 without adding -a flag');

  test
  .stub(utils, 'removeAllBlockedWebsites', () => Promise.resolve())
  .stdout()
  .command(['unblock', '-a'])
  .it('should remove all blocked websites with -a flag', ctx => {
    expect(ctx.stdout).to.contain('Unblocked all websites!');
  });
});
