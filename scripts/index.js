const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];
const profileEditButton = document.querySelector(".profile__arrow");
const profileEditModal = document.querySelector("#modal-edit");
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__subheading");
const callModal = document.querySelectorAll(".modal");
const modalInputName = profileEditModal.querySelector("#modal__input-name");
const modalInputDescription = document.querySelector(
  "#modal__input-description"
);
const cardEditModal = document.querySelector("#modal-card-edit");
const cardAddButton = document.querySelector("#add-button");
cardAddButton.addEventListener("click", () => {
  openPopup(cardEditModal);
});
const cardModalClose = document.querySelector("#card-modal-close");
const profileModalClose = document.querySelector("#profile-modal-close");
const cardEditForm = document.querySelector("#modal-card-form");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardListEl = document.querySelector(".card-wrapper");
const cardTitle = document.querySelector("#card__image-title");
const cardUrl = document.querySelector("#card__image-url");
const cardCaption = document.querySelector(".card__caption");
const cardImage = document.querySelector(".card__image");
function closePopup() {
  profileEditModal.classList.remove("modal_opened");
  cardEditModal.classList.remove("modal_opened");
}
cardModalClose.addEventListener("click", (e) => {
  e.preventDefault();
  // modal is not defined
  closePopup(cardAddButton);
});
profileModalClose.addEventListener("click", () => {
  closePopup(modal);
});
function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__icon");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__icon_active");
  });
  cardElement
    .querySelector(".card__delete")
    .addEventListener("click", () => deleteCard(cardElement));
  cardTitleEl.textContent = cardData.name;
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  return cardElement;
}

function deleteCard(e) {
  e.remove();
}

profileEditButton.addEventListener("click", () => {
  modalInputName.value = profileName.textContent;
  modalInputDescription.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_opened");
});
function openPopup(modal) {
  cardEditModal.classList.add("modal_opened");
}

profileEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileName.textContent = modalInputName.value;
  profileDescription.textContent = modalInputDescription.value;
  closePopup();
});

cardEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  cardModalClose(cardEditModal);
  const cardData = {
    name: cardTitle.value,
    link: cardUrl.value,
  };
  cardListEl.prepend(getCardElement(cardData));
  cardEditForm.reset();
});

initialCards.forEach(function (cardData) {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});
