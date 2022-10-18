var form = document.getElementById("formulario");

form.addEventListener(
  "submit",
  function (event) {
    event.preventDefault();
    form.classList.add("was-validated");
    if (!form.checkValidity()) {
      return;
    }

    var myModalEl = document.getElementById("exampleModal");
    var modal = bootstrap.Modal.getInstance(myModalEl);
    modal.hide();
  },
  false
);
