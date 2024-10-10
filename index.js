const navLinks = document.querySelectorAll(".sections li a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const sectionId = link.getAttribute("href");

    const section = document.querySelector(sectionId);

    section.scrollIntoView({ behavior: "smooth" });
  });
});

AOS.init();

const Colors = {
  error: "red",
  primary: "orangered",
  secondary: "gray",
};

const fullName = document.getElementById("name-input");
const email = document.getElementById("email-input");
const subject = document.getElementById("subject-input");
const message = document.getElementById("msg-input");
const sendBtn = document.getElementById("send-msg");

function validateName(Name) {
  const nameRegex = /^[a-zA-Z\s]+$/;
  if (Name.match(nameRegex)) {
    return true;
  } else {
    fullName.style.color = Colors.error;
    sendBtn.style.backgroundColor = Colors.error;
    return false;
  }
}

function validateEmail(Email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.(com|org|net|edu)$/;
  if (Email.match(emailRegex)) {
    return true;
  } else {
    email.style.color = Colors.error;
    sendBtn.style.backgroundColor = Colors.error;
    return false;
  }
}

function validateSubject(Subject) {
  if (Subject.trim() !== "") {
    return true;
  } else {
    subject.style.color = Colors.error;
    sendBtn.style.backgroundColor = Colors.error;
    return false;
  }
}

function validateMessage(Message) {
  if (Message.trim() !== "") {
    return true;
  } else {
    message.style.color = Colors.error;
    sendBtn.style.backgroundColor = Colors.error;
    return false;
  }
}

function handleError() {
  const validName = validateName(fullName.value);
  const validEmail = validateEmail(email.value);
  const validSubject = validateSubject(subject.value);
  const validMessage = validateSubject(message.value);

  if (validName && validEmail && validSubject && validMessage) {
    document
      .querySelectorAll(".input input")
      .forEach((input) => (input.style.color = Colors.secondary));

    sendBtn.style.backgroundColor = "green";
    sendBtn.textContent = "Message Sent";

    setTimeout(() => {
      sendBtn.style.backgroundColor = Colors.primary;
      sendBtn.textContent = "Send Message";
    }, 3000);

    document
      .querySelectorAll(".input input")
      .forEach((input) => (input.value = ""));
  }
}

const buttons = document.querySelectorAll(".featured-Q button");
const answers = document.querySelectorAll(".featured-Q p");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    answers.forEach((answer) => answer.classList.add("hidden"));
    answers.forEach((answer) => answer.classList.remove("show"));

    answers[index].classList.remove("hidden");
    answers[index].classList.add("show");
  });
});

answers[0].classList.add("hidden");
answers[0].classList.remove("show");

answers[1].classList.add("hidden");
answers[1].classList.remove("show");

answers[2].classList.add("hidden");
answers[2].classList.remove("show");
