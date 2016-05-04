import * as github from "../clients/github";


class ConfigModule {
    config: github.GithubConfig;
} 

class ClientModule extends ConfigModule {
    config: github.GithubConfig
    
    // replace with DI library yay
        githubClient: github.GithubIssuesClient = new github.GithubIssuesClient(this.config)
}