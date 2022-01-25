$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $(".preview-theme").click(function () {
    $("link")[1].href = $(this).data("theme");
    var imgSrcData =
      $(this).data("theme-bg") === "light" ? "dark-src" : "light-src";
    $("img[data-" + imgSrcData + "]").each(function () {
      $(this).attr("src", $(this).data(imgSrcData));
    });

    return false;
  });
});

// Bootstrap form validation example
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      var forms = document.getElementsByClassName("needs-validation");
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();
