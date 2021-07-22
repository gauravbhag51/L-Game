function valid_l(index) {
    let row = Math.floor(index / 4);
    let col = Math.floor(index % 4);
    let extra = [];
    let temp = [
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9, 10, 11],
      [12, 13, 14, 15]
    ];
    let all_l = [[]];
    let test = [];
    if (row + 2 < 4) {
      let i = 0;
      while (i < 3) {
        test.push(temp[row + i][col]);
  
        i++;
      }
  
      if (col + 1 < 4) {
        test.push(temp[row + 2][col + 1]);
        all_l.push(
          test.map((e, index) => {
            return e;
          })
        );
        test.pop();
        //   //console.log("a=="+all_l[1]);
      }
      if (col - 1 >= 0) {
        test.push(temp[row + 2][col - 1]);
        all_l.push(
          test.map((e, index) => {
            return e;
          })
        );
      }
      test = [];
    }
  
    if (row + 1 < 4) {
      let i = 0;
      while (i < 2) {
        test.push(temp[row + i][col]);
        i++;
      }
      if (col + 2 < 4) {
        test.push(temp[row + 1][col + 1]);
        test.push(temp[row + 1][col + 2]);
        all_l.push(
          test.map((e, index) => {
            return e;
          })
        );
        test.splice(2, 2);
      }
      if (col - 2 >= 0) {
        test.push(temp[row + 1][col - 1]);
        test.push(temp[row + 1][col - 2]);
        all_l.push(
          test.map((e, index) => {
            return e;
          })
        );
      }
      test = [];
    }
  
    if (row - 2 >= 0) {
      let i = 0;
      while (i < 3) {
        test.push(temp[row - i][col]);
        i++;
      }
  
      if (col + 1 < 4) {
        test.push(temp[row - 2][col + 1]);
        all_l.push(
          test.map((e, index) => {
            return e;
          })
        );
        test.splice(3, 1);
      }
      if (col - 1 >= 0) {
        test.push(temp[row - 2][col - 1]);
        all_l.push(
          test.map((e, index) => {
            return e;
          })
        );
      }
      test = [];
    }
  
    if (row - 1 >= 0) {
      let i = 0;
      while (i < 2) {
        test.push(temp[row - i][col]);
        i++;
      }
      if (col + 2 < 4) {
        test.push(temp[row - 1][col + 1]);
        test.push(temp[row - 1][col + 2]);
        all_l.push(
          test.map((e, index) => {
            return e;
          })
        );
        test.splice(2, 2);
      }
      if (col - 2 >= 0) {
        test.push(temp[row - 1][col - 1]);
        test.push(temp[row - 1][col - 2]);
        all_l.push(
          test.map((e, index) => {
            return e;
          })
        );
      }
      test = [];
    }
  
    if (col + 2 < 4) {
      let i = 0;
      while (i < 3) {
        test.push(temp[row][col + i]);
        i++;
      }
  
      if (row + 1 < 4) {
        test.push(temp[row + 1][col + 2]);
        all_l.push(
          test.map((e, index) => {
            return e;
          })
        );
        test.splice(3, 1);
      }
  
      if (row - 1 >= 0) {
        test.push(temp[row - 1][col + 2]);
        all_l.push(
          test.map((e, index) => {
            return e;
          })
        );
      }
  
      test = [];
    }
  
    if (col + 1 < 4) {
      let i = 0;
      while (i < 2) {
        test.push(temp[row][col + i]);
        i++;
      }
  
      if (row + 2 < 4) {
        test.push(temp[row + 1][col + 1]);
        test.push(temp[row + 2][col + 1]);
        all_l.push(
          test.map((e, index) => {
            return e;
          })
        );
        test.splice(2, 2);
      }
  
      if (row - 2 >= 0) {
        test.push(temp[row - 1][col + 1]);
        test.push(temp[row - 2][col + 1]);
        all_l.push(
          test.map((e, index) => {
            return e;
          })
        );
      }
  
      test = [];
    }
  
    if (col - 2 >= 0) {
      let i = 0;
      while (i < 3) {
        test.push(temp[row][col - i]);
        i++;
      }
  
      if (row + 1 < 4) {
        test.push(temp[row + 1][col - 2]);
        all_l.push(
          test.map((e, index) => {
            return e;
          })
        );
        test.splice(3, 1);
      }
  
      if (row - 1 >= 0) {
        test.push(temp[row - 1][col - 2]);
        all_l.push(
          test.map((e, index) => {
            return e;
          })
        );
      }
  
      test = [];
    }
  
    if (col - 1 >= 0) {
      let i = 0;
      while (i < 2) {
        test.push(temp[row][col - i]);
        i++;
      }
  
      if (row + 2 < 4) {
        test.push(temp[row + 1][col - 1]);
        test.push(temp[row + 2][col - 1]);
        all_l.push(
          test.map((e, index) => {
            return e;
          })
        );
        test.splice(2, 2);
      }
  
      if (row - 2 >= 0) {
        test.push(temp[row - 1][col - 1]);
        test.push(temp[row - 2][col - 1]);
        all_l.push(
          test.map((e, index) => {
            return e;
          })
        );
      }
  
      test = [];
    }
  
    return all_l;
  }
  export default valid_l;
  