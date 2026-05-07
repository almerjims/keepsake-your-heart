// 💌 Edit this file to personalize your scrapbook.
import photo1 from "@/assets/photo1.jpg";
import photo2 from "@/assets/photo2.jpg";
import photo3 from "@/assets/photo3.jpg";
import photo4 from "@/assets/photo4.jpg";
import photo5 from "@/assets/photo5.jpg";
import photo6 from "@/assets/photo6.jpg";

export const HER_NAME = "My Love";
export const FROM_NAME = "Yours, always";

export const intro = {
  headline: "Happy Birthday,",
  highlight: "my favorite person",
  subtitle:
    "I made you a little corner of the internet — stitched together with our memories, my favorite versions of you, and every reason I’m so lucky.",
};

export const timeline = [
  {
    date: "The day we met",
    title: "Hello, you.",
    note: "I didn't know yet that this was the beginning of everything.",
    photo: photo3,
  },
  {
    date: "First long walk",
    title: "Talked until our feet hurt",
    note: "We missed dinner. I'd do it again tomorrow.",
    photo: photo1,
  },
  {
    date: "First trip together",
    title: "Tiny suitcase, huge memory",
    note: "You fell asleep on my shoulder on the train.",
    photo: photo5,
  },
  {
    date: "That night with sparklers",
    title: "Light, everywhere",
    note: "Your laugh out-shined them all.",
    photo: photo4,
  },
  {
    date: "Today",
    title: "Still choosing you",
    note: "And every tomorrow, too.",
    photo: photo6,
  },
];

export const gallery = [
  { src: photo1, caption: "golden hour, you" },
  { src: photo2, caption: "little things" },
  { src: photo3, caption: "our usual order ☕" },
  { src: photo4, caption: "sparklers & you" },
  { src: photo5, caption: "field of pinks" },
  { src: photo6, caption: "picnic sunday 🍓" },
];

export const loveNotes = [
  { text: "Thank you for being so soft with my heart.", color: "blush" },
  { text: "You make ordinary tuesdays feel like a gift.", color: "peach" },
  { text: "I love how you laugh at your own jokes first.", color: "lavender" },
  { text: "Your hand in mine = my favorite place.", color: "sage" },
  { text: "I’d pick you in every universe.", color: "blush" },
  { text: "You are my best decision.", color: "peach" },
];

export const favorites = [
  { icon: "🍝", label: "favorite date", value: "candle-lit pasta night" },
  { icon: "😂", label: "funniest moment", value: "you vs. the automatic door" },
  { icon: "🍓", label: "favorite food together", value: "strawberries, always" },
  { icon: "🌙", label: "late night talks", value: "2am, the world asleep" },
  { icon: "🎶", label: "songs that are us", value: "the playlist below ↓" },
  { icon: "📸", label: "favorite photo of you", value: "the one in the field" },
];

// 🎙️ Voice messages — drop your own audio file URLs into `audio`.
// Leave `audio` as undefined to use the simulated waveform-only playback.
export const voiceMessages = [
  {
    id: "birthday",
    title: "Happy Birthday",
    caption: "the very first thing I wanted you to hear today.",
    timestamp: "Recorded at 6:02 AM",
    note: "couldn't wait until you woke up ♡",
    duration: 38,
    color: "blush",
    tilt: -1.5,
    audio: undefined as string | undefined,
  },
  {
    id: "goodnight",
    title: "Goodnight, love",
    caption: "for the nights I'm not there to tuck you in.",
    timestamp: "Recorded at 11:48 PM",
    note: "play me on loop, I won't mind",
    duration: 42,
    color: "lavender",
    tilt: 1.2,
    audio: undefined,
  },
  {
    id: "proud",
    title: "I'm so proud of you",
    caption: "a reminder, in case you forget today.",
    timestamp: "Recorded on a Tuesday",
    note: "every single day. truly.",
    duration: 31,
    color: "peach",
    tilt: -0.8,
    audio: undefined,
  },
  {
    id: "iloveyou",
    title: "Random I love you",
    caption: "no reason. just felt it and had to say it.",
    timestamp: "Recorded at 3:17 PM",
    note: "stuck in traffic, thinking of you",
    duration: 18,
    color: "blush",
    tilt: 1.6,
    audio: undefined,
  },
  {
    id: "comfort",
    title: "When everything feels heavy",
    caption: "breathe with me for a sec, okay?",
    timestamp: "Recorded at 2:14 AM",
    note: "couldn't sleep, so I made this",
    duration: 55,
    color: "sage",
    tilt: -1.1,
    audio: undefined,
  },
  {
    id: "funny",
    title: "Something dumb I had to share",
    caption: "I laughed alone for like five minutes.",
    timestamp: "Recorded yesterday",
    note: "you're going to roll your eyes",
    duration: 22,
    color: "peach",
    tilt: 0.9,
    audio: undefined,
  },
  {
    id: "future",
    title: "For future us",
    caption: "open this one a year from today.",
    timestamp: "Recorded today",
    note: "save it. promise?",
    duration: 47,
    color: "lavender",
    tilt: -1.4,
    audio: undefined,
  },
];

export const secretVoiceMessage = {
  title: "the one I almost didn't send",
  caption: "I rewrote this a hundred times in my head.",
  timestamp: "Recorded at 1:03 AM, on your birthday eve",
  reveal: "No matter what happens, I'll always choose you ❤️",
  duration: 60,
  audio: undefined as string | undefined,
};

export const openWhen = [
  {
    key: "sad",
    label: "Open when you're sad",
    color: "blush",
    letter:
      "Hey, my love. Breathe. I'm right here, even if I'm not. Whatever it is, it's allowed to be heavy — and you don't have to carry it alone. I love you in your softest, smallest moments most of all.",
  },
  {
    key: "stressed",
    label: "Open when you're stressed",
    color: "peach",
    letter:
      "Close your eyes for ten seconds. Drink some water. You are doing more than enough, and you are more than what's on your to-do list. I'm so proud of you, today and always.",
  },
  {
    key: "miss",
    label: "Open when you miss me",
    color: "lavender",
    letter:
      "I miss you too. Probably right now. Wherever you're reading this — imagine me kissing the top of your head. Always coming back to you.",
  },
  {
    key: "motivation",
    label: "Open when you need motivation",
    color: "sage",
    letter:
      "You've done hard things before and you'll do them again. I've watched you become the person you wanted to be. Keep going — I've got front-row seats.",
  },
  {
    key: "reassurance",
    label: "Open when you need reassurance",
    color: "blush",
    letter:
      "Yes. Still. Always. Nothing has changed. You are loved, fully and on purpose. There is no version of this where I stop choosing you.",
  },
];

export const finalLetter = `To my favorite person —

Thank you for being born. Thank you for being you, exactly as you are: soft and stubborn, brilliant and a little chaotic, my best friend and my home.

I hope this year is gentle with you. I hope it brings the kind of mornings you love and the kind of laughter that hurts your face. And whatever it brings, I'll be right here — beside you, behind you, cheering the loudest.

Happy birthday, my love. ❤️`;
