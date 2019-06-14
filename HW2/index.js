/*
 * Complete the 'arrange' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING sentence as parameter.
 */

function arrange(sentence) {
  // Write your code here
  //   const sub = sentence
  //   .slice(0, sentence.length-1);
  //   console.log("sub", sub);
  const str = sentence
    //.replace(".", "")
      .slice(0, sentence.length-1)
    .toLowerCase()
      .replace(/[^a-z\ +]/gi, '')
    .split(" ")
      .filter(item=> item.length)
    .map(item => item.trim())
    .sort((a, b) => {
      if (a.length > b.length) return 1;
      if (a.length < b.length) return -1;
    }).join(' ');


  return str[0].toUpperCase() + str.slice(1) + '.';
}

console.log('[',arrange("The li&&&nes are printed**  in      reve23424rse           ord///er."),']');
console.log(arrange("Here i come."));
console.log(arrange("I love to code."));

// function Node(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
// };

// function BinarySearchTree() {
//     this.insert = function(root, data) {
//         if (root === null) {
//             this.root = new Node(data);
//
//             return this.root;
//         }
//
//         if (data <= root.data) {
//             if (root.left) {
//                 this.insert(root.left, data);
//             } else {
//                 root.left = new Node(data);
//             }
//         } else {
//             if (root.right) {
//                 this.insert(root.right, data);
//             } else {
//                 root.right = new Node(data);
//             }
//         }
//
//         return this.root;
//     };
//
//
//     this.isPresent = function(root, val) {
//         // Add your code here
//         if (!root) {
//             return 0;
//         }
//
//         if (val < root.data) {
//             return this.isPresent(root.left, val)
//         } else if (val > root.data) {
//             return this.isPresent(root.right, val)
//         }
//
//         return 1;
//     };
//
// };