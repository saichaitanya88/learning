describe("Set Matrix Zeros", () => {

    it("should set matrix zeros", () => {

        var setMatrixZeros = (matrix) => {
            let colIndexes = [];
            let rowIndexes = [];
            matrix.forEach((row, rowIndex) => {
                row.forEach((col, colIndex) => {
                    if (col == 0) {
                        colIndexes.push(colIndex);
                        rowIndexes.push(rowIndex);
                    }
                })
            });

            matrix.forEach((row, rowIndex) => {
                row.forEach((col, colIndex) => {
                    if (colIndexes.includes(colIndex) || rowIndexes.includes(rowIndex)) {
                        matrix[rowIndex][colIndex] = 0;
                    }
                });
            });
        };

        let input = [
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 1]
        ];
        let output = [
            [1, 0, 1],
            [0, 0, 0],
            [1, 0, 1]
        ];
        setMatrixZeros(input)
        expect(input).toEqual(output);

        input = [
            [0, 1, 2, 0],
            [3, 4, 5, 2],
            [1, 3, 1, 5]
        ];
        output = [
            [0, 0, 0, 0],
            [0, 4, 5, 0],
            [0, 3, 1, 0]
        ];
        setMatrixZeros(input)
        expect(input).toEqual(output);

        // passes 159 / 159
    });

});