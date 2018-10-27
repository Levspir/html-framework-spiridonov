const url = new URL("https://api.nytimes.com/svc/books/v3/lists/overview.json"),
    params = {"api-key": "3d63ab34a2954ad6b7d44a9ebaa218c1", "published_date": "2013-05-22"};
Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
fetch(url, {
    method: 'GET',
})
    .then((request) => request.json())
    .then((data)=> data.results["lists"])
    .then((data)=> {
        for (let i of data) {
            console.log(i["display_name"]);
            console.log(i["books"].length)
        }
    });



