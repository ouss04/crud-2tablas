const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM vehiculo', (err, vehiculos) => {
     if (err) {
      res.json(err);
     }
     //console.log(res.json(vehiculos));
     res.render('vehiculos', {
        data: vehiculos
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO vehiculo set ?', data, (err, vehiculo) => {
      console.log(vehiculo)
      res.redirect('/vehiculo');
    })
  })
};

controller.edit = (req, res) => {
  const { bastidor } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM vehiculo WHERE bastidor = ?", [bastidor], (err, rows) => {
      res.render('vehiculos_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { bastidor } = req.params;
  const newVehiculo = req.body;
  req.getConnection((err, conn) => {
    conn.query('UPDATE vehiculo set ? where bastidor = ?', [newVehiculo, bastidor], (err, rows) => {
      res.redirect('/vehiculo');
    });
  });
};

controller.delete = (req, res) => {
  const { bastidor } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM vehiculo WHERE bastidor = ?', [bastidor], (err, rows) => {
      res.redirect('/vehiculo');
    });
  });
}

module.exports = controller;
