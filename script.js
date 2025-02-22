const title = [
  "Hi Destine, i just want to say from the first when we meet in cafeteria.",
  "i feel something different like i want to know destine closer",
  "so i decided before valentine i want to get know about destine",
  "the chance come when i wait for my friend in javanese outlet to picked up food and so destine too",
  "we getting know each other from that precious time, so we can still know each other till now ( ~ v ~ )",
];

const titledinner = [
  "so destine today i want to invite destine to dinner together and hang out",
  "we can eat destine favorite food maybe i know a place which may destine like or destine can recommend it too",
  "we will do a lot agenda together tommorow and know each other deeper",
  "so destine can we hang out together tommorow?",
];

let titleshow = document.getElementById("title");

let titleindex = 0;

let disabledbutton = document.getElementById("buttontitle");

let image = document.getElementById("image");

const calltitle = setInterval(() => {
  if (titleindex < title.length) {
    if (titleindex == title.length - 1) {
      disabledbutton.disabled = false;
    }
    titleshow.innerHTML = title[titleindex];
    titleindex = titleindex + 1;
  } else {
    titleindex = 0;
  }
  console.log(titleshow);
}, 5000);

function getstages() {
  disabledbutton.remove();
  titleindex = 1;
  titleshow.innerHTML = titledinner[0];
  clearInterval(calltitle);
  const calldinner = setInterval(() => {
    if (titleindex < titledinner.length) {
      titleshow.innerHTML = titledinner[titleindex];
      titleindex = titleindex + 1;
    } else {
      const choice = document.getElementById("choice");
      const yes = document.createElement("button");
      const yestext = document.createTextNode("yes");
      const no = document.createElement("button");
      const notext = document.createTextNode("no");
      yes.className = "button";
      no.className = "button-no";
      yes.id = "yes";
      no.id = "no";
      yes.appendChild(yestext);
      no.appendChild(notext);
      yes.addEventListener("click", yesClick);
      no.addEventListener("click", noClick);
      choice.appendChild(yes);
      choice.appendChild(no);
      titleindex = 0;
      clearInterval(calldinner);
    }
    console.log(titleshow);
  }, 5000);
  image.src = "./bearlove.gif";
}

function yesClick() {
  titleshow.innerHTML = "YEAHHHHHHHH";
  image.src = "./yeah.gif";

  setTimeout(() => {
    titleshow.innerHTML = "love youuuu";
    image.src = "./kiss.gif";
  }, 3000);

  const no = document.getElementById("no");
  if (no != null) no.remove();
  const yes = document.getElementById("yes");
  yes.remove();
}

function noClick() {
  titleshow.innerHTML = "Click Yes :(";
  const no = document.getElementById("no");
  no.remove();
  image.src = "./cry.gif";
}
