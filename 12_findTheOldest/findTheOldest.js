const findTheOldest = function(people) {
  const oldest = people.sort((person, nextPerson) => {
    const date = new Date();
    const currentYear = date.getFullYear();
    if(!(nextPerson.yearOfDeath)) {
      return person.yearOfDeath - person.yearOfBirth > currentYear - nextPerson.yearOfBirth ? -1 : 1;
    }

    if(!(person.yearOfDeath)) {
      return currentYear - person.yearOfBirth > nextPerson.yearOfDeath - nextPerson.yearOfBirth ? -1 : 1;
    }

    return person.yearOfDeath - person.yearOfBirth > nextPerson.yearOfDeath - nextPerson.yearOfBirth ? -1 : 1;

  });
  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
