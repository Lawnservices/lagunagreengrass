const mas = document.getElementById('lawn');
const mass = document.getElementById('header');
const masss = document.getElementById('frent');

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if(scroll_position > 300 ) {
    lawn.style.display = 'block';
    header.style.backgroundColor = '#0366b6';
    frent.style.width = '90%';
    frent.style.height = '200px';
    frent.style.borderBottomLeftRadius = '0.2cm';
    frent.style.borderBottomRightRadius = '0.2cm';
    frent.style.boxShadow = '0px 0px 5px rgb(22,56,87)';
    document.getElementById('lawn').innerHTML = 'Call-Now';
     
   
  } else{
    lawn.style.display = 'none';
    header.style.backgroundColor = '#04aa6d';
    frent.style.boxShadow = 'none';
    frent.style.width = '100%';
    frent.style.height = '360px';
    frent.style.borderBottomLeftRadius = 'none';
    frent.style.borderBottomRightRadius = 'none';
    }
   
});
document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if(scroll_position  > 500 ) {
    header.style.backgroundColor = '#299684';
    header.style.color = '#ffff';
    frent.style.display= 'none';
  } else{
     frent.style.display= '';
     
  }
});
