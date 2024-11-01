const fetchGithub = () => {
    const username = document.getElementById('usernameInput').value
    console.log(`The username is: ${username}`);

    fetch(`https://api.github.com/users/${username}`)
        .then((res) => res.json())
        .then((data) => {
            showGithubDetails(data);
        })
}

const showGithubDetails = (json) => {
    const {avatar_url, name, created_at, login, bio, public_repos, followers, following, location, blog, twitter_username, company} = json

    document.getElementById('profile_img').setAttribute('src', avatar_url)
    document.getElementById('name').innerText = name ? name : "Not available"
    document.getElementById('joined_date').innerText = `Joined ${created_at}`
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