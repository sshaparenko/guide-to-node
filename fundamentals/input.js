console.log('Hey', process.argv[2]);
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});