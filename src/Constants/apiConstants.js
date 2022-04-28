export const base_url = "https://hacker-news.firebaseio.com/v0/"
export const endpoints = {
    topStories:'topstories',
    item:'item/'
}
export const getURL = (endpoint) => {
    return `${base_url}${endpoint}.json`
}
export const perPageCount = 10