function managerCard (data){
     return `<div class="col-4 mb-5">
     <div class="card shadow-lg">
    <div class="card-header text-white bg-info">
        <h2 class="card-title"> ${data.name} </h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i> ${data.getRole()} </h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID:  ${data.id} </li>
            <li class="list-group-item">Email: <a href="mailto: ${data.email} "> ${data.email} </a></li>
            <li class="list-group-item">Office number:  ${data.getOfficeNumber()} </li>
        </ul>
    </div>
    </div>
</div>`
}

module.exports = managerCard;
