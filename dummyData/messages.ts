const messages = [
  {
    id: 1,
    name: "Daphnie",
    avatar:
      "https://image.shutterstock.com/image-photo/close-shot-adorable-african-american-260nw-1042917214.jpg",
    message: "Hello Jiale!",
  },
  {
    id: 2,
    name: "Jiale",
    avatar:
      "http://thumbs.xdesktopwallpapers.com/wp-content/uploads/2011/02/Girl-Smiling-Face-Closeup-720x405.jpg",
    message: "Hey Daphnie!",
  },
  {
    id: 3,
    name: "Jiale",
    avatar:
      "https://64.media.tumblr.com/09744cf63cb6ef9dc22a15e28a9a9c33/tumblr_inline_pjzz05ukfn1sq56mk_500.jpg",
    message: "This is a test message. Let's see how it goes for now",
  },
  {
    id: 4,
    name: "Jiale",
    avatar:
      "https://www.dentist-lieberman.com/palm-harbor-dentist/wp-content/uploads/461777879.jpg",
    message: "This is a test message. Let's see how it goes for now",
  },
  {
    id: 5,
    name: "Jiale",
    avatar:
      "https://www.news-medical.net/image.axd?picture=2019%2F4%2FBy_Rido.jpg",
    message: "This is a test message. Let's see how it goes for now",
  },
  {
    id: 6,
    name: "Daphnie",
    avatar:
      "https://image.shutterstock.com/image-photo/close-shot-adorable-african-american-260nw-1042917214.jpg",
    message:
      "This is a test message. Let's see how it goes for now. Let's see how it goes for now. Let's see how it goes for now. Let's see how it goes for now. Let's see how it goes for now. Let's see how it goes for now. Let's see how it goes for now. Let's see how it goes for now. Let's see how it goes for now. Let's see how it goes for now. Let's see how it goes for now. Let's see how it goes for now. Let's see how it goes for now. Let's see how it goes for now. Let's see how it goes for now",
  },

  {
    id: 7,
    name: "Daphnie",
    avatar:
      "https://image.shutterstock.com/image-photo/close-shot-adorable-african-american-260nw-1042917214.jpg",
    message: "This is a test message. Let's see how it goes for now",
  },

  {
    id: 8,
    name: "Daphnie",
    avatar:
      "https://image.shutterstock.com/image-photo/close-shot-adorable-african-american-260nw-1042917214.jpg",
    message: "This is a test message. Let's see how it goes for now",
  },
  {
    id: 9,
    name: "Jiale",
    avatar:
      "https://img.freepik.com/free-photo/good-morning-happy-funny-man-smile-face-handsome-smiling-young-guy-positive-human-facial-expressions-emotions-smiling-hangover-hipster-man-close-up-face-monday-morning-again_265223-8235.jpg?size=626&ext=jpg",
    message: "This is a test message. Let's see how it goes for now",
  },
  {
    id: 10,
    name: "Daphnie",
    avatar:
      "https://image.shutterstock.com/image-photo/close-shot-adorable-african-american-260nw-1042917214.jpg",
    message: "This is a test message. Let's see how it goes for now",
  },

  {
    id: 11,
    name: "Daphnie",
    avatar:
      "https://image.shutterstock.com/image-photo/close-shot-adorable-african-american-260nw-1042917214.jpg",
    message: "This is a test message. Let's see how it goes for now",
  },
  {
    id: 12,
    name: "Jiale",
    avatar:
      "https://img.freepik.com/free-photo/good-morning-happy-funny-man-smile-face-handsome-smiling-young-guy-positive-human-facial-expressions-emotions-smiling-hangover-hipster-man-close-up-face-monday-morning-again_265223-8235.jpg?size=626&ext=jpg",
    message: "This is a test message. Let's see how it goes for now",
  },
  {
    id: 13,
    name: "Daphnie",
    avatar:
      "https://image.shutterstock.com/image-photo/close-shot-adorable-african-american-260nw-1042917214.jpg",
    message: "This is a test message. Let's see how it goes for now",
  },

  {
    id: 14,
    name: "Daphnie",
    avatar:
      "https://image.shutterstock.com/image-photo/close-shot-adorable-african-american-260nw-1042917214.jpg",
    message: "This is a test message. Let's see how it goes for now",
  },
  {
    id: 15,
    name: "Jiale",
    avatar:
      "https://img.freepik.com/free-photo/good-morning-happy-funny-man-smile-face-handsome-smiling-young-guy-positive-human-facial-expressions-emotions-smiling-hangover-hipster-man-close-up-face-monday-morning-again_265223-8235.jpg?size=626&ext=jpg",
    message: "This is a test message. Let's see how it goes for now",
  },
  {
    id: 16,
    name: "Daphnie",
    avatar:
      "https://image.shutterstock.com/image-photo/close-shot-adorable-african-american-260nw-1042917214.jpg",
    message: "This is a test message. Let's see how it goes for now",
  },

  {
    id: 17,
    name: "Daphnie",
    avatar:
      "https://image.shutterstock.com/image-photo/close-shot-adorable-african-american-260nw-1042917214.jpg",
    message: "This is a test message. Let's see how it goes for now",
  },
  {
    id: 18,
    name: "Jiale",
    avatar:
      "https://img.freepik.com/free-photo/good-morning-happy-funny-man-smile-face-handsome-smiling-young-guy-positive-human-facial-expressions-emotions-smiling-hangover-hipster-man-close-up-face-monday-morning-again_265223-8235.jpg?size=626&ext=jpg",
    message: "This is a test message. Let's see how it goes for now",
  },
  {
    id: 19,
    name: "Daphnie",
    avatar:
      "https://image.shutterstock.com/image-photo/close-shot-adorable-african-american-260nw-1042917214.jpg",
    message: "This is a test message. Let's see how it goes for now",
  },

  {
    id: 20,
    name: "Daphnie",
    avatar:
      "https://image.shutterstock.com/image-photo/close-shot-adorable-african-american-260nw-1042917214.jpg",
    message: "This is a test message. Let's see how it goes for now",
  },
  {
    id: 21,
    name: "Jiale",
    avatar:
      "https://img.freepik.com/free-photo/good-morning-happy-funny-man-smile-face-handsome-smiling-young-guy-positive-human-facial-expressions-emotions-smiling-hangover-hipster-man-close-up-face-monday-morning-again_265223-8235.jpg?size=626&ext=jpg",
    message: "This is a test message. Let's see how it goes for now",
  },
  {
    id: 22,
    name: "Daphnie",
    avatar:
      "https://image.shutterstock.com/image-photo/close-shot-adorable-african-american-260nw-1042917214.jpg",
    message: "This is a test message. Let's see how it goes for now",
  },

  {
    id: 23,
    name: "Daphnie",
    avatar:
      "https://image.shutterstock.com/image-photo/close-shot-adorable-african-american-260nw-1042917214.jpg",
    message: "This is a test message. Let's see how it goes for now",
  },
  {
    id: 24,
    name: "Jiale",
    avatar:
      "https://img.freepik.com/free-photo/good-morning-happy-funny-man-smile-face-handsome-smiling-young-guy-positive-human-facial-expressions-emotions-smiling-hangover-hipster-man-close-up-face-monday-morning-again_265223-8235.jpg?size=626&ext=jpg",
    message: "This is a test message. Let's see how it goes for now",
  },
];

export default messages;
