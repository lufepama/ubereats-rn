import { YELP_API } from '../backend'
const apiKey = '_OLaKEZMqHKcgENmTHJzcG31DTqVsvv4ZgrbZQspdTSjFR5kLeA9Gdu9fQH8VtpA5naCM6xA7Ki3agcinYJsIEITIw6ubJPu2ZTVcEjcrLkNk6mGHSVcDpuILkRzYXYx'

export const getBusinesses = () => {
    return fetch(`${YELP_API}/businesses/search?location=madrid`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
    })
        .then((res) => {
            return res.json()
        })
        .catch((err) => { console.log('err', err) })
}