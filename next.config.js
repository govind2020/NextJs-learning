/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects:async()=>{
        return [
            {
                source:'/users',
                destination:'/',
                permanent:false
            },
            {
                source:'/users/:usersid', // this is for redirect
                destination:'/',
                permanent:false
            },
            { // just an a example 
                source:'/collage', // ifthe page dont exist then it also re-direct the page
                destination:'/',
                permanent:false
            }
        ]
    }
}

module.exports = nextConfig
