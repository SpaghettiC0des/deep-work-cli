import {Command} from '@oclif/core';
import {isUrlValid} from '../utils';
import * as fs from 'node:fs';
import * as sudo from '@vscode/sudo-prompt';
export default class Block extends Command {
  private hostFilePath = '/etc/hosts'
  static description = 'adds a website to the block list'

  static examples = [
    '<%= config.bin %> <%= command.id %> www.google.com',
  ]

  static args = [{name: 'url', required: true}]

  public async run(): Promise<void> {
    const {args} = await this.parse(Block);

    if (!isUrlValid(args.url)) {
      this.error(`invalid URL: ${args.url}.`, {exit: 100});
    }

    let hosts = String(await fs.promises.readFile(this.hostFilePath));
    const firstLine = `0.0.0.0 ${args.url}`;
    const secondLine = `:: ${args.url}`;
    const startComment = '# deep-work-cli start';
    const endComment = '# deep-work-cli end';

    for (const str of [firstLine, secondLine]) {
      hosts.replace(new RegExp(`#?[ ]?${str}`, 'g'), '');
    }

    hosts = hosts.replace(endComment, '');

    await fs.promises.writeFile(this.hostFilePath, `${hosts}\n${hosts.includes(startComment) ? '' : startComment + '\n'}${firstLine}\n${secondLine}\n${endComment}\n`);
    sudo.exec('dscacheutil -flushcache; sudo killall -HUP mDNSResponder', {name: 'deep-work-cli'});

    this.log(`${args.url} added to the block list!`);
  }
}
