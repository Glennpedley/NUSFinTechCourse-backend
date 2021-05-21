// var primary_school_exam = (subject) => {
//   if (subject == "maths") {
//     console.log("What is 5 x 10?");
//   } else if (subject == "science") {
//     console.log("How many bones in human body?");
//   }
// };
// var high_school_exam = (subject) => {
//   if (subject == "maths") {
//     console.log("What is sin(45)?");
//   } else if (subject == "science") {
//     console.log("What are atoms?");
//   }
// };

function examination_center(level, subject) {
    console.log("Exam Instructions....");
    level(subject);
    console.log("You can leave the hall.");
  }
  
  // var subject = "science";
  // examination_center(primary_school_exam, subject);
  
  // examination_center(primary_school_exam, "science");
  
  examination_center((subject) => {
    if (subject == "science") {
      console.log("What is the weight of a proton?");
    }
  }, "science");
  