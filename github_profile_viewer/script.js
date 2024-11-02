const fetchGithub = () => {
    const username = document.getElementById('usernameInput').value

    fetch(`https://api.github.com/users/${username}`)
        .then((res) => res.json())
        .then((data) => {
            showGithubDetails(data);
        })
        .catch((err) => {
            usernameNotFound();
        })
}

const showGithubDetails = (json) => {
    const notFoundPar = document.getElementById('username_not_found')
    notFoundPar.style.display = "none"

    const {avatar_url, name, created_at, login, bio, public_repos, followers, following, location, blog, twitter_username, company} = json;
    const date = new Date(created_at);
    const dateFormatter = new Intl.DateTimeFormat(
        'en-PH', {
            dateStyle: "long"
        }
    )

    document.getElementById('profile_img').setAttribute('src', avatar_url)
    document.getElementById('name').innerText = name ? name : "Not available"
    document.getElementById('joined_date').innerText = `Joined ${dateFormatter.format(date)}`
    document.getElementById('github_username').innerText = "@" + login
    document.getElementById('bio').innerText = bio ? bio : "Not available"
    document.getElementById('repo_count').innerText = public_repos
    document.getElementById('followers_count').innerText = followers
    document.getElementById('following_count').innerText = following
    document.getElementById('location').innerText = location ? location : "Not available"
    document.getElementById('website').innerText = blog ? blog : "Not available"
    document.getElementById('twitter_username').innerText = twitter_username ? twitter_username: "Not available"
    document.getElementById('organization').innerText = company ? company : "Not available"
}

const usernameNotFound = () => {
    const notFoundPar = document.getElementById('username_not_found')
    notFoundPar.style.display = "block"

    document.getElementById('profile_img').setAttribute('src', "images/person-circle-white.svg")
    document.getElementById('name').innerText = "Name"
    document.getElementById('joined_date').innerText = "Date Created"
    document.getElementById('github_username').innerText = "@username"
    document.getElementById('bio').innerText = "Username's Bio"
    document.getElementById('repo_count').innerText = "#"
    document.getElementById('followers_count').innerText = "#"
    document.getElementById('following_count').innerText = "#"
    document.getElementById('location').innerText = "Location"
    document.getElementById('website').innerText = "website.com"
    document.getElementById('twitter_username').innerText = "@twitter"
    document.getElementById('organization').innerText =  "Organization"
}