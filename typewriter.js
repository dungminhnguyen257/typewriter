let counter = 0
const sentence = "hello there from lighthouse labs";
for (const char of sentence) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, counter)
counter += 50 
}
setTimeout(() => process.stdout.write("\n"), counter)