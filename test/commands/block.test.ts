import {expect, test} from '@oclif/test';
import * as fs from 'node:fs';

const FB_URL = 'https://www.facebook.com';

describe('block', () => {
  test
  .stub(fs, 'promises', () => ({readFile: async () => '', writeFile: async () => true}))
  .stderr()
  .command(['block'])
  .exit(2)
  .it('should require the website URL');

  test
  .stub(fs, 'promises', () => ({readFile: async () => '', writeFile: async () => true}))
  .stdout()
  .command(['block', FB_URL])
  .command(['block', FB_URL.replace('https://', '')])
  .it('should accept a valid URL', ctx => {
    expect(ctx.stdout).to.contain(`${FB_URL} added to the block list!`);
  });

  test
  .stub(fs, 'promises', () => ({readFile: async () => '', writeFile: async () => true}))
  .stderr()
  .stdout()
  .command(['block', 'invalid url .com'])
  .exit(100)
  .command(['block', 'www. reddit.com'])
  .it('exits with status 100 if the url is invalid');
});
