import type { ConventionalGitClient } from '@conventional-changelog/git-client';
import { ConventionalChangelog } from 'conventional-changelog';
export * from 'conventional-changelog';
export declare class StandardChangelog extends ConventionalChangelog {
    constructor(cwdOrGitClient: string | ConventionalGitClient);
}
//# sourceMappingURL=index.d.ts.map