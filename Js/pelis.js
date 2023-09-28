$(document).ready(function(){

    $(".seleccionador-de-categoria").change(function(){
        let categoria=$(this).val();
        switch(categoria){
            case "0":

                $(".contenedor .item2").show();
                $(".contenedor .item3").show();
                $(".contenedor .item4").show();
                $(".contenedor .item5").show();
                $(".contenedor article ").width(220);
            break;

            case "1":
                
                $(".contenedor .item2").show();
                $(".contenedor .item3").show();
                $(".contenedor .item4").hide();
                $(".contenedor .item5").hide();
                $(".contenedor article ").width(300);
            break;

            case "2":
                
                $(".contenedor .item4").show();
                $(".contenedor .item5").show();
                $(".contenedor .item2").hide();
                $(".contenedor .item3").hide();
                
            break;

            case "3":

                $(".contenedor .item3").show();
                $(".contenedor .item4").hide();
                $(".contenedor .item5").hide();
                $(".contenedor .item2").hide();
                $(".contenedor article ").width(220);
            break;
            
            case "4":
                
                $("#termi").show();
                $(".contenedor .item5").show();
                $(".contenedor .item4").hide();
                $(".contenedor .item3").hide();
                $(".contenedor article ").width(220);
            break;
        }
    });
});