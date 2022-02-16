import { GetUserRepoResponse } from "./interfaces"

const getUserRepos = (username: string): Promise<GetUserRepoResponse[]> => {
  return fetch(`https://api.github.com/users/${username}/repos`).then(res =>
    res.json()
  )
}

const exports = {
  getUserRepos
}

export default exports
