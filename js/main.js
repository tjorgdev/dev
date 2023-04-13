jQuery(document).ready(function() {
    jQuery('.intro-tab').click(function() {
        //set active tab/unactive tabs
        jQuery('.active').removeClass('active');
        jQuery(this).addClass('active');

        jQuery('.arrow-translate').removeClass('arrow-translate');
        jQuery('.arrow-down-intro').addClass('arrow-translate');


        //show current view
        jQuery('.intro-view').css("display", "flex");
        jQuery('.skills-view').css("display", "none");
        jQuery('.work-view').css("display", "none");

    });
    jQuery('.skills-tab').click(function() {
        jQuery('.active').removeClass('active');
        jQuery(this).addClass('active');
        console.log("blog");

        jQuery('.arrow-translate').removeClass('arrow-translate');
        jQuery('.arrow-down-skills').addClass('arrow-translate');


        //show current view
        jQuery('.skills-view').css("display", "flex");
        jQuery('.work-view').css("display", "none");
        jQuery('.intro-view').css("display", "none");

    });
    jQuery('.work-tab').click(function() {
        jQuery('.active').removeClass('active');
        jQuery(this).addClass('active');
        console.log("work");

        jQuery('.arrow-translate').removeClass('arrow-translate');
        jQuery('.arrow-down-work').addClass('arrow-translate');



        console.log("work");

        //show current view
        jQuery('.skills-view').css("display", "none");
        jQuery('.work-view').css("display", "flex");
        jQuery('.intro-view').css("display", "none");

    });


});