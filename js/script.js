$(document).ready(function() {
    $('#fullpage').fullpage({
    sectionsColor : ['#313131', '#FFF8ED', '#2E323B', '#fff8ed'],
    css3: true,
    anchors:['home','projects', 'about', 'contact'],
    menu: '.navbar-right',
    autoScrolling: false,
    afterLoad: function(anchorLink, index){
            var loadedSection = $(this);

            if(anchorLink == 'home'){
              $('.navbar').removeClass('affix');
              $('.navbar-brand').addClass('hidden');
            } else {
              $('.navbar').addClass('affix');
              $('.navbar-brand').removeClass('hidden');
            };

            $('.carousel').carousel('pause');
    }

    });
});
/* #F05F40 #eb3812 #2C3E50 #3D3F3E #383C3F #2c001e #140e1a #ff4714 #2e323b #ceb78d #F7ECD9

afterLoad: function(anchorLink, index){
        var loadedSection = $(this);

        if(anchorLink == 'home'){
          $('.navbar').removeClass('affix');
          $('.navbar-brand').addClass('hidden');
        } else {
          $('.navbar').addClass('affix');
          $('.navbar-brand').removeClass('hidden');
        };

        <img class="img-responsive" src="img/profile.png" alt="">
        $('.name').before('<img class="img-responsive" src="img/profile.png" alt="">');
}

*/
