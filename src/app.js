function rating() {
  const main = document.querySelector("main");

  const ratingComponentTemplate = document
    .getElementById("rating-template")
    .content.cloneNode(true);
  const ratingComponent = ratingComponentTemplate.querySelector("#rating");
  const ratingForm = ratingComponent.querySelector("#rating-form");
  let submittedValue = undefined;

  main.appendChild(ratingComponent);

  ratingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(ratingForm);
    submittedValue = formData.get("rating");

    showRatingSuccessMsg();
  });

  function showRatingSuccessMsg() {
    const ratingSuccessMsg = document
      .getElementById("rating-success-template")
      .content.cloneNode(true);

    if (!submittedValue) throw new Error("Invalid submitted value.");

    ratingSuccessMsg.querySelector("#user-output").textContent = submittedValue;
    ratingComponent.replaceWith(ratingSuccessMsg);
  }
}

function init() {
  rating();
}

init();
