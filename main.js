var form = document.getElementById("formulario");

form.addEventListener(
  "submit",
  function (event) {
    form.classList.add("was-validated");
    if (!form.checkValidity()) {
      event.preventDefault();
      return;
    }

    var myModalEl = document.getElementById("exampleModal");
    var modal = bootstrap.Modal.getInstance(myModalEl);
    modal.hide();
  },
  false
);
