const l = console.log;

/**
* the IE crutch - IE requires the Error to actually be throw  else is undefined.
*/
const ieCrutch = (err) => { try { throw err } catch (err) { return err } };

module.exports = (depthLevel, command) => {
    var err = new Error(); // err = a lot of text strings (stack)
    if (!err.stack) err = ieCrutch(err);
    if (!err.stack) return 0; // probably IE <10
    const stack = err.stack.toString().split(/\r\n|\n/); // convert text to array of text lines
    const nextLne = stack[depthLevel];
    const whoDirtyArr = nextLne.split(':');
    whoDirtyArr.pop();
    const line = whoDirtyArr.pop();
    if (command == 'report') l('bunch:', { nextLne, stack });
    return line
};
