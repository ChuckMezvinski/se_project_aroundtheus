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

const modalInputName = profileEditModal.querySelector("#modal__input-name");
const modalInputDescription = document.querySelector(
  "#modal__input-description"
);
const cardEditModal = document.querySelector("#modal-card-edit");
const cardAddButton = document.querySelector("#add-button");
cardAddButton.addEventListener("click", () => {
  openPopup(cardEditModal);
})
const profileModalClose = document.querySelector(".modal__close");

const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardListEl = document.querySelector(".card-wrapper");

function closePopup() {
  profileEditModal.classList.remove("modal_opened");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  cardTitleEl.textContent = cardData.name;
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  return cardElement;
}

profileEditButton.addEventListener("click", () => {
  modalInputName.value = profileName.textContent;
  modalInputDescription.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_opened");
});

function openPopup(popup) {
  popup.classList.add("modal_opened")
}
const cardModalClose = document.querySelector("#card-modal-close");

// ... (your existing code)

const cardImageUrlInput = cardEditModal.querySelector("#modal__input-image-url");

cardAddButton.addEventListener("click", () => {
  openPopup(cardEditModal);
});

// Modify the function to handle adding a card
function addCard() {
  const cardData = {
    name: "Custom Card",
    link: cardImageUrlInput.value,
  };

  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);


  closePopup(cardEditModal);


  cardImageUrlInput.value = "";
}

const cardModalClose = cardEditModal.querySelector("#card-modal-close");
cardModalClose.addEventListener("click", () => {
  closePopup(cardEditModal);
});

const cardEditForm = cardEditModal.querySelector("#modal-card-edit-form");
cardEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addCard();
});

profileModalClose.addEventListener("click", () => {
  openPopup(profileEditModal);
});

profileEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileName.textContent = modalInputName.value;
  profileDescription.textContent = modalInputDescription.value;
  closePopup();
});

initialCards.forEach(function (cardData) {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});

initialCards.forEach(function (obj) {
  console.log(obj);
});
