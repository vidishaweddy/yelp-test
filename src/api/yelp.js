import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 7YxM-JzoUq6KcN4OuG-ymtgPJjhaFpufZKg7XepnxnAkqry31WQ3Du8aSBGmyyr5EirmOOJqeW88DGkNya7wD1KaMIJVRtWBpaug7CMbpOonObD-obrP2WxUjDA-XnYx'
    }
})