import { OnePunchCommander } from "../types";

export interface CreateOptions {
  org: string;
}

export interface CreatePrepareInfo {
  template: string;
  name: string;
  description: string;
  author: string;
  version: string;
}

class OnePunchCreate implements OnePunchCommander {
  private options: CreateOptions;
  private prepareInfo: CreatePrepareInfo = {} as CreatePrepareInfo;
  constructor(options: CreateOptions) {
    this.options = options;
    this.init();
  }

  async init() {
    await this.beforeExec();
    await this.exec();
    await this.afterExec();
  }

  async beforeExec() {}

  async exec() {}
  async afterExec() {}
}

export function create(options: CreateOptions) {
  new OnePunchCreate(options);
}
