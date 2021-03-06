const db = require('./models/index')
const Paintings = require('./models/paintings')

  
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('paintings').del()
    .then(function () {
      // Inserts seed entries
      return knex('paintings').insert([
    {
        name:"Mona Lisa",
    
        artist:"Leonardo Da Vinci",
    
        url:"https://rb.gy/mkb5pf",
    
        likes:null,
    
        painted_in:"1503"
        
    },
    
    {
        name:"The Last Supper",
    
        artist:"Leonardo Da Vinci",
        
        url:"https://rb.gy/nagzxq",
        
        likes:null,
        
        painted_in:"1495-1498"
        
    },
    
    {
        name:"The Starry Night",
    
        artist:"Vincent van Gogh",
        
        url:"https://rb.gy/gh6kwz",
        
        likes:null,
        
        painted_in:"1889"
        
    },
    
    {
        name:"The Scream",
        
        artist:"Edvard Munch",
        
        url:"https://rb.gy/fejich",
        
        likes:null,
        
        painted_in:"1893"
        
    },
    
    {
        name:"Guernico",

        artist:"Pablo Picasso",

        url:"https://rb.gy/l6ni0z",

        likes:null,

        painted_in:"1937"
    }

      ]);
    });
};
