function suggestGame() {
  const q1 = document.getElementById('q1').value;
  const q2 = document.getElementById('q2').value;
  const q3 = document.getElementById('q3').value;
  const q4 = document.getElementById('q4').value;
  const q5 = document.getElementById('q5').value;

  let game = "";
  let steamUrl = "";
  let alternativeGame1 = "";
  let alternativeGame2 = "";
  let alternativeUrl1 = "";
  let alternativeUrl2 = "";

  if (q1 === "action" && q2 === "pc" && q3 === "yes" && q4 === "teens" && q5 === "long") {
      game = "Counter-Strike 2";
      steamUrl = "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/";
  } else if (q1 === "adventure" && q2 === "console" && q3 === "no" && q4 === "adults" && q5 === "long") {
      game = "The Witcher 3: Wild Hunt";
      steamUrl = "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/";
  } else if (q1 === "puzzle" && q2 === "mobile" && q3 === "no" && q4 === "kids" && q5 === "short") {
      game = "Candy Crush Saga";
      steamUrl = "https://www.king.com/game/candycrush";  // Not a Steam link, as Candy Crush is not on Steam
  } else if (q1 === "strategy" && q2 === "pc" && q3 === "yes" && q4 === "adults" && q5 === "medium") {
      game = "Civilization VI";
      steamUrl = "https://store.steampowered.com/app/289070/Sid_Meiers_Civilization_VI/";
  } else if (q1 === "sports" && q2 === "console" && q3 === "yes" && q4 === "teens" && q5 === "short") {
      game = "FIFA 23";
      steamUrl = "https://store.steampowered.com/app/1811260/EA_SPORTS_FIFA_23/";
  } else {
      // Default suggestions based on game type and platform
      if (q1 === "action" && q2 === "pc") {
          alternativeGame1 = "Counter-Strike: Global Offensive";
          alternativeUrl1 = "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/";
          alternativeGame2 = "DOOM Eternal";
          alternativeUrl2 = "https://store.steampowered.com/app/782330/DOOM_Eternal/";
      } else if (q1 === "adventure" && q2 === "console") {
          alternativeGame1 = "The Witcher 3: Wild Hunt";
          alternativeUrl1 = "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/";
          alternativeGame2 = "Red Dead Redemption 2";
          alternativeUrl2 = "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/";
      } else if (q1 === "puzzle" && q2 === "mobile") {
          alternativeGame1 = "Candy Crush Saga";
          alternativeUrl1 = "https://www.king.com/game/candycrush";  // Not a Steam link
          alternativeGame2 = "Monument Valley";
          alternativeUrl2 = "https://play.google.com/store/apps/details?id=com.ustwo.monumentvalley&hl=en&gl=US";
      } else if (q1 === "strategy" && q2 === "pc") {
          alternativeGame1 = "Civilization VI";
          alternativeUrl1 = "https://store.steampowered.com/app/289070/Sid_Meiers_Civilization_VI/";
          alternativeGame2 = "Total War: Three Kingdoms";
          alternativeUrl2 = "https://store.steampowered.com/app/779340/Total_War_THREE_KINGDOMS/";
      } else if (q1 === "sports" && q2 === "console") {
          alternativeGame1 = "FIFA 23";
          alternativeUrl1 = "https://store.steampowered.com/app/1811260/EA_SPORTS_FIFA_23/";
          alternativeGame2 = "NBA 2K23";
          alternativeUrl2 = "https://store.steampowered.com/app/1927310/NBA_2K23/";
      } else {
          // Default games if no specific match found
          alternativeGame1 = "Among Us";
          alternativeUrl1 = "https://store.steampowered.com/app/945360/Among_Us/";
          alternativeGame2 = "Fall Guys";
          alternativeUrl2 = "https://store.steampowered.com/app/1097150/Fall_Guys_Ultimate_Knockout/";
      }
  }

  const resultDiv = document.getElementById('result');
  if (game) {
      resultDiv.innerHTML = `Önerilen Oyun: <a href="${steamUrl}" target="_blank">${game}</a>`;
  } else {
      resultDiv.innerHTML = `Önerilen Oyunlar: <a href="${alternativeUrl1}" target="_blank">${alternativeGame1}</a> ve <a href="${alternativeUrl2}" target="_blank">${alternativeGame2}</a>`;
  }
}
