const mainInput = document.getElementById('main-input');
const copyButton = document.getElementById('copy-button');
const deniedButton = document.getElementById('denied');
const aiDeniedButton = document.getElementById('aidenied');
const clearButton = document.getElementById('clear-button');
const bttns = [
  'bttn1', 'bttn2', 'bttn3', 'bttn4', 'bttn5', 'bttn6', 'bttn7', 'bttn8', 'bttn9', 'bttn10', 'bttn11', 'bttn12', 'bttn13'
];

const defaultMsg = `Hello @, thank you for taking the time to submit an allowlist application with us! Your application is currently pending alterations, as not all of your responses currently meet our criteria for allowlisting. Before we can accept your application, we would like you to amend your responses to the following:\n\n`;
const endMsg = `\n\nPlease reply to this ticket with your amended responses. If your amendments meet our criteria, your application will be accepted, and you will be allowlisted. If your amendments do not meet our criteria, or if you do not provide a response within 24 hours, your application will be denied and you will be required to re-apply.\n\nThank you again for applying, and we hope to see you on the server sometime soon! :)`;

let customMessage = false; 

mainInput.value = defaultMsg;

copyButton.addEventListener('click', () => {
  if (!customMessage && !mainInput.value.includes(endMsg)) {
    mainInput.value += endMsg;
  }
  
  mainInput.select();
  document.execCommand('copy');
  copyButton.disabled = true; 
});

clearButton.addEventListener('click', () => {
  mainInput.value = defaultMsg;
  copyButton.disabled = false;
  customMessage = false;
});

deniedButton.addEventListener('click', () => {
  mainInput.value = `Hello @, thank you again for taking the time to apply for allowlisting.\n\nUnfortunately, your application has been denied at this time due to the lack of effort/lack of detail. We are looking for **more in-depth**, **detailed answers** showing you understand the rules and what we expect when it comes to role-playing on this server. Take this time to put some thought into your answers if you wish to reapply. We encourage you to submit a new application in **7** days. Also, please take the time to re-read our rules and submit a Support Ticket if you have any questions.\n\nWe sincerely hope your next application is successful!`;
  customMessage = true;
});

aiDeniedButton.addEventListener('click', () => {
  mainInput.value = `Hello @, appreciate your interest in joining ProductionRP. After careful review and consideration, we regret to inform you that your application for allowlist access has been **denied**.\n\nOur allowlist program aims to maintain a controlled and secure environment for our community members. As part of our evaluation process, we carefully assess the use of various technologies and tools. Unfortunately, after a thorough assessment, we have determined that the use of AI in the context of ProductionRP does not align with our current guidelines and objectives.\n\nWe understand the potential benefits that AI can offer, but we have decided to prioritize other approaches that align more closely with our vision for the community. This decision was made after careful consideration of the impact on user experience, security, and the overall integrity of the platform.\n\nWe sincerely appreciate the effort you put into your application and your interest in contributing to the ProductionRP community. While we are unable to proceed with your application at this time, we encourage you to explore alternative avenues for involvement within the community.\n\nThank you for your understanding. We wish you the best in your future endeavors.\n\nYou may reapply in **7** days.`;
  customMessage = true; 
});

bttns.forEach((bttnId, index) => {
  document.getElementById(bttnId).addEventListener('click', () => {
    mainInput.value += getText(index);
    customMessage = false; 
  });
});

function getText(index) {
  switch (index) {
    case 0: return `\n\n> 2. Please link our set of rules to confirm you have read, understood, and agree to follow them\n**Please ensure that you have included the updated rules.**`;
    case 1: return `\n\n> 4. Describe your understanding of what it means to provide good quality, serious roleplay beyond just staying in character:\n**Please elaborate on your response to show a more thorough understanding. Our Roleplay Rules 1. And 2. provide examples that can help.**`;
    case 2: return `\n\n> 5. In your own words, and using multiple examples other than meta-gaming, describe your understanding of power-gaming and how it hinders roleplay:\n**Please elaborate on your response to show a more thorough understanding of power-gaming and provide at least 2 examples. Our Roleplay Rule on Power Gaming provides examples that can help.**`;
    case 3: return `\n\n> 6. In your own words, and using multiple examples, describe your understanding of not valuing the lives of others (NVL) and how it hinders roleplay:\n**Please elaborate on your response to show a more thorough understanding of what it means to value lives and provide at least 2 examples. Our Roleplay Rules feature multiple examples that can help.**`;
    case 4: return `\n\n> 8. Please tell us about the character(s) you plan on playing here, such as who they are, what their backstory is, and what led them to be in our city:\n**Please ensure that your character fits within our Roleplay Rules and standards.**`;
    case 5: return `\n\n> 8. Please tell us about the character(s) you plan on playing here, such as who they are, what their backstory is, and what led them to be in our city:\n**Please elaborate on your character's backstory to show the quality of RP we expect from our players.**`;
    case 6: return `\n\n> 9. What does your character hope to accomplish in this city?:\n**Please ensure that your character's goals fit within our Roleplay Rules and standards.**`;
    case 7: return `\n\n> 10. You have just left BurgerShot when two individuals approach you with weapons and demand that you hand over your order, so you do. Later, you are walking with three of your friends and pass the same two individuals sitting alone at Legion Square, where they begin to tease you in regards to the BurgerShot robbery. How do you proceed?:\n**Please elaborate on your response to show the quality of roleplay interactions that are expected of our players. (we want to put roleplay > gunplay/PVP at all times)**`;
    case 8: return `\n\n> 11. You're new to the city and a shady-looking guy offers to sell you a cheap car in cash only. Later while driving, you are pulled over by the police and are detained because the car is stolen. What do you say to try to talk your way out of jail?:\n**Please elaborate on your response to show the quality roleplay interactions that are expected of our players. (we want to put roleplay > gunplay/PVP at all times)**`;
    case 9: return `\n\n> 12. While in prison, another inmate approaches you and tells you that he's found a way out of prison that involves using an emote to phase through a door and offers to use it to break you out. How do you proceed?:\n**Please elaborate on your response to show the quality roleplay interactions that are expected of our players.**`;
    case 10: return `\n\n> 12. While in prison, another inmate approaches you and tells you that he's found a way out of prison that involves using an emote to phase through a door and offers to use it to break you out. How do you proceed?:\n**Please confirm to report any rule break you encounter either by doing /a in-game or opening a ticket in discord**`;
    case 11: return `\n\n> 8. Please tell us about the character(s) you plan on playing here, such as who they are, what their backstory is, and what led them to be in our city:\n**Please ensure that your character fits within our Roleplay Rules and standards.**\n*AND*\n**Please elaborate on your character's backstory to show the quality of RP we expect from our players.**`;
    case 12: return `\n\n> 12. While in prison, another inmate approaches you and tells you that he's found a way out of prison that involves using an emote to phase through a door and offers to use it to break you out. How do you proceed?:\n**Please elaborate on your response to show the quality roleplay interactions that are expected of our players.**\n*AND*\n**Please confirm to report any rule break you encounter either by doing /a in-game or opening a ticket in discord**`;
    default: return '';
  }
}
