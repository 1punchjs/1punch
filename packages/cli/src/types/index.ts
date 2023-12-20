export interface OnePunchCommander {
  init(): void;
  beforeExec(): void;
  exec(): void;
  afterExec?(): void;
}
