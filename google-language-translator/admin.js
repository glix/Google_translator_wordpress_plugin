jQuery(document).ready(function(){
  var language_display = jQuery('input[name=googlelanguagetranslator_language_option]:checked').val();
  
      if ( language_display == 'all') {
       jQuery ('.languages').css('display','none');
	   jQuery ('.choose_flags').css('display','none');
		
	} else if (language_display == 'specific') {
	   jQuery ('.languages').css('display','inline');
	   jQuery ('.choose_flags_intro').css('display','none');
	   jQuery ('.choose_flags').css('display','none');
	}
	
  jQuery('input[name=googlelanguagetranslator_language_option]').change(function(){
      if( jQuery(this).val() == 'all'){
       jQuery ('.languages').fadeOut("slow");
	   jQuery ('.choose_flags_intro').css('display','');
		 var flag_display = jQuery('input[name=googlelanguagetranslator_flags]:checked').val();
		 if ( flag_display == 'show_flags') {
		  jQuery ('.choose_flags').css('display','');
		}
	} else if (jQuery(this).val() == 'specific') {
	   jQuery ('.languages').fadeIn("slow");
	   jQuery ('.choose_flags_intro').css('display','none');
	   jQuery ('.choose_flags').css('display','none');
	}
  });
      
  var language_display = jQuery('input[name=googlelanguagetranslator_language_option]:checked').val();    
  var flag_display = jQuery('input[name=googlelanguagetranslator_flags]:checked').val();
      if ( flag_display == 'hide_flags') {
       jQuery ('.choose_flags').css('display','none');
	} else if (flag_display == 'show_flags') {
	    if ( language_display == 'all') {
	      jQuery ('.choose_flags').css('display','');
	    }
	}
	
  jQuery('input[name=googlelanguagetranslator_flags]').change(function(){
      if( jQuery(this).val() == 'hide_flags'){
       jQuery ('.choose_flags').fadeOut("slow");
	} else if (jQuery(this).val() == 'show_flags') {
	   jQuery ('.choose_flags').fadeIn("slow");
	}
  });
});
  

  



