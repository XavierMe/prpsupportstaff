const mainInput = document.getElementById('main-input');
const bttn1 = document.getElementById('bttn1');
const bttn2 = document.getElementById('bttn2');
const bttn3 = document.getElementById('bttn3');
const bttn4 = document.getElementById('bttn4');
const bttn5 = document.getElementById('bttn5');
const bttn6 = document.getElementById('bttn6');
const bttn7 = document.getElementById('bttn7');
const bttn8 = document.getElementById('bttn8');
const bttn9 = document.getElementById('bttn9');
const bttn10 = document.getElementById('bttn10');
const bttn11 = document.getElementById('bttn11');
const defaultMsg = `Hello @, thank you for taking the time to submit an allowlist application with us! Your application is currently pending alterations, as not all of your responses currently meet our criteria for allowlisting. Before we can accept your application we would like you to amend your responses to the following:


`
const copyButton = document.getElementById('copy-button');
let messageCopied = false;




copyButton.addEventListener('click', () => {

    mainInput.value += `


Please reply to this ticket with your amended responses. If your amendments meet our criteria your application will be accepted and you will be allowlisted. If your amendments do not meet our criteria, or if you do not provide a response within 24 hours, your application will be denied and you will be required to re-apply.
            
Thank you again for applying, and we hope to see you on the server some time soon! :)`

  if (!messageCopied) {
    mainInput.select();
    document.execCommand('copy');
    copyButton.disabled = true;
    messageCopied = true;
  }
});
  




mainInput.value = defaultMsg;

bttn1.addEventListener('click', () => {
  mainInput.value += `
    > 2. Please link both sets of our rules to confirm you have read, understood and agree to follow them.
  **Please ensure that you have included both sets of rules.**
  `;
});

bttn2.addEventListener('click', () => {
  mainInput.value += ` 
    > 4. Describe your understanding of what it means to provide good quality, serious roleplay beyond just staying in character:
  **Please elaborate on your response to show a more thorough understanding. Our Roleplay Rules 1. And 2. provide examples that can help.**
  `;
});
bttn3.addEventListener('click', () => {
    mainInput.value += `
    > 5. In your own words, and using multiple examples other than meta-gaming, describe your understanding of power-gaming and how it hinders roleplay:
    **Please elaborate on your response to show a more thorough understanding of power-gaming and provide at least 2 examples. Our Roleplay Rule on Power Gaming provides examples that can help.**
    `;
  });

bttn4.addEventListener('click', () => {
    mainInput.value += `
    > 6. In your own words, and using multiple examples, describe your understanding of not valuing the lives of others (NVL) and how it hinders roleplay:
    **Please elaborate on your response to show a more thorough understanding of what it means to value lives and provide at least 2 examples. Our Roleplay Rules feature multiple examples that can help.**
    `;
  });

bttn5.addEventListener('click', () => {
    mainInput.value += `
    > 8. Please tell us about the character(s) you plan on playing here, such as who they are, what their backstory is, and what lead them to be in our city:
    **Please ensure that your character fits within our Roleplay Rules and standards.**
    `;
  });
bttn6.addEventListener('click', () => {
    mainInput.value += `
    > 8. Please tell us about the character(s) you plan on playing here, such as who they are, what their backstory is, and what lead them to be in our city:
    **Please elaborate on your character's backstory to show the quality of RP we expect from our players.**
    `;
  });
bttn7.addEventListener('click', () => {
    mainInput.value += `
    > 9. What does your character hope to accomplish in this city?:
    **Please ensure that your character's goals fit within our Roleplay Rules and standards.**    
    `;
  });
bttn8.addEventListener('click', () => {
    mainInput.value += `
    > 10. You have just left BurgerShot when two individuals approach you with weapons and demand that you hand over your order, so you do. Later, you are walking with three of your friends and pass the same two individuals sitting alone at Legion Square, where they begin to tease you in regards to the BurgerShot robbery. How do you proceed?:
    **Please elaborate on your response to show the quality of roleplay interactions that are expected of our players. (If necessary specify that we want to put roleplay > gunplay/PVP at all times)**    
    `;
  });
bttn9.addEventListener('click', () => {
    mainInput.value += `
    > 11. You're new to the city and a shady looking guy offers to sell you a cheap car in cash only. Later while driving, you are pulled over by the police and are detained because the car is stolen. What do you say to try to talk your way out of jail?:
    **Please elaborate on your response to show the quality roleplay interactions that are expected of our players. (If necessary specify that we want to put roleplay > gunplay/PVP at all times)**
    `;
  });
  bttn10.addEventListener('click', () => {
    mainInput.value += `
    > 12. While in prison, another inmate approaches you and tells you that he's found a way out of prison that involves using an emote to phase through a door and offers to use it to break you out. How do you proceed?:
    **Please elaborate on your response to show the quality roleplay interactions that are expected of our players.**        
    `;
  });
  bttn11.addEventListener('click', () => {
    mainInput.value += `
    > 12. While in prison, another inmate approaches you and tells you that he's found a way out of prison that involves using an emote to phase through a door and offers to use it to break you out. How do you proceed?:
    **Please confirm to report any rule break your encounter either by doing /a in game or opening a ticket in discord**
    `;
  });


  bttn12.addEventListener('click', () => {
    mainInput.value += `
    > 8. Please tell us about the character(s) you plan on playing here, such as who they are, what their backstory is, and what lead them to be in our city:
    **Please ensure that your character fits within our Roleplay Rules and standards.**
    *AND*
    **Please elaborate on your character's backstory to show the quality of RP we expect from our players.**
    `;
  });
  bttn13.addEventListener('click', () => {
    mainInput.value += `
    > 12. While in prison, another inmate approaches you and tells you that he's found a way out of prison that involves using an emote to phase through a door and offers to use it to break you out. How do you proceed?:
    **Please elaborate on your response to show the quality roleplay interactions that are expected of our players.**
    *AND*
    **Please confirm to report any rule break your encounter either by doing /a in game or opening a ticket in discord**
    `;
  });