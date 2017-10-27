$(function(){
  var itemCount = 0;
  var priceTotal = 0;
  var tax = 1.06;


  //adding item to cart
  $('.add').on('click', function(){
    $(this).siblings().clone().appendTo('#cart-items').append('<button class="remove-item">Remove Item</button>');

    // var taxPrice = parseInt($(this).siblings().find('price').html());
    // price-=priceTotal;
    var price = parseInt($(this).siblings().find('.price').html());
    priceTotal+=price;
    var withTax= priceTotal * tax;
    var minus = withTax - priceTotal;
    $('#cart-tax').html('tax: $ ' + minus.toFixed(2) );
    $('#cart-total').html('Total: $ ' + withTax.toFixed(2));
  });






  //open cart
  $('#open-cart').on('click', function(){
    $('#shopping-cart').fadeIn(700);
  });
  $('#close-cart').on('click', function(){
    $('#shopping-cart').fadeOut();
  })
});
