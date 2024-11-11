const achievementList = localStorage.getItem("achievementList")
  ? JSON.parse(localStorage.getItem("achievementList"))
  : [];

function updateListAchievement() {
  const achievementListDom = document.getElementById("achievementList");
  achievementListDom.innerHTML = "";
  let row = "";
  achievementList.forEach((achievement, index) => {
    row += `
              <tr>
                  <td class=${
                    achievement.isDone ? "text-decoration-line-through" : ""
                  }>${achievement.name}</td>
                  <td>
                      <input class="form-check-input" type="checkbox" value="true" id="flexCheckChecked" ${
                        achievement.isDone ? "checked" : null
                      } onclick="checkAchievement(${index})">
                  </td>
                  <td>
                      <button class="btn btn-danger" onclick="deleteAchievement(${index})">Delete</button>
                  </td>
              </tr>
            `;
  });
  achievementListDom.innerHTML = row;
}

function checkAchievement(index) {
  achievementList[index].isDone = !achievementList[index].isDone;

  localStorage.setItem("achievementList", JSON.stringify(achievementList));

  updateListAchievement();
}

function deleteAchievement(index) {
  achievementList.splice(index, 1);

  localStorage.setItem("achievementList", JSON.stringify(achievementList));

  updateListAchievement();
}
function addAchievementDidTapped() {
  const achievementName = document.getElementById("inputAchievement");
  if (
    achievementName.value === undefined ||
    achievementName.value === null ||
    achievementName.value === ""
  )
    return;

  const achievement = {
    name: achievementName.value,
    isDone: false,
  };

  achievementList.push(achievement);
  achievementName.value = "";
  localStorage.setItem("achievementList", JSON.stringify(achievementList));

  updateListAchievement();
}

updateListAchievement();
