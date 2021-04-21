function engineerCard(data) {
    return `<div class="col-4 mb-5">
    <div class="card shadow-lg">
    <div class="card-header text-white bg-warning">
        <h2 class="card-title">${data.name}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${data.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${data.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${data.getGitHub()}" target="_blank"
                    rel="noopener noreferrer">github</a></li>
        </ul>
    </div>
    </div>
</div>`
}


module.exports = engineerCard;