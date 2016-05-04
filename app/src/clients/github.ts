import * as https from 'https';

export class GithubConfig {
    baseUrl: String;
    privateKey: String;
}

export interface GithubClient {
    config: GithubConfig;
}
/*
* Api requests for the issues endpoints. Note that a github PR is an issue, so this also deals with PR related endpoints 
*/
export class GithubIssuesClient implements GithubClient  {
     config: GithubConfig
     constructor(config: GithubConfig) {
         this.config = config
     }

    listIssuesForRepo(owner: String, repo: String) {
        
        let path = `/user/issues/${owner}/${repo}` 
        https.get(this.config.baseUrl + path)
        
    }  
}