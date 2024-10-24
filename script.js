const apiUrl = "https://api.github.com/users/svenons";
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        document.getElementById('profile-pic').src = data.avatar_url;
        document.getElementById('name').textContent = `Hi, I'm ${data.name}! 👋`;
      })
      .catch(error => {
        console.log("Error fetching GitHub data: ", error);
      });