const commentForm = document.querySelector('#commentForm');
const commentsContainer = document.querySelector('#comments'); 

commentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const userInput = commentForm.elements.username;//elements is most important as it contains all my input texts
    const commentInput = commentForm.elements.newComment;
    
    const commentList = document.createElement('li');
    const userName = document.createElement('h4');
    const newComment = document.createElement('p');
    
    userName.append(userInput.value + " says..");//adding name to h4 heading
    newComment.append(commentInput.value);//adding new comment to p tag
    //now i want to add these two i.e my name along with my comment to list li
    commentList.append(userName);
    commentList.append(newComment);
    commentsContainer.append(commentList);

    userInput.value = "";
    commentInput.value = "";
});

/* <li>

</li>
<h4>shatakshi</h4>
<p>cool</p> */