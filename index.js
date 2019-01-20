
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

