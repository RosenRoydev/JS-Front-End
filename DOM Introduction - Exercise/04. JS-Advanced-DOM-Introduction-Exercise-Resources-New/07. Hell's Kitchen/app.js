function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
 
   function onClick() {
     let input = document.querySelector('div textarea').value;
     // Parse the input to an array of strings without brackets and extra quotes
     let splittedInput = input.slice(1, -1).split('","').map(str => str.replace(/["]/g, ''));
     let restaurants = {};
 
     for (const item of splittedInput) {
       let [restaurant, workers] = item.split(' - ');
       if (!restaurants[restaurant]) {
         restaurants[restaurant] = [];
       }
 
       let workersData = workers.split(', ');
       for (const workerData of workersData) {
         let [name, salary] = workerData.split(' ');
         restaurants[restaurant].push({ name, salary: Number(salary) });
       }
     }
 
     let bestRestaurant = '';
     let bestAverageSalary = 0;
 
     for (const restaurant in restaurants) {
       let workers = restaurants[restaurant];
       let totalSalary = 0;
 
       for (let i = 0; i < workers.length; i++) {
         totalSalary += workers[i].salary;
       }
 
       let averageSalary = totalSalary / workers.length;
       if (averageSalary > bestAverageSalary) {
         bestRestaurant = restaurant;
         bestAverageSalary = averageSalary;
       }
     }
 
     let restaurantWorkers = restaurants[bestRestaurant].sort((a, b) => b.salary - a.salary);
     let bestRestaurantBestSalary = restaurantWorkers[0].salary;
     let averageBestSalary = bestAverageSalary;
 
     const bestRestaurantOutput = `Name: ${bestRestaurant} Average Salary: ${averageBestSalary.toFixed(2)} Best Salary: ${bestRestaurantBestSalary.toFixed(2)}`;
     const workersOutput = restaurantWorkers.map(worker => `Name: ${worker.name} With Salary: ${worker.salary}`).join(' ');
 
     document.querySelector('#bestRestaurant p').textContent = bestRestaurantOutput;
     document.querySelector('#workers p').textContent = workersOutput;
   }
 }
 