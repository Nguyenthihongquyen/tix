var element = document.createElement('script');  
element.setAttribute('src','https://code.jquery.com/jquery-3.5.1.slim.min.js');
document.body.appendChild(element);

element = document.createElement('script');  
element.setAttribute('src','https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js');
document.body.appendChild(element);

element = document.createElement('script');  
element.setAttribute('src','https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js');
document.body.appendChild(element);

function openSideNav(){
    document.getElementsByTagName('header')[0].style.height = "100%";
    document.getElementsByTagName('header')[0].style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    document.getElementById('navbarCollapse').style.zIndex = "2";
    document.getElementById('sideNav').style.width = "70%";
}

function closeSideNav(){
    document.getElementsByTagName('header')[0].style.height = "60px";
    document.getElementsByTagName('header')[0].style.backgroundColor = 'rgba(0, 0, 0, 0)';
    document.getElementById('navbarCollapse').style.zIndex = "";
    document.getElementById('sideNav').style.width = "0";
}

function setSrc(src){
    document.getElementById('video').src = src + "?modestbranding=1&amp;showinfo=0";
}

function closeModal(){
    document.getElementById('video').src = "";
}
