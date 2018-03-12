(function () {
    var theScriptHTML = document.getElementById('nav-bar-template').innerHTML;
    var theTemplate = Handlebars.compile(theScriptHTML);
    var contextObj = `
    <div class="navbar navbar-dark box-shadow">
    <div class="container d-flex justify-content-between">
        <a href="#" class="navbar-brand d-flex align-items-center">
            <img class="logo-dashboard" src="assets/images/logo2.svg" alt="Logo">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader"
            aria-expanded="true" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
</div>
    `
    var compiledData = theTemplate(contextObj);

    document.getElementById('dashboard-template').innerHTML = compiledData;
}());