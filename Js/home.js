$(document).ready(function(){

    $("#seleccionador-de-categoria").change(function(){
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
                $(".contenedor .item4").hide();
                $(".contenedor .item5").hide();
                $("#himym").hide();
                $("#friends").hide();
                $("#seinf").hide();
                $("#deadp").show();
                $("#termi").show();
                $("#duro").show();
                $(".contenedor article ").width(350);
            break;

            case "2":
                $(".contenedor .item4 ").show();
                $(".contenedor .item5 ").show();
                $(".contenedor .item2").hide();
                $(".contenedor .item3").hide();
                $("#office").hide();
                $("#70show").hide();
                $(".contenedor article ").width(350);

            break;

            case "3":
                
                $(".contenedor .item3 ").show();
                $(".contenedor .item4 ").show();
                $(".contenedor .item5 ").show();
                $("#himym").show();

                $("#termi").hide();
                $("#jaws").hide();
                $("#juras").hide();
                $("#duro").hide();
                $(".contenedor article ").width(220);

            break;

            case "4":
                
                $("#termi").show();
                $("#juras").show();

                $("#jaws").hide();
                $("#deadp").hide();
                $("#duro").hide();
                $("#himym").hide();
                $("#friends").hide();
                $("#seinf").hide();
                $("#office").hide();
                $("#70show").hide();
              
              
                $(".contenedor article ").width(320);

            break;

            case "5":
                
                $("#70show").show();
                
                $("#himym").show();
                $("#friends").show();
                $("#jaws").hide();
                $("#deadp").hide();
                $("#duro").hide();
                $("#seinf").hide();
                $("#office").hide();
                $("#termi").hide();
                $("#juras").hide();

              
                $(".contenedor article ").width(320);

            break;
        }
    });

  
        $("#buscador").keyup(function(e){
            let buscador=$(this).val();
            switch(buscador){

                case "":

                $(".item2").show();
                $(".item3").show();
                $(".item4").show();
                $(".item5").show();
                $(".contenedor article ").width(250);


                break;


                case  "termi" : case  "terminator": case "t":
    
                    $(".contenedor .item2").hide();
                    $("#termi").show();
                    $(".contenedor .item3").hide();
                    $(".contenedor .item4").hide();
                    $(".contenedor .item5").hide();
                    $(".contenedor article ").width(350);
                break;
    
                case "d": case "deadpool": case "dead": 

                    $("#deadp").show();
                    $(".contenedor .item4").hide();
                    $(".contenedor .item5").hide();
                    $("#himym").hide();
                    $("#friends").hide();
                    $("#seinf").hide();
                    $("#termi").hide();
                    $("#duro").hide();
                    $(".contenedor article ").width(350);
                break;
    
                case "d": case "duro de matar": case "duro":  case"dur":
                    
                    $(".contenedor .item4 ").hide();
                    $(".contenedor .item5 ").hide();
                    $(".contenedor .item2").hide();
                    $("#duro").show();
                    $(".contenedor .item3").hide();
                    $("#office").hide();
                    $("#70show").hide();
                    $(".contenedor article ").width(350);
    
                break;
    
                case "tiburon": case "tibu": case "t":
                    
                    $(".contenedor .item3 ").hide();
                    $(".contenedor .item4 ").hide();
                    $(".contenedor .item5 ").hide();
                    $("#himym").hide();
                    $("#termi").hide();
                    $("#jaws").show();
                    $("#juras").hide();
                    $("#duro").hide();
                    $(".contenedor article ").width(350);
    
                break;
    
                case "jurassic park": case "jura" : case"j":
                    
                    $("#termi").hide();
                    $("#juras").show();
                    $("#jaws").hide();
                    $("#deadp").hide();
                    $("#duro").hide();
                    $("#himym").hide();
                    $("#friends").hide();
                    $("#seinf").hide();
                    $("#office").hide();
                    $("#70show").hide();
                  
                  
                    $(".contenedor article ").width(350);
    
                break;
    
                case "how i met your mother": case "how": case"h":
                    
                    $("#70show").hide();
                    $("#himym").show();
                    $("#friends").hide();
                    $("#jaws").hide();
                    $("#deadp").hide();
                    $("#duro").hide();
                    $("#seinf").hide();
                    $("#office").hide();
                    $("#termi").hide();
                    $("#juras").hide();
    
                  
                    $(".contenedor article ").width(350);
    
                break;

                case "seinfield": case "sein": case"s":
                    
                    $("#70show").hide();
                    $("#himym").hide();
                    $("#friends").hide();
                    $("#jaws").hide();
                    $("#deadp").hide();
                    $("#duro").hide();
                    $("#seinf").show();
                    $("#office").hide();
                    $("#termi").hide();
                    $("#juras").hide();
    
                  
                    $(".contenedor article ").width(350);
    
                break;

                case "the office": case "the ": case "offi": case "t":
                    
                    $("#70show").hide();
                    $("#himym").hide();
                    $("#friends").hide();
                    $("#jaws").hide();
                    $("#deadp").hide();
                    $("#duro").hide();
                    $("#seinf").hide();
                    $("#office").show();
                    $("#termi").hide();
                    $("#juras").hide();
    
                  
                    $(".contenedor article ").width(350);
    
                break;

                case "thats 70 show": case "that": case "t":
                    
                    $("#70show").show();
                    $("#himym").hide();
                    $("#friends").hide();
                    $("#jaws").hide();
                    $("#deadp").hide();
                    $("#duro").hide();
                    $("#seinf").hide();
                    $("#office").hide();
                    $("#termi").hide();
                    $("#juras").hide();
    
                  
                    $(".contenedor article ").width(350);
    
                break;

                case "friends": case "frie": case "f":
                    
                    $("#70show").hide();
                    $("#himym").hide();
                    $("#friends").show();
                    $("#jaws").hide();
                    $("#deadp").hide();
                    $("#duro").hide();
                    $("#seinf").hide();
                    $("#office").hide();
                    $("#termi").hide();
                    $("#juras").hide();
    
                  
                    $(".contenedor article ").width(350);
    
                break;
                
            }
        });
    
    
   });


