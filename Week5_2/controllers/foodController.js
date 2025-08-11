
// Sample data (pretending it's from a database)
const foodItems = [
    { id: 1, name: 'Pizza', price: '$12' },
    { id: 2, name: 'Burger', price: '$8' },
    { id: 3, name: 'Sushi', price: '$15' }
  ];
  
  // Controller logic
  exports.getAllFood = (req, res) => {
    res.json({
      status: 200,
      data: foodItems,
      message: 'Food menu retrieved successfully'
    });
  };

/*exports.getAllFood = (req, res) => {
res.json({ data: ['Pizza', 'Burger', 'Sushi'] });
};*/