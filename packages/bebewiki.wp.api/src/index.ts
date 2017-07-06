import * as WpApi from 'wpapi';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var apiPromise = WpApi.discover('https://www.bebewiki.com').then(function (site) {
    return site.auth({
        username: "bebewiki",
        password: "bebewiki-13579"
    });
});

apiPromise.then(function (site) {
    // site.posts().create({
    //     title: 'asdfads',
    //     content: 'dsfasdf',
    //     status: 'draft'
    // }).then(function (response) {
    //     // "response" will hold all properties of your newly-created post,
    //     // including the unique `id` the post was assigned on creation
    //     console.log(response.id);
    // }).catch(console.error);
    site.posts().id(35).then(console.log);
})



