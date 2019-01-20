$(document).ready(function () {
    $('.forgot-pass').click(function(event) {
      $(".pr-wrap").toggleClass("show-pass-reset");
    }); 
    
    $('.pass-reset-submit').click(function(event) {
      $(".pr-wrap").removeClass("show-pass-reset");
    }); 
});
function kayitOl(){
localStorage.setItem('kullaniciAdi',document.getElementById('kullaniciAdi').value);
localStorage.setItem('sifre',document.getElementById('sifre').value);
alert('Kaydınız Alındı Giris yapabilirsiniz');
window.location.href = 'giris.html';
}
function girisYap(){
if(document.getElementById('kullanici').value == localStorage.getItem('kullaniciAdi') && document.getElementById('sifresi').value == localStorage.getItem('sifre')){
    window.location.href = 'anaSayfa.html';
}else{
    alert('Kullanici adi veya şifre hatalı');
}
}

$(document).ready(function () {
    $('.forgot-pass').click(function(event) {
      $(".pr-wrap").toggleClass("show-pass-reset");
    }); 
    
    $('.pass-reset-submit').click(function(event) {
      $(".pr-wrap").removeClass("show-pass-reset");
    }); 
});

