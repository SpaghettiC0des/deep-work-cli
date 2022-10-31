import {Command, Flags} from '@oclif/core';
import {removeAllBlockedWebsites, removeOneUrl} from '../utils';

export default class Unblock extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    all: Flags.boolean({char: 'a', description: 'remove all blocked websites'}),
  }

  static args = [{name: 'url', description: 'the URL you want to remove'}]

  public async run(): Promise<void> {
    const {flags, args} = await this.parse(Unblock);

    if (!flags.all && !args.url) {
      this.error('provide a URL or pass -a or --all to remove all blocked URLs', {exit: 200});
      return;
    }

    try {
      if (flags.all) {
        await removeAllBlockedWebsites();
        this.log('Unblocked all websites!');
        return;
      }

      if (args.url) {
        await removeOneUrl(args.url);
        this.log(`${args.url} unblocked!`);
      }
    } catch (error) {
      if (flags.all) {
        this.error(error as Error, {exit: 201});
      }
    }
  }
}
