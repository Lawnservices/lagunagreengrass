const mas = document.getElementById('lawn');
const mass = document.getElementById('header');
const masss = document.getElementById('frent');
const mes = document.getElementById('titulo');
const mess = document.getElementById('spa');
const casas = document.getElementById('casa');
const homes = document.getElementById('home');
const pie = document.getElementById('footer');

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
    homes.style.color = 'blue';
    
     
     
   
  } else{
    lawn.style.display = 'none';
    header.style.backgroundColor = '#04aa6d';
    frent.style.boxShadow = 'none';
    frent.style.width = '100%';
    frent.style.height = '360px';
    frent.style.borderBottomLeftRadius = 'none';
    frent.style.borderBottomRightRadius = 'none';
     homes.style.color = '#fff';
     homes.style.fontWeight= "bold";
    }
   
});
document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if(scroll_position  > 500 ) {
    header.style.backgroundColor = '#299684';
    header.style.color = '#ffff';
    frent.style.display= 'none';
    titulo.style.background = '#0366b6';
    spa.style.color = '#fff';
    casas.style.backgroundColor = 'rgba(0,0,0,0.2)';
    footer.style.height = '120px';
    footer.style.backgroundColor = '#026484';
     
     

    

  } else{
     frent.style.display= '';
     titulo.style.background = 'none';
        spa.style.color = '#000';
         casas.style.backgroundColor = '#fff';
         footer.style.height = '140px';
    footer.style.backgroundColor = '#299684';
     
  }
});
