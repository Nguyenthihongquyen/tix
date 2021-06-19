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
    document.getElementById('navbarCollapse').style.zIndex = "99";
    document.getElementById('navbarCollapse').style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    document.getElementById('sideNav').style.width = "70%";
}

function closeSideNav(){
    document.getElementById('navbarCollapse').style.zIndex = "-1";
    document.getElementById('navbarCollapse').style.backgroundColor = 'rgba(0, 0, 0, 0)';
    document.getElementById('sideNav').style.width = "0";
}