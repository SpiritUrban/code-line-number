const l = console.log;

module.exports = () => {

    var err = new Error(); // err = a lot of text strings (stack)

    //
    // the IE crutch - IE requires the Error to actually be throw  else is undefined.
    //
    const ieCrutch = () => { try { throw err } catch (err) { } };

    if (!err.stack) ieCrutch();
    if (!err.stack) return 0; // probably IE <10

    var stack = err.stack.toString().split(/\r\n|\n/); // convert text to array of text lines

    var frameRE = /:(\d+):(?:\d+)[^\d]*$/;
    l(frameRE)

    const result = stack.find(line => {
        l('*', !frameRE.exec(line))
        return frameRE.exec(line)
    })
    l('result ', result)

    const parsed = frameRE.exec(result);
    const desired = parsed[1]

    l('x-', { parsed, desired })

    return desired;
}
