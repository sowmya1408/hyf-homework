export const GetUserNames = (searchTerm) => {
    const SEARCH_URL = `https://api.github.com/search/users?q=${searchTerm}`
   return fetch(SEARCH_URL).then(res => res.json())
}