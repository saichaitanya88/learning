describe("DetectLinkedListCycle", () => {
    it("", () => {
        var detectCycle = function (head) {
            if (!head || !head.next) {
                return null;
            }
            let visitedNodes = [];
            let runner = head.next;
            visitedNodes.push(head);
            while (runner) {
                if (visitedNodes.includes(runner)) {
                    return runner;
                }
                visitedNodes.push(runner);
                runner = runner.next;
            }
            return null;
        };
    });
    it("solve without extra space", () => {
        var detectCycle = function (head) {
            if (!head || !head.next) {
                return null;
            }

            let slowRunner = head;
            let fastRunner = head;

            while (slowRunner && fastRunner) {
                slowRunner = slowRunner.next;
                if (!fastRunner.next) {
                    return null;
                }

                if (fastRunner.next && fastRunner.next.next) {
                    fastRunner = fastRunner.next.next;
                }

                if (slowRunner == fastRunner) {
                    slowRunner = head;
                    while (slowRunner != fastRunner) {
                        slowRunner = slowRunner.next;
                        if (!fastRunner){
                            return null;
                        }
                        fastRunner = fastRunner.next;
                    }
                    return slowRunner;
                }
            }

            return null;
        };
    });
});