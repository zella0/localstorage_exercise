(function() {
  'use strict';

  const renderCars = function(cars) {
    const $ul = $('ul');

    for (const car of cars) {
      const content = `${car.make} ${car.model} ${car.color} ${car.price}`;
      const $li = $('<li>').text(content);

      $ul.append($li);
    }
  };

  const $xhr = $.ajax({
    method: 'get',
    url: 'https://api.myjson.com/bins/4703f',
    dataType: 'json'
  });

  $xhr.done((data) => {
    renderCars(data);
  });
})();
