
// Задача 3
"use strict"

class Student {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }
    addMark(mark, subject) {
        if (this.marks?.[subject] === undefined && mark >= 2 && mark <= 5) {
        this.marks[subject] = [];
        this.marks[subject].push(mark);
      } else if (this.marks.hasOwnProperty(subject) && mark >= 2 && mark <= 5) {
        this.marks[subject].push(mark);
      }
    }
    getAverageBySubject(subject) {
      if (this.marks.hasOwnProperty(subject) === false) {
        return 0;
      }
      const gradePointAverage = this.marks[subject].reduce((acc, mark, index, arr) => {
        acc += mark;
        if (index === arr.length - 1) {
          return acc / arr.length;
        }
        return acc;
      }, 0);
      return gradePointAverage;
    }
    getAverage() {
      if (Object.keys(this.marks).length === 0) {
        return 0;
      }
      let allSubject = Object.keys(this.marks);
      for (let subject of allSubject) {
        allSubject[allSubject.indexOf(subject)] = this.getAverageBySubject(subject);
      }
      const gradePointAverage = allSubject.reduce((acc, mark, index, arr) => {
        acc += mark;
        if (index === arr.length - 1) {
            return acc / arr.length;
        }
        return acc;
        }, 0);
        return gradePointAverage;
    }
  }