

const commentListData = localStorage.getItem("commentList")
  ? JSON.parse(localStorage.getItem("commentList"))
  : [];

function addNewComment() {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const comment = document.getElementById('comment').value

    const commentData = {
        name: name,
        email: email,
        comment: comment
    };

    commentListData.push(commentData);
    localStorage.setItem("commentList", JSON.stringify(commentListData));
    updateNewComment()
}

function updateNewComment() {
    const commentListDom = document.getElementById("comments")
    commentListDom.innerHTML = ""
    let row = ""
    commentListData.forEach((comment, index) => {
        row += `
                <div class="comment-box">
                <div class="comment-header">
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png">
                    <div>
                        <strong>${comment.name}</strong><br>
                        <span class="comment-date">${comment.email}</span>
                    </div>
                </div>
                <div class="comment-text">
                    <p>${comment.comment}</p>
                </div>
            </div>
                `
    });
    commentListDom.innerHTML = row
}

updateNewComment()