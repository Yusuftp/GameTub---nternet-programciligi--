document.addEventListener('DOMContentLoaded', function() {
    const loginLink = document.getElementById('login-link');
    const signupLink = document.getElementById('signup-link');
    const commentForm = document.getElementById('comment-form');
    const commentList = document.getElementById('comment-list');
  
    loginLink.addEventListener('click', function(event) {
      event.preventDefault();
      alert('Giriş yap butonuna tıklandı.');
      // Burada giriş yapılması gereken işlemleri gerçekleştirebilirsiniz.
    });
  
    signupLink.addEventListener('click', function(event) {
      event.preventDefault();
      alert('Üye ol butonuna tıklandı.');
      // Burada üye olma işlemleri gerçekleştirilebilir.
    });
  
    commentForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const nameInput = document.getElementById('name');
      const commentInput = document.getElementById('comment');
  
      const name = nameInput.value;
      const comment = commentInput.value;
  
      if (name.trim() === '' || comment.trim() === '') {
        alert('Lütfen isim ve yorum alanlarını doldurun.');
        return;
      }
  
      const commentItem = document.createElement('li');
      commentItem.classList.add('comment');
      commentItem.innerHTML = `<strong>${name}</strong>: ${comment}`;
      commentList.appendChild(commentItem);
  
      nameInput.value = '';
      commentInput.value = '';
    });
  });
  