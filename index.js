// Code your solution here
function findMatching(){
    const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
    const name = 'Sammy';
    
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}


//soln 
function findMatching(drivers, name) {
  return drivers.filter(driver =>
    driver.toLowerCase() === name.toLowerCase()
  );
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.startsWith(letters));
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}
