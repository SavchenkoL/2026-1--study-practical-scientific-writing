import { ConventionalChangelog } from 'conventional-changelog';
import angular from 'conventional-changelog-angular';
export * from 'conventional-changelog';
export class StandardChangelog extends ConventionalChangelog {
    constructor(cwdOrGitClient) {
        super(cwdOrGitClient);
        this.config(angular());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUE7QUFDOUQsT0FBTyxPQUFPLE1BQU0sZ0NBQWdDLENBQUE7QUFFcEQsY0FBYyx3QkFBd0IsQ0FBQTtBQUV0QyxNQUFNLE9BQU8saUJBQWtCLFNBQVEscUJBQXFCO0lBQzFELFlBQVksY0FBOEM7UUFDeEQsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBRXJCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtJQUN4QixDQUFDO0NBQ0YifQ==