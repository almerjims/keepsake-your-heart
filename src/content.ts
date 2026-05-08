// 💌 Edit this file to personalize the birthday gift.
import photo1 from "@/assets/photo1.jpg";
import photo2 from "@/assets/photo2.jpg";
import photo3 from "@/assets/photo3.jpg";
import photo4 from "@/assets/photo4.jpg";
import photo5 from "@/assets/photo5.jpg";
import photo6 from "@/assets/photo6.jpg";

export const HER_NAME = "my love";

export const intro = {
  small: "someone made something special for you…",
  title: "happy birthday",
  highlight: "my love",
  button: "open your gift",
  scribble: "i hope this works properly hehe",
};

// 🎁 Folded notes inside the gift box
export const giftNotes = [
  { text: "you make every ordinary day feel like a soft sunday morning ♡", color: "blush" },
  { text: "reason #47 you're amazing: the way you laugh at your own jokes first.", color: "peach" },
  { text: "i promise: more handmade things. more silly notes. more us.", color: "lavender" },
  { text: "you're the best person i know and i'm not even being dramatic.", color: "sage" },
  { text: "sending you a hug. imagine it. it's a really good one.", color: "blush" },
  { text: "physical gift pending when i get back home hehe 🎁", color: "peach" },
];

// ✉️ Birthday letters in the envelope
export const letters = [
  {
    title: "a little letter",
    body: `hey you,\n\ni'm not the best at making websites yet, but i wanted to make something just for you. today is your day, so this little thing is here to remind you that you're loved.\n\nhappy birthday ♡`,
    sign: "— me",
  },
  {
    title: "ps.",
    body: `if anything on this site is broken, pretend it's a feature. i made it at like 1am and i was very serious about the doodles.`,
    sign: "— me again",
  },
];

// 📸 Polaroids
export const polaroids = [
  { src: photo1, caption: "this one is cute" },
  { src: photo2, caption: "saving this because yes" },
  { src: photo3, caption: "our usual ☕" },
  { src: photo4, caption: "sparklers!! 🎇" },
  { src: photo5, caption: "one of my favorites hehe" },
  { src: photo6, caption: "okay one more" },
];

// 🕯️ Cake wish reveal
export const cake = {
  prompt: "make a wish ✨",
  reveal: "wish granted (probably). happy birthday my love ♡",
};

// 🤫 Hidden voice message (click the tiny heart 3x)
export const hiddenVoice = {
  caption: "oh. you found it.",
  timestamp: "recorded at 1:03 am",
  reveal: "no matter what happens, i'll always choose you ❤️",
  audio: undefined as string | undefined,
  duration: 42,
};

// 🌟 Final unlock
export const finalLetter = `to my favorite person —\n\nthank you for being born. thank you for being you, exactly as you are.\n\ni hope this year is gentle with you, full of small good mornings and the kind of laughter that hurts your face.\n\nsorry if some parts are a little messy, i made it with love.\n\nhappy birthday my love ❤️`;
