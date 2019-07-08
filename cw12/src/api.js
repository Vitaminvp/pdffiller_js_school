let array = [
  {
    id: 1,
    name: "Bob"
  },
  {
    id: 2,
    name: "Jim"
  },
  {
    id: 3,
    name: "Bili"
  },
  {
    id: 4,
    name: "Kolya"
  }
];

const api =  {
    get: (str) => new Promise(resolve => {
        setTimeout(() => {
            resolve(
                array.filter(arr => arr.name.toLowerCase().includes(str.toLowerCase()))
            );
        }, 1000);
    }),
    put: (name) => new Promise(resolve => {
        setTimeout(() => {
            array.push({id: Date.now(), name});
            resolve(
                array
            );
        }, 1000);
    }),
    delete: (id) => new Promise(resolve => {
        setTimeout(() => {
            array = [...array.filter(arr => String(arr.id) !== id)];
            resolve(
                array
            );
        }, 1000);
    })

};

export default api;
