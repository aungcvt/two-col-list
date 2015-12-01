/* making same height for two col layout js */
$(document).ready(function() {
  var list_length 	= $('.two-col-list li').length;
  var odd_heights 	= [];
  var even_heights 	= [];
  var all_heights 	= [];

  $('.two-col-list li').each(function(i) {
    var box_height = $(this).find('p').outerHeight();
    if(i%2 === 0) {
      even_heights.push(box_height);
    } else {
      odd_heights.push(box_height);
    }
  });

  for(var a=0; a< even_heights.length; a++) {
    var temp = (even_heights[a] > odd_heights[a])? even_heights[a]: odd_heights[a] ;
    all_heights.push(temp);
    all_heights.push(temp);
  }

  $('.two-col-list li').each(function(i) {
    $(this).find('p').height(all_heights[i]);
  });

});
