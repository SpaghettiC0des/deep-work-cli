import * as fs from 'node:fs';
import * as readline from 'node:readline';

export async function processLineByLine(path: string, callback: (line: string) => string | undefined): Promise<string> {
  const fileStream = fs.createReadStream('/etc/hosts');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Number.POSITIVE_INFINITY,
  });

  let data = '';

  for await (const line of rl) {
    data += callback(line) ?? '';
  }

  return data;
}

export async function writeToHostsFile(data: string): Promise<void> {
  await fs.promises.writeFile('/etc/hosts', data);
}

export async function removeAllBlockedWebsites(): Promise<void> {
  const start = /# deep-work-cli start/g;
  const end = /# deep-work-cli end/g;

  let started = false;

  const data = await processLineByLine('/etc/hosts', line => {
    if (start.test(line)) {
      started = true;
    }

    if (!started) {
      return line + '\n';
    }

    if (end.test(line)) {
      started = false;
    }
  });

  await writeToHostsFile(data);
}

export async function removeOneUrl(url: string): Promise<void> {
  let hosts = String(await fs.promises.readFile('/etc/hosts'));

  for (const str of [`0.0.0.0 ${url}`, `:: ${url}`]) hosts = hosts.replace(str, '');

  await writeToHostsFile(hosts);
}
