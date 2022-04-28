import { endpoints, perPageCount } from "../../Constants/apiConstants"
import { get } from "../../Utils/ApiHelperFunctions"

export const getTopStoriesList = async () => {
    try {
        // will add dispatch as needed
        var storiesList = await get(endpoints.topStories)
        const storiesToGet = storiesList.splice(0, perPageCount);
        const storyDetails = await getMultipleItems(storiesToGet);
        return Promise.resolve({ storiesList, storyDetails });
    } catch (error) {
        return Promise.reject(error)
    }
}
export const getMultipleItems = async (itemIds) => {
    try {
        const items = await Promise.all(itemIds.map(async (item) => {
            const response = await getSingleItem(item)
            return Promise.resolve(response)
        }))
        return Promise.resolve(items)
    } catch (error) {
        return Promise.reject(error)
    }
}
export const getSingleItem = async (storyId) => {
    try {
        const details = await get(`${endpoints.item}${storyId}`)
        return Promise.resolve(details)
    } catch (error) {
        return Promise.reject(error)
    }
}