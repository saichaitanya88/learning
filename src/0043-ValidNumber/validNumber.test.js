describe("Valid Number", () => {
    it("", () => {
        var decimal = '.';
        var exp = 'e';
        var negation = '-';
        var positive = '+';
        var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var validNums = [negation, positive, decimal, exp].concat(numbers);

        var isNumber = function (s) {
            var input = s.trim();
            if (input.length == 0) {
                return false;
            }
            var hasValidCharsOnly = input.split('')
                .map(char => validNums.includes(char))
                .reduce((a, b) => a && b, true);
            if (!hasValidCharsOnly) {
                return false;
            }

            var isExpUsageValid = false;
            var indexOfE = input.indexOf(exp);
            var expExists = indexOfE > -1;
            if (indexOfE == 0 || indexOfE == input.length - 1) {
                return false;
            }
            // check no repeated exp
            for (var i = indexOfE + 1; i < input.length; i++) {
                if (input[i] == exp) {
                    return false;
                }
            }
            // exp cannot be followed by decimal
            if (expExists) {
                for (var i = indexOfE + 1; i < input.length; i++) {
                    if (input[i] == decimal) {
                        return false;
                    }
                }
            }

            var isDecimalUsageValid = false;
            var indexOfDecimal = input.indexOf(decimal);
            var decimalExists = indexOfDecimal > -1;
            if (indexOfDecimal == 0 && input.length == 1) {
                return false;
            }
            // check no repeated decimal
            for (var i = indexOfDecimal + 1; i < input.length; i++) {
                if (input[i] == decimal) {
                    return false;
                }
            }
            // decimal cannot be immediately followed by exp unless preceeded by number
            var decimalFollowedByExp = decimalExists && input[indexOfDecimal + 1] == exp;
            var decimalPreceededByNumber = decimalExists && numbers.includes(input[indexOfDecimal - 1]);
            if (decimalFollowedByExp && !decimalPreceededByNumber) {
                return false;
            }

            var indexOfNegation = input.indexOf(negation);
            var negationExists = indexOfNegation > -1;
            var negationIsPreceededByExp = negationExists && input[indexOfNegation - 1] == exp;
            if (negationExists && indexOfNegation != 0 && !negationIsPreceededByExp) {
                return false;
            }
            // check no repeated exp
            for (var i = indexOfNegation + 1; i < input.length; i++) {
                if (input[i] == negation) {
                    return false;
                }
            }
            // negation must not be followed by exp
            if (negationExists && input[indexOfNegation + 1] == exp) {
                return false;
            }
            let isIndexOfNegativeIsLastChar = indexOfNegation == input.length - 1;
            if (isIndexOfNegativeIsLastChar){
                return false;
            }
            var indexOfPositive = input.indexOf(positive);
            var positiveExists = indexOfPositive > -1;
            var positiveIsFollowedByExp = positiveExists && input[indexOfPositive - 1] == exp;
            if (positiveExists && indexOfPositive != 0 && !positiveIsFollowedByExp) {
                return false;
            }
            let isIndexOfPositiveIsLastChar = indexOfPositive == input.length - 1;
            if (isIndexOfPositiveIsLastChar){
                return false;
            }
            // check no repeated exp
            for (var i = indexOfPositive + 1; i < input.length; i++) {
                let preceededByExp = input[i-1] == exp;
                if (input[i] == positive && !preceededByExp) {
                    return false;
                }
            }

            // must contain atleast one number
            var hasAtleastOneNumber = input.split('')
                .map(char => numbers.includes(char))
                .reduce((a, b) => a || b, false);
            if (!hasAtleastOneNumber) {
                return false;
            }
            return true;
        }
        expect(isNumber("0")).toBeTruthy();
        expect(isNumber("0.1")).toBeTruthy();
        expect(isNumber("abc")).toBeFalsy();
        expect(isNumber("1 a")).toBeFalsy();
        expect(isNumber("2e10")).toBeTruthy();
        expect(isNumber("e")).toBeFalsy();
        expect(isNumber("..")).toBeFalsy();
        expect(isNumber("ee")).toBeFalsy();
        expect(isNumber(".e1")).toBeFalsy();
        expect(isNumber("3.")).toBeTruthy();
        expect(isNumber(".1")).toBeTruthy();
        expect(isNumber("-1.")).toBeTruthy();
        expect(isNumber("-.8")).toBeTruthy();
        expect(isNumber("+.8")).toBeTruthy();
        expect(isNumber("++++")).toBeFalsy();
        expect(isNumber(" -.")).toBeFalsy();
        expect(isNumber("46.e3")).toBeTruthy();
        expect(isNumber("6e6.5")).toBeFalsy();
        expect(isNumber("-e58")).toBeFalsy();
        expect(isNumber(" 005047e+6")).toBeTruthy();
        expect(isNumber("4e+")).toBeFalsy();
        expect(isNumber("32.e-80123")).toBeTruthy();
        expect(isNumber(" +0e-")).toBeFalsy();
        expect(isNumber("+42e+76125")).toBeTruthy();
    });
});