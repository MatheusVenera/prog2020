$(function() {

  $.ajax({
      url: 'http://localhost:5000/index_cars',
      method: 'GET',
      dataType: 'json',
      success: listCars,
      error: () => {
          alert("Erro no backend!");
      }
  });

  function listCars(cars) {
      for (var i in cars) {
          line = `<tr>
            <td>${cars[i].model}</td>
            <td>${cars[i].car_type}</td>
            <td>${cars[i].brand}</td>
            </tr>`;
          $('#carTableContent').append(line);
      }
  }

});