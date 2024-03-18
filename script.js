jQuery(document).ready(function () {
	
    jQuery('#botao_18').addClass('ativado');
    jQuery('.data-dia_18').addClass('ativo');
    jQuery('.data-numero_18').addClass('ativo');
   
   jQuery('.accordion-titulo').click(function () {

  
       jQuery('.accordion-conteudo').slideUp();

       const setaCima = jQuery(this).find('.seta_cima');
       const setaBaixo = jQuery(this).find('.seta_baixo');

       jQuery('.accordion-titulo').not(this).removeClass('ativado');

       const divSuperior = jQuery(this).closest('.accordion-titulo');
       divSuperior.toggleClass('ativado');


       const conteudo = jQuery(this).next('.accordion-conteudo');
       if (conteudo.is(':visible')) {
           conteudo.slideUp();
           setaBaixo.show();
           setaCima.hide();
       } else {
           conteudo.slideDown();
           setaBaixo.toggle();
           setaCima.toggle();
       }

       jQuery('.accordion-titulo').not(divSuperior).find('.seta_cima').hide();
       jQuery('.accordion-titulo').not(divSuperior).find('.seta_baixo').show();
      
               
   });
   
           
   
   
   
   
   
});
