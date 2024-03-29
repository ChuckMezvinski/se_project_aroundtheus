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

/* Variables*/
const modal = document.querySelectorAll(".modal");
const addCardButton = document.querySelector(".profile__add-button");
const cardModal = document.querySelector("#cardModal");
const cardTitle = document.querySelector(".card__title");
const cardLink = document.querySelector(".card__image");
const cardModalTitle = document.querySelector("#card-modal__input-title");
const cardModalLink = document.querySelector("#card-modal__input-imagelink");
// const cardModalClose = document.querySelector("#card-modal__close");
const cardModalSave = document.querySelector("#cardModal__button");
const cardsWrap = document.querySelector(".card-wrapper");
const likeButton = document.querySelectorAll(".card__icon");

const profileEditButton = document.querySelector(".profile__arrow");
const profileModal = document.querySelector("#profileModal");
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__subheading");

const modalInputName = document.querySelector("#profileModal__input-name");
const modalInputDescription = document.querySelector(
  "#profileModal__input-description"
);

// const profileModalClose = document.querySelector("#profile-modal__close");
const profileModalForm = document.forms["profileModalForm"];
const cardModalForm = document.forms["cardModalForm"];
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardListEl = document.querySelector(".card-wrapper");

const cardModalImage = document.querySelector(".cardImage__modal-image");
const imageModal = document.querySelector("#imageModal");
const imageModalText = document.querySelector(".card__imageModal-text");

// EVENT HANDLERS
function openModal(modal) {
  modal.classList.add("modal_opened");

  const closeButton = modal.querySelector(".modal__close");
  closeButton.addEventListener("click", () => closeModal());
}

function closeModal() {
  document.querySelector(".modal_opened").classList.remove("modal_opened");
}

addCardButton.addEventListener("click", () => {
  openModal(cardModal);
});

profileModalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileName.textContent = modalInputName.value;
  profileDescription.textContent = modalInputDescription.value;
  closeModal(profileModal);
});

cardModalForm.addEventListener("submit", (e) => {
  closeModal(cardModal);
  e.preventDefault();
  const cardData = {
    name: cardModalTitle.value,
    link: cardModalLink.value,
  };
  cardsWrap.prepend(getCardElement(cardData));
  cardModalForm.reset();
});

profileEditButton.addEventListener("click", () => {
  modalInputName.value = profileName.textContent;
  modalInputDescription.value = profileDescription.textContent;
  openModal(profileModal);
});

// CREATE NEW CARD FUNCTION
function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__icon");

  cardTitleEl.textContent = cardData.name;
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.link;

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__icon-button_active");
  });

  cardImageEl.addEventListener("click", () => {
    handleImageClick(cardData);
  });

  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", () => deleteCard(cardElement));

  return cardElement;
}

function handleImageClick(imageData) {
  openModal(imageModal);
  cardModalImage.src = imageData.link;
  imageModalText.textContent = imageData.name;
  cardModalImage.alt = imageData.alt;
}

initialCards.forEach((cardData) => {
  cardsWrap.prepend(getCardElement(cardData));
});

// DELETE CARD FUNCTION
function deleteCard(element) {
  element.remove();
}
